#!/usr/bin/env python3
"""
Main automation script: check for hail storms and create campaigns.

Checks NWS active alerts for hail warnings in Colorado cities where Gates
operates. If hail >= 1" is detected, creates PAUSED campaigns on both
Google Ads and Meta, then sends a Discord notification to #tina.

Usage:
    python storm-trigger.py                      # Check and create campaigns
    python storm-trigger.py --dry-run            # Check without creating
    python storm-trigger.py --force Denver       # Force-create for a city (testing)
    python storm-trigger.py --activate Denver    # Activate paused campaigns for city

Cron (every 30 min, 6am-11pm):
    */30 6-23 * * * cd ~/gatesroof/scripts/storm-ads && source venv/bin/activate && python3 storm-trigger.py >> logs/storm-trigger.log 2>&1
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
LOG_DIR = os.path.join(SCRIPT_DIR, "logs")


def ensure_log_dir():
    os.makedirs(LOG_DIR, exist_ok=True)


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


def record_campaign(state, city, google_ok=False, meta_ok=False):
    """Record that we created a campaign for this city today."""
    today = date.today().isoformat()
    key = f"{city}:{today}"
    state.setdefault("campaigns_created", {})[key] = {
        "created_at": datetime.now().isoformat(),
        "google": google_ok,
        "meta": meta_ok,
    }
    save_state(state)


# ---------------------------------------------------------------------------
# Discord notification
# ---------------------------------------------------------------------------

def send_discord_notification(config, message: str):
    """
    Send a message to #tina via Discord webhook.
    Falls back silently if webhook URL is not configured.
    """
    notif = config.get("notifications", {})
    webhook_url = notif.get("discord_webhook_url", "").strip()

    if not webhook_url:
        print("  ⚠️  No Discord webhook configured — skipping notification")
        return False

    try:
        resp = requests.post(
            webhook_url,
            json={"content": message},
            timeout=10,
        )
        resp.raise_for_status()
        print("  ✅ Discord notification sent")
        return True
    except Exception as e:
        print(f"  ⚠️  Discord notification failed: {e}")
        return False


def build_storm_notification(city, hail_size, google_ok, meta_ok, dry_run=False):
    """Build the Discord notification message for a storm event."""
    mode = " [DRY RUN]" if dry_run else ""
    google_status = "✅ Created (PAUSED)" if google_ok else "❌ Failed"
    meta_status = "✅ Created (PAUSED)" if meta_ok else "❌ Failed"
    today = date.today().isoformat()

    return (
        f"🚨 **STORM ALERT — {city}**{mode}\n"
        f"**Hail size:** {hail_size}\"\n"
        f"**Date:** {today}\n\n"
        f"**Campaigns created:**\n"
        f"• Google Search: {google_status}\n"
        f"• Meta (FB/IG): {meta_status}\n\n"
        f"**Both are PAUSED.** Reply `activate {city}` to go live on both channels.\n"
        f"Google Ads: <https://ads.google.com/aw/campaigns>\n"
        f"Meta Ads: <https://business.facebook.com/adsmanager>"
    )


# ---------------------------------------------------------------------------
# Storm detection
# ---------------------------------------------------------------------------

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
        headline = props.get("headline", "")
        description = props.get("description", "")
        full_text = f"{headline} {description}".lower()

        if "hail" not in full_text:
            continue

        hail_size = extract_hail_size(full_text)
        if hail_size is None or hail_size < min_size:
            continue

        area_desc = props.get("areaDesc", "")
        for city_name in cities:
            if city_name.lower() in area_desc.lower() or city_name.lower() in full_text:
                detections.append({
                    "city": city_name,
                    "hail_size": hail_size,
                    "alert_type": props.get("event", ""),
                    "headline": headline,
                })

    return detections


def extract_hail_size(text):
    """Extract hail size in inches from alert text."""
    text = text.lower()

    match = re.search(r'(\d+\.?\d*)\s*(?:inch|in\.?|")\s*(?:hail|diameter)', text)
    if match:
        return float(match.group(1))

    size_map = {
        "pea": 0.25, "marble": 0.5, "dime": 0.7, "penny": 0.75,
        "nickel": 0.88, "quarter": 1.0, "half dollar": 1.25,
        "walnut": 1.5, "ping pong": 1.5, "golf ball": 1.75,
        "hen egg": 2.0, "tennis ball": 2.5, "baseball": 2.75,
        "softball": 4.0, "grapefruit": 4.0,
    }
    for name, size in size_map.items():
        if name in text:
            return size

    return None


def check_hailscore_api(config):
    """Check HailScore's storm alerts API for recent hail events."""
    url = config["storm_trigger"]["hailscore_api"]
    secret = config["storm_trigger"]["hailscore_cron_secret"]

    try:
        resp = requests.post(url, headers={"x-cron-secret": secret}, timeout=15)
        resp.raise_for_status()
        data = resp.json()
    except Exception as e:
        print(f"⚠️  HailScore API error: {e}")
        return []

    cities = config["colorado_cities"]
    min_size = config["storm_trigger"]["min_hail_size_inches"]
    detections = []

    for alert in data.get("alerts", []):
        hail_size = alert.get("maxHailSize", 0)
        if hail_size < min_size:
            continue
        for area in alert.get("affectedAreas", []):
            city_name = area.get("city", "")
            if city_name in cities:
                detections.append({
                    "city": city_name,
                    "hail_size": hail_size,
                    "alert_type": "HailScore Alert",
                    "headline": alert.get("headline", "Hail detected"),
                })

    return detections


# ---------------------------------------------------------------------------
# Campaign creation
# ---------------------------------------------------------------------------

def create_google_campaign(city, hail_size, dry_run=False):
    """Run create-campaign.py for Google Ads."""
    script = os.path.join(SCRIPT_DIR, "create-campaign.py")
    cmd = [sys.executable, script, "--city", city, "--hail-size", str(hail_size)]
    if dry_run:
        cmd.append("--dry-run")
    result = subprocess.run(cmd, capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print(result.stderr, file=sys.stderr)
    return result.returncode == 0


def create_meta_campaign(city, dry_run=False):
    """Run meta/create-campaign.py for Meta Ads."""
    script = os.path.join(SCRIPT_DIR, "meta", "create-campaign.py")
    cmd = [sys.executable, script, "--city", city]
    if not dry_run:
        cmd.append("--live")
    result = subprocess.run(cmd, capture_output=True, text=True, cwd=os.path.join(SCRIPT_DIR, "meta"))
    print(result.stdout)
    if result.stderr:
        print(result.stderr, file=sys.stderr)
    return result.returncode == 0


def activate_google_campaign(city):
    """Activate a paused Google Ads campaign for a city."""
    script = os.path.join(SCRIPT_DIR, "activate-campaign.py")
    today = date.today().isoformat()
    campaign_name = f"Storm Response - {city} - {today}"
    cmd = [sys.executable, script, "--name", campaign_name]
    result = subprocess.run(cmd, capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print(result.stderr, file=sys.stderr)
    return result.returncode == 0


def activate_meta_campaigns(city):
    """Activate all paused Meta campaigns for a city (list + activate each)."""
    list_script = os.path.join(SCRIPT_DIR, "meta", "list-campaigns.py")
    activate_script = os.path.join(SCRIPT_DIR, "meta", "activate-campaign.py")

    # List campaigns to find the right one
    result = subprocess.run(
        [sys.executable, list_script, "--live"],
        capture_output=True, text=True,
        cwd=os.path.join(SCRIPT_DIR, "meta"),
    )
    if result.returncode != 0:
        print(f"  ❌ Failed to list Meta campaigns: {result.stderr}")
        return False

    # Find campaign IDs for this city
    import re as _re
    campaign_ids = _re.findall(r'"id":\s*"(\d+)".*?"name":\s*"[^"]*' + city + '[^"]*"', result.stdout)
    if not campaign_ids:
        # Try a broader search - look for Storm Response campaigns for this city
        lines = result.stdout.split('\n')
        for i, line in enumerate(lines):
            if city in line and 'Storm' in line:
                # Try to find an id near this line
                for nearby in lines[max(0,i-3):i+3]:
                    m = _re.search(r'(\d{10,})', nearby)
                    if m:
                        campaign_ids.append(m.group(1))
                        break

    if not campaign_ids:
        print(f"  ⚠️  No Meta campaigns found for {city} — may need manual activation")
        return False

    ok = True
    for cid in campaign_ids:
        res = subprocess.run(
            [sys.executable, activate_script, "--campaign-id", cid, "--live"],
            capture_output=True, text=True,
            cwd=os.path.join(SCRIPT_DIR, "meta"),
        )
        print(res.stdout)
        if res.returncode != 0:
            print(f"  ❌ Failed to activate Meta campaign {cid}: {res.stderr}")
            ok = False
        else:
            print(f"  ✅ Meta campaign {cid} activated")

    return ok


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    ensure_log_dir()
    parser = argparse.ArgumentParser(description="Storm trigger — detect hail and deploy campaigns")
    parser.add_argument("--dry-run", action="store_true", help="Check without creating campaigns")
    parser.add_argument("--force", metavar="CITY", help="Force-create campaigns for a city (testing)")
    parser.add_argument("--force-size", type=float, default=1.5, help="Hail size for --force (default: 1.5)")
    parser.add_argument("--activate", metavar="CITY", help="Activate paused campaigns for a city")
    parser.add_argument("--source", choices=["nws", "hailscore", "both"], default="both")
    args = parser.parse_args()

    config = load_config()
    state = load_state()
    now = datetime.now()

    print(f"🌩️  Storm Trigger — {now.strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"{'='*60}")

    # -----------------------------------------------------------------------
    # Activate mode
    # -----------------------------------------------------------------------
    if args.activate:
        city = args.activate
        if city not in config["colorado_cities"]:
            print(f"❌ City '{city}' not in config.")
            sys.exit(1)
        print(f"🟢 Activating campaigns for {city}...")
        print(f"\n📊 Google Ads:")
        google_ok = activate_google_campaign(city)
        print(f"\n📱 Meta Ads:")
        meta_ok = activate_meta_campaigns(city)
        print(f"\n{'='*60}")
        if google_ok and meta_ok:
            print(f"✅ Both channels activated for {city}! Ads are now live.")
            send_discord_notification(config,
                f"✅ **{city} campaigns are LIVE**\n"
                f"• Google Search: active ($50/day)\n"
                f"• Meta (FB/IG): active ($30/day)\n"
                f"Total daily spend cap: $80 for {city}"
            )
        elif google_ok:
            print(f"⚠️  Google activated, Meta needs manual activation.")
            send_discord_notification(config,
                f"⚠️ **{city} — partial activation**\n"
                f"• Google Search: ✅ active\n"
                f"• Meta: ❌ needs manual activation in Meta Ads Manager"
            )
        else:
            print(f"❌ Activation failed. Check errors above.")
        return

    # -----------------------------------------------------------------------
    # Force mode (testing)
    # -----------------------------------------------------------------------
    if args.force:
        city = args.force
        if city not in config["colorado_cities"]:
            print(f"❌ City '{city}' not in config.")
            sys.exit(1)
        print(f"⚡ Force mode: creating campaigns for {city} ({args.force_size}\" hail)")

        if not args.dry_run and campaign_exists_today(state, city):
            print(f"⚠️  Campaign already created for {city} today. Clear .storm-state.json to retry.")
            return

        print(f"\n📊 Google Ads:")
        google_ok = create_google_campaign(city, args.force_size, args.dry_run)
        print(f"\n📱 Meta Ads:")
        meta_ok = create_meta_campaign(city, args.dry_run)

        if not args.dry_run and (google_ok or meta_ok):
            record_campaign(state, city, google_ok=google_ok, meta_ok=meta_ok)

        msg = build_storm_notification(city, args.force_size, google_ok, meta_ok, args.dry_run)
        print(f"\n📣 Sending Discord notification...")
        send_discord_notification(config, msg)
        return

    # -----------------------------------------------------------------------
    # Normal mode: check for storms
    # -----------------------------------------------------------------------
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
        print(f"  - {city}: {info['hail_size']}\" ({info['alert_type']})")

    # Create campaigns for each affected city
    created = 0
    skipped = 0

    for city, info in sorted(city_map.items()):
        print(f"\n{'─'*40}")
        if campaign_exists_today(state, city):
            print(f"⏭️  Skipping {city} — campaigns already created today")
            skipped += 1
            continue

        print(f"🌩️  Creating campaigns for {city} ({info['hail_size']}\" hail)...")

        print(f"\n  📊 Google Ads:")
        google_ok = create_google_campaign(city, info["hail_size"], args.dry_run)

        print(f"\n  📱 Meta Ads:")
        meta_ok = create_meta_campaign(city, args.dry_run)

        if not args.dry_run:
            record_campaign(state, city, google_ok=google_ok, meta_ok=meta_ok)

        # Notify Alex regardless of dry run
        msg = build_storm_notification(city, info["hail_size"], google_ok, meta_ok, args.dry_run)
        print(f"\n  📣 Notifying Alex...")
        send_discord_notification(config, msg)

        if google_ok or meta_ok:
            created += 1

    print(f"\n{'='*60}")
    print(f"📊 Summary: {created} cities processed, {skipped} skipped")
    if created > 0 and not args.dry_run:
        print(f"⚠️  Campaigns are PAUSED. Alex notified via Discord.")
        print(f"   To activate: python storm-trigger.py --activate <CITY>")


if __name__ == "__main__":
    main()
