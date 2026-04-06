#!/usr/bin/env python3
"""Pause a Meta storm response campaign (or --all). Defaults to --dry-run."""
import argparse
import sys
from meta_client import MetaAdsClient


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--campaign-id")
    p.add_argument("--all", action="store_true", help="Pause every Storm Response Meta campaign")
    p.add_argument("--live", action="store_true")
    p.add_argument("--dry-run", action="store_true")
    args = p.parse_args()

    if not args.campaign_id and not args.all:
        p.error("--campaign-id or --all required")

    dry = not args.live
    client = MetaAdsClient(dry_run=dry)
    print(f"=== Pause :: {'DRY-RUN' if dry else 'LIVE'} ===")

    if args.all:
        prefix = client.defaults["campaign_name_prefix"]
        camps = client.list_campaigns()
        targets = [c for c in camps if c.get("name", "").startswith(prefix)]
        print(f"  found {len(targets)} '{prefix}' campaigns")
        for c in targets:
            print(f"  pausing {c['id']} :: {c['name']}")
            client.pause_campaign(c["id"])
    else:
        res = client.pause_campaign(args.campaign_id)
        print(f"  result: {res}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
