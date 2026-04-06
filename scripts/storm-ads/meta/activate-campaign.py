#!/usr/bin/env python3
"""Activate a Meta storm response campaign. Defaults to --dry-run."""
import argparse
import sys
from meta_client import MetaAdsClient


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--campaign-id", required=True)
    p.add_argument("--live", action="store_true")
    p.add_argument("--dry-run", action="store_true")
    args = p.parse_args()

    dry = not args.live
    client = MetaAdsClient(dry_run=dry)
    print(f"=== Activate {args.campaign_id} :: {'DRY-RUN' if dry else 'LIVE'} ===")
    res = client.activate_campaign(args.campaign_id)
    print(f"  result: {res}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
