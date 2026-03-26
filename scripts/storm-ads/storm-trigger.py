#!/usr/bin/env python3
"""
Main automation script: check for hail storms and create campaigns.

Checks NWS active alerts for hail warnings in Colorado cities where Gates
operates. If hail >= 1" is detected, creates a PAUSED campaign for that city.

Usage:
    python storm-trigger.py                # Check and create campaigns
    python storm-trigger.py --dry-run      # Check without creating
    python storm-trigger.py --force Denver  # Force-create for a city (testing)

Can be run on a cron schedule (e.g., every 30 minutes during storm season).
"""

import argparse
import json
import os
import re
import subprocess
import sys
from datetime import date, datetime

import requests

from ads_client import load_config

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
STATE_FILE = os.path.join(SCRIPT_DIR, ".storm-state.json")


def load_state():
    """Load state to avoid creating duplicate campaigns."""
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, "r") as f:
            return json.load(f)
    return {"campaigns_created": {}}


def save_state(state):
    with open(STATE_FILE, "w") as f:
        json.dump(state, f, indent=2)


def campaign_exists_today(state, city):
    """Check if we already created a campaign for this city today."""
    today = date.today().isoformat()
    key = f"{city}:{today}"
    return key in state.get("campaigns_created", {})


def record_campaign(state, city):
    """Record that we created a campaign for this city today."""
    today = date.today().isoformat()
    key = f"{city}:{today}"
    state.setdefault("campaigns_created", {})[key] = {
        "created_at": datetime.now().isoformat(),
    }
    save_state(state)


def check_nws_alerts(config):
    """
    Check NWS active alerts for hail in Colorado.
    Returns list of dicts: [{city, hail_size, alert_type, headline}]
    """
    base = config["storm_trigger"]["nws_api_base"]
    url = f"{base}/alerts/active?area=CO"
    headers = {"User-Agent": "GatesEnterprisesStormAds/1.0 (alex@gatesroof.com)"}

    try:
        resp = requests.get(url, headers=headers, timeout=15)
        resp.raise_for_status()
        data = resp.json()
    except Exception as e:
        print(f"⚠️  NWS API error: {e}")
        return []

    cities = config["colorado_cities"]
    min_size = config["storm_trigger"]["min_hail_size_inches"]
    detections = []

    for feature in data.get("features", []):
        props = feature.get("properties", {})
        event = props.get("event", "")
        headline = props.get("headline", "")
        description = props.get("description", "")
        full_text = f"{headline} {description}".lower()

        # Look for hail-related alerts
        if "hail" not in full_text:
            continue

        # Try to extract hail size (e.g., "1.5 inch hail", "quarter size hail")
        hail_size = extract_hail_size(full_text)
        if hail_size is None or hail_size < min_size:
            continue

        # Check which cities are affected
        area_desc = props.get("areaDesc", "")
        for city_name in cities:
            if city_name.lower() in area_desc.lower() or city_name.lower() in full_text:
                detections.append({
                    "city": city_name,
                    "hail_size": hail_size,
                    "alert_type": event,
                    "headline": headline,
                })

    return detections


def extract_hail_size(text):
    """
    Extract hail size in inches from alert text.
    Handles: "1.5 inch", "2 inch", "quarter size", "golf ball", etc.
    """
    text = text.lower()

    # Direct inch measurements
    match = re.search(r'(\d+\.?\d*)\s*(?:inch|in\.?|")\s*(?:hail|diameter)', text)
    if match:
        return float(match.group(1))

    # Common size descriptions
    size_map = {
        "pea": 0.25,
        "marble": 0.5,
        "dime": 0.7,
        "penny": 0.75,
        "nickel": 0.88,
        "quarter": 1.0,
        "half dollar": 1.25,
        "walnut": 1.5,
        "ping pong": 1.5,
        "golf ball": 1.75,
        "hen egg": 2.0,
        "tennis ball": 2.5,
        "baseball": 2.75,
        "softball": 4.0,
        "grapefruit": 4.0,
    }
    for name, size in size_map.items():
        if name in text:
            return size

    return None


def check_hailscore_api(config):
    """
    Check HailScore's storm alerts API for recent hail events.
    Returns list of dicts with city and hail_size.
    """
    url = config["storm_trigger"]["hailscore_api"]
    secret = config["storm_trigger"]["hailscore_cron_secret"]

    try:
        resp = requests.post(
            url,
            headers={"x-cron-secret": secret},
            timeout=15,
        )
        resp.raise_for_status()
        data = resp.json()
    except Exception as e:
        print(f"⚠️  HailScore API error: {e}")
        return []

    # Parse HailScore response for relevant alerts
    # (Structure depends on HailScore's API response format)
    cities = config["colorado_cities"]
    min_size = config["storm_trigger"]["min_hail_size_inches"]
    detections = []

    alerts = data.get("alerts", [])
    for alert in alerts:
        hail_size = alert.get("maxHailSize", 0)
        if hail_size < min_size:
            continue

        affected_areas = alert.get("affectedAreas", [])
        for area in affected_areas:
            city_name = area.get("city", "")
            if city_name in cities:
                detections.append({
                    "city": city_name,
                    "hail_size": hail_size,
                    "alert_type": "HailScore Alert",
                    "headline": alert.get("headline", "Hail detected"),
                })

    return detections


def create_campaign_for_city(city, hail_size, dry_run=False):
    """Run create-campaign.py for a given city."""
    script = os.path.join(SCRIPT_DIR, "create-campaign.py")
    cmd = [
        sys.executable, script,
        "--city", city,
        "--hail-size", str(hail_size),
    ]
    if dry_run:
        cmd.append("--dry-run")

    result = subprocess.run(cmd, capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print(result.stderr, file=sys.stderr)
    return result.returncode == 0


def main():
    parser = argparse.ArgumentParser(description="Storm trigger - check for hail and create campaigns")
    parser.add_argument("--dry-run", action="store_true", help="Check without creating campaigns")
    parser.add_argument("--force", metavar="CITY", help="Force-create campaign for a city (testing)")
    parser.add_argument("--force-size", type=float, default=1.5, help="Hail size for --force (default: 1.5)")
    parser.add_argument("--source", choices=["nws", "hailscore", "both"], default="both",
                        help="Data source (default: both)")
    args = parser.parse_args()

    config = load_config()
    state = load_state()
    now = datetime.now()

    print(f"🌩️  Storm Trigger — {now.strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"{'='*60}")

    # Force mode (testing)
    if args.force:
        city = args.force
        if city not in config["colorado_cities"]:
            print(f"❌ City '{city}' not in config.")
            sys.exit(1)
        print(f"⚡ Force mode: creating campaign for {city} ({args.force_size}\" hail)")
        if not args.dry_run and campaign_exists_today(state, city):
            print(f"⚠️  Campaign already created for {city} today. Use a new date or clear .storm-state.json")
            return
        success = create_campaign_for_city(city, args.force_size, args.dry_run)
        if success and not args.dry_run:
            record_campaign(state, city)
        return

    # Normal mode: check for storms
    detections = []

    if args.source in ("nws", "both"):
        print("🔍 Checking NWS alerts...")
        nws = check_nws_alerts(config)
        print(f"  Found {len(nws)} hail detections from NWS")
        detections.extend(nws)

    if args.source in ("hailscore", "both"):
        print("🔍 Checking HailScore API...")
        hs = check_hailscore_api(config)
        print(f"  Found {len(hs)} hail detections from HailScore")
        detections.extend(hs)

    # Deduplicate by city (keep largest hail size)
    city_map = {}
    for d in detections:
        city = d["city"]
        if city not in city_map or d["hail_size"] > city_map[city]["hail_size"]:
            city_map[city] = d

    if not city_map:
        print("\n✅ No qualifying hail events detected. All clear.")
        return

    print(f"\n🚨 {len(city_map)} cities with qualifying hail:")
    for city, info in sorted(city_map.items()):
        print(f"  - {city}: {info['hail_size']}\" hail ({info['alert_type']})")

    # Create campaigns
    created = 0
    skipped = 0
    for city, info in sorted(city_map.items()):
        print(f"\n{'─'*40}")
        if campaign_exists_today(state, city):
            print(f"⏭️  Skipping {city} — campaign already created today")
            skipped += 1
            continue

        print(f"🌩️  Creating campaign for {city}...")
        success = create_campaign_for_city(city, info["hail_size"], args.dry_run)
        if success and not args.dry_run:
            record_campaign(state, city)
            created += 1
        elif success:
            created += 1  # dry run counts as success

    print(f"\n{'='*60}")
    print(f"📊 Summary: {created} created, {skipped} skipped (already exists)")
    if created > 0 and not args.dry_run:
        print(f"⚠️  All campaigns created as PAUSED. Review and activate when ready.")
        print(f"📋 Run: python list-campaigns.py")


if __name__ == "__main__":
    main()
