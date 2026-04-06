#!/usr/bin/env python3
"""
Create a PAUSED Meta storm response campaign for a Colorado city.

Defaults to --dry-run. Pass --live to actually hit the Graph API.

    python create-campaign.py --city Denver
    python create-campaign.py --city Aurora --live
"""
import argparse
import sys

from meta_client import MetaAdsClient, load_config


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--city", required=True, help="Colorado city name (must exist in meta-config.json)")
    p.add_argument("--live", action="store_true", help="Actually create the campaign (default is dry-run)")
    p.add_argument("--dry-run", action="store_true", help="Force dry-run (default)")
    args = p.parse_args()

    dry = not args.live  # default dry-run unless --live
    cfg = load_config()
    cities = cfg["colorado_cities"]
    if args.city not in cities:
        print(f"ERROR: city '{args.city}' not in meta-config.json. Known: {', '.join(sorted(cities))}")
        return 2

    client = MetaAdsClient(cfg, dry_run=dry)
    zip_codes = cities[args.city]["zip_codes"]
    region = cities[args.city].get("region", "")

    mode = "DRY-RUN" if dry else "LIVE"
    print(f"=== Meta Storm Response :: {args.city} ({region}) :: {mode} ===")
    print(f"  zips:   {len(zip_codes)} ({', '.join(zip_codes[:5])}{'...' if len(zip_codes) > 5 else ''})")
    print(f"  budget: ${client.defaults['daily_budget_cents']/100:.0f}/day")
    print(f"  goal:   {client.defaults['optimization_goal']}")
    print(f"  status: {client.defaults['initial_status']}")
    print(f"  landing: {client.defaults['landing_page']}")
    print()

    camp = client.create_campaign(args.city)
    camp_id = camp["id"]
    print(f"  campaign_id: {camp_id}")

    ad_set = client.create_ad_set(camp_id, args.city, zip_codes)
    print(f"  ad_set_id:   {ad_set['id']}")

    creative = client.create_ad_creative(args.city)
    print(f"  creative_id: {creative['id']}")

    ad = client.create_ad(ad_set["id"], creative["id"], args.city)
    print(f"  ad_id:       {ad['id']}")

    print()
    print(f"Done. Campaign created in PAUSED state. Activate with:")
    print(f"  python activate-campaign.py --campaign-id {camp_id} --live")
    return 0


if __name__ == "__main__":
    sys.exit(main())
