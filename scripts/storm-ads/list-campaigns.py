#!/usr/bin/env python3
"""
List all storm response Google Ads campaigns with status, spend, impressions, clicks.

Usage:
    python list-campaigns.py
    python list-campaigns.py --all          # Include non-storm campaigns
    python list-campaigns.py --status PAUSED # Filter by status
"""

import argparse
from datetime import datetime, timedelta

from ads_client import get_google_ads_client, get_customer_id, load_config


def list_campaigns(client, customer_id, storm_only=True, status_filter=None):
    """Query and display campaigns."""
    ga_service = client.get_service("GoogleAdsService")

    query = """
        SELECT
            campaign.id,
            campaign.name,
            campaign.status,
            metrics.impressions,
            metrics.clicks,
            metrics.cost_micros,
            metrics.conversions,
            metrics.ctr,
            metrics.average_cpc,
            campaign_budget.amount_micros
        FROM campaign
        WHERE campaign.status != 'REMOVED'
        ORDER BY campaign.name
    """

    response = ga_service.search(customer_id=customer_id, query=query)

    campaigns = []
    for row in response:
        name = row.campaign.name
        if storm_only and not name.startswith("Storm Response"):
            continue
        if status_filter and row.campaign.status.name != status_filter:
            continue

        campaigns.append({
            "id": row.campaign.id,
            "name": name,
            "status": row.campaign.status.name,
            "impressions": row.metrics.impressions,
            "clicks": row.metrics.clicks,
            "cost": row.metrics.cost_micros / 1_000_000,
            "conversions": row.metrics.conversions,
            "ctr": row.metrics.ctr * 100,
            "avg_cpc": row.metrics.average_cpc / 1_000_000 if row.metrics.average_cpc else 0,
            "budget": row.campaign_budget.amount_micros / 1_000_000,
        })

    return campaigns


def main():
    parser = argparse.ArgumentParser(description="List storm response campaigns")
    parser.add_argument(
        "--all", action="store_true", help="Show all campaigns, not just storm response"
    )
    parser.add_argument(
        "--status", choices=["ENABLED", "PAUSED"], help="Filter by status"
    )
    parser.add_argument("--json", action="store_true", help="Output as JSON")
    args = parser.parse_args()

    config = load_config()
    client = get_google_ads_client(config)
    customer_id = get_customer_id(config)

    storm_only = not args.all
    campaigns = list_campaigns(client, customer_id, storm_only, args.status)

    if args.json:
        import json
        print(json.dumps(campaigns, indent=2))
        return

    label = "All" if args.all else "Storm Response"
    print(f"🌩️  {label} Campaigns — Gates Enterprises (ID: {customer_id})")
    print(f"{'='*80}")

    if not campaigns:
        print("  No campaigns found.")
        return

    # Summary
    total_cost = sum(c["cost"] for c in campaigns)
    total_clicks = sum(c["clicks"] for c in campaigns)
    total_impressions = sum(c["impressions"] for c in campaigns)
    active = sum(1 for c in campaigns if c["status"] == "ENABLED")
    paused = sum(1 for c in campaigns if c["status"] == "PAUSED")

    print(f"  Total: {len(campaigns)} campaigns ({active} active, {paused} paused)")
    print(f"  Spend: ${total_cost:.2f} | Impressions: {total_impressions:,} | Clicks: {total_clicks:,}")
    print(f"{'='*80}")
    print()

    for c in campaigns:
        status_icon = "🟢" if c["status"] == "ENABLED" else "⏸️"
        print(f"  {status_icon} {c['name']}")
        print(f"     ID: {c['id']} | Status: {c['status']} | Budget: ${c['budget']:.2f}/day")
        print(f"     Impressions: {c['impressions']:,} | Clicks: {c['clicks']:,} | CTR: {c['ctr']:.1f}%")
        print(f"     Cost: ${c['cost']:.2f} | Avg CPC: ${c['avg_cpc']:.2f} | Conversions: {c['conversions']:.0f}")
        print()


if __name__ == "__main__":
    main()
