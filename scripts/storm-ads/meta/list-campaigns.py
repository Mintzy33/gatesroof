#!/usr/bin/env python3
"""List Storm Response Meta campaigns with status, spend, leads. Default --dry-run."""
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
    print(f"=== Storm Response Meta campaigns :: {'DRY-RUN' if dry else 'LIVE'} ===")
    camps = client.list_campaigns()
    storm = [c for c in camps if c.get("name", "").startswith(prefix)]
    if not storm:
        print("  (no campaigns found)")
        return 0

    print(f"  {'STATUS':<10} {'BUDGET':<10} {'SPEND':<10} {'LEADS':<8} NAME")
    for c in storm:
        spend = "-"
        leads = "-"
        if not dry:
            try:
                ins = client.get_campaign_insights(c["id"]).get("data", [{}])[0]
                spend = f"${float(ins.get('spend', 0)):.2f}"
                acts = ins.get("actions", [])
                leads = str(sum(int(a.get("value", 0)) for a in acts if a.get("action_type") == "lead"))
            except Exception as e:
                spend = f"err"
        budget = c.get("daily_budget")
        budget_str = f"${int(budget)/100:.0f}/d" if budget else "-"
        print(f"  {c.get('status', '?'):<10} {budget_str:<10} {spend:<10} {leads:<8} {c.get('name', '')}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
