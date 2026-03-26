#!/usr/bin/env python3
"""
Activate a paused storm response campaign.

Usage:
    python activate-campaign.py --name "Storm Response - Denver - 2026-03-26"
    python activate-campaign.py --id 12345678
"""

import argparse
import sys

from ads_client import get_google_ads_client, get_customer_id, load_config


def find_campaign_by_name(client, customer_id, name):
    """Find a campaign by name and return its resource name and current status."""
    ga_service = client.get_service("GoogleAdsService")
    query = f"""
        SELECT campaign.id, campaign.name, campaign.resource_name, campaign.status
        FROM campaign
        WHERE campaign.name = '{name}'
        AND campaign.status != 'REMOVED'
    """
    response = ga_service.search(customer_id=customer_id, query=query)
    for row in response:
        return {
            "id": row.campaign.id,
            "name": row.campaign.name,
            "resource_name": row.campaign.resource_name,
            "status": row.campaign.status.name,
        }
    return None


def find_campaign_by_id(client, customer_id, campaign_id):
    """Find a campaign by ID and return its resource name and current status."""
    ga_service = client.get_service("GoogleAdsService")
    query = f"""
        SELECT campaign.id, campaign.name, campaign.resource_name, campaign.status
        FROM campaign
        WHERE campaign.id = {campaign_id}
        AND campaign.status != 'REMOVED'
    """
    response = ga_service.search(customer_id=customer_id, query=query)
    for row in response:
        return {
            "id": row.campaign.id,
            "name": row.campaign.name,
            "resource_name": row.campaign.resource_name,
            "status": row.campaign.status.name,
        }
    return None


def activate_campaign(client, customer_id, campaign_resource_name):
    """Set campaign status to ENABLED."""
    campaign_service = client.get_service("CampaignService")
    campaign_operation = client.get_type("CampaignOperation")

    campaign = campaign_operation.update
    campaign.resource_name = campaign_resource_name
    campaign.status = client.enums.CampaignStatusEnum.ENABLED

    # Set the field mask
    client.copy_from(
        campaign_operation.update_mask,
        protobuf_helpers.field_mask(None, campaign._pb),
    )

    from google.protobuf import field_mask_pb2
    campaign_operation.update_mask.CopyFrom(
        field_mask_pb2.FieldMask(paths=["status"])
    )

    response = campaign_service.mutate_campaigns(
        customer_id=customer_id, operations=[campaign_operation]
    )
    return response.results[0].resource_name


def main():
    parser = argparse.ArgumentParser(description="Activate a paused storm response campaign")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--name", help="Campaign name")
    group.add_argument("--id", type=int, help="Campaign ID")
    args = parser.parse_args()

    config = load_config()
    client = get_google_ads_client(config)
    customer_id = get_customer_id(config)

    # Find the campaign
    if args.name:
        campaign = find_campaign_by_name(client, customer_id, args.name)
        if not campaign:
            print(f"❌ Campaign not found: {args.name}")
            sys.exit(1)
    else:
        campaign = find_campaign_by_id(client, customer_id, args.id)
        if not campaign:
            print(f"❌ Campaign not found with ID: {args.id}")
            sys.exit(1)

    print(f"🌩️  Activating Campaign")
    print(f"{'='*50}")
    print(f"  Name:   {campaign['name']}")
    print(f"  ID:     {campaign['id']}")
    print(f"  Status: {campaign['status']} → ENABLED")

    if campaign["status"] == "ENABLED":
        print(f"\n  ℹ️  Campaign is already active!")
        return

    activate_campaign(client, customer_id, campaign["resource_name"])
    print(f"\n  ✅ Campaign activated! Ads will start serving.")
    print(f"  💡 Monitor at: https://ads.google.com/aw/campaigns?ocid={customer_id}")


if __name__ == "__main__":
    main()
