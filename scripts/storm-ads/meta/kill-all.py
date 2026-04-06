#!/usr/bin/env python3
"""
EMERGENCY KILL SWITCH.

Pauses every Meta campaign whose name starts with 'Storm Response - Meta'.
Defaults to --dry-run. Pass --live to actually pause.
"""
import argparse
import sys
from meta_client import MetaAdsClient


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--live", action="store_true")
    p.add_argument("--dry-run", action="store_true")
    args = p.parse_args()

    dry = not args.live
    client = MetaAdsClient(dry_run=dry)
    prefix = client.defaults["campaign_name_prefix"]
    mode = "DRY-RUN" if dry else "LIVE"
    print(f"=== KILL ALL :: {mode} :: prefix '{prefix}' ===")

    camps = client.list_campaigns()
    storm = [c for c in camps if c.get("name", "").startswith(prefix)]
    print(f"  found {len(storm)} matching campaign(s)")
    for c in storm:
        print(f"  pausing {c['id']} :: {c.get('name', '')}")
        client.pause_campaign(c["id"])
    print("Done.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
