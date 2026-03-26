#!/usr/bin/env python3
"""
Pause a storm response campaign by name, ID, or pause all storm campaigns.

Usage:
    python pause-campaign.py --name "Storm Response - Denver - 2026-03-26"
    python pause-campaign.py --id 12345678
    python pause-campaign.py --all   # Pause ALL storm response campaigns
"""

import argparse
import sys

from google.protobuf import field_mask_pb2

from ads_client import get_google_ads_client, get_customer_id, load_config


def find_campaigns(client, customer_id, name=None, campaign_id=None, all_storm=False):
    """Find campaigns matching criteria. Returns list of dicts."""
    ga_service = client.get_service("GoogleAdsService")

    conditions = ["campaign.status = 'ENABLED'"]
    if name:
        conditions.append(f"campaign.name = '{name}'")
    elif campaign_id:
        conditions.append(f"campaign.id = {campaign_id}")
    elif all_storm:
        conditions.append("campaign.name LIKE 'Storm Response%'")

    where = " AND ".join(conditions)
    query = f"""
        SELECT campaign.id, campaign.name, campaign.resource_name, campaign.status
        FROM campaign
        WHERE {where}
    """

    results = []
    for row in ga_service.search(customer_id=customer_id, query=query):
        results.append({
            "id": row.campaign.id,
            "name": row.campaign.name,
            "resource_name": row.campaign.resource_name,
            "status": row.campaign.status.name,
        })
    return results


def pause_campaign(client, customer_id, campaign_resource_name):
    """Set campaign status to PAUSED."""
    service = client.get_service("CampaignService")
    op = client.get_type("CampaignOperation")
    c = op.update
    c.resource_name = campaign_resource_name
    c.status = client.enums.CampaignStatusEnum.PAUSED
    op.update_mask.CopyFrom(field_mask_pb2.FieldMask(paths=["status"]))
    service.mutate_campaigns(customer_id=customer_id, operations=[op])


def main():
    parser = argparse.ArgumentParser(description="Pause storm response campaign(s)")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--name", help="Campaign name")
    group.add_argument("--id", type=int, help="Campaign ID")
    group.add_argument("--all", action="store_true", help="Pause ALL active storm response campaigns")
    args = parser.parse_args()

    config = load_config()
    client = get_google_ads_client(config)
    customer_id = get_customer_id(config)

    campaigns = find_campaigns(
        client, customer_id,
        name=args.name,
        campaign_id=args.id,
        all_storm=args.all,
    )

    if not campaigns:
        if args.all:
            print("ℹ️  No active storm response campaigns to pause.")
        else:
            print(f"❌ No active campaign found matching criteria.")
        return

    print(f"⏸️  Pausing {len(campaigns)} campaign(s):")
    print(f"{'='*50}")

    for c in campaigns:
        print(f"  Pausing: {c['name']} (ID: {c['id']})...")
        pause_campaign(client, customer_id, c["resource_name"])
        print(f"  ✅ Paused")

    print(f"\n✅ Done. {len(campaigns)} campaign(s) paused.")


if __name__ == "__main__":
    main()
