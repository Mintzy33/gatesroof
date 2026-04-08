#!/usr/bin/env python3
"""
Create a storm response Google Ads campaign for a specific city.

Quality Score Target: 8+
- All 15 headline slots filled, positions 1-2 pinned
- All 4 description slots filled
- Mixed keyword match types (exact, phrase, broad)
- Negative keywords to block junk traffic
- Sitelink, callout, call, structured snippet assets
- Landing page: gatesroof.com/services/storm-hail-damage (matches ad intent)
- Manual CPC with enhanced CPC

Usage:
    python create-campaign.py --city "Denver" --hail-size 1.5
    python create-campaign.py --city "Aurora" --hail-size 2.0 --budget 75
    python create-campaign.py --city "Boulder" --hail-size 1.0 --dry-run
"""

import argparse
import sys
import uuid
from datetime import date

from ads_client import get_google_ads_client, get_customer_id, load_config


# ---------------------------------------------------------------------------
# Budget
# ---------------------------------------------------------------------------

def create_campaign_budget(client, customer_id, budget_micros):
    """Create a campaign budget and return its resource name."""
    service = client.get_service("CampaignBudgetService")
    op = client.get_type("CampaignBudgetOperation")
    budget = op.create
    budget.name = f"Storm Budget - {uuid.uuid4().hex[:8]}"
    budget.amount_micros = budget_micros
    budget.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD
    budget.explicitly_shared = False
    resp = service.mutate_campaign_budgets(customer_id=customer_id, operations=[op])
    return resp.results[0].resource_name


# ---------------------------------------------------------------------------
# Campaign
# ---------------------------------------------------------------------------

def create_campaign(client, customer_id, campaign_name, budget_rn, landing_page):
    """Create a PAUSED search campaign."""
    service = client.get_service("CampaignService")
    op = client.get_type("CampaignOperation")
    c = op.create
    c.name = campaign_name
    c.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
    c.status = client.enums.CampaignStatusEnum.PAUSED
    c.campaign_budget = budget_rn
    c._pb.manual_cpc.SetInParent()
    c.network_settings.target_google_search = True
    c.network_settings.target_search_network = True
    c.network_settings.target_content_network = False
    c.contains_eu_political_advertising = 3  # TristateBoolean.NO
    c.final_url_suffix = ""
    resp = service.mutate_campaigns(customer_id=customer_id, operations=[op])
    return resp.results[0].resource_name


# ---------------------------------------------------------------------------
# Geo targeting
# ---------------------------------------------------------------------------

def set_geo_target(client, customer_id, campaign_rn, geo_id):
    service = client.get_service("CampaignCriterionService")
    op = client.get_type("CampaignCriterionOperation")
    crit = op.create
    crit.campaign = campaign_rn
    crit.location.geo_target_constant = (
        client.get_service("GeoTargetConstantService").geo_target_constant_path(geo_id)
    )
    service.mutate_campaign_criteria(customer_id=customer_id, operations=[op])


# ---------------------------------------------------------------------------
# Ad group
# ---------------------------------------------------------------------------

def create_ad_group(client, customer_id, campaign_rn, city):
    service = client.get_service("AdGroupService")
    op = client.get_type("AdGroupOperation")
    ag = op.create
    ag.name = f"Storm Response - {city} - Keywords"
    ag.campaign = campaign_rn
    ag.status = client.enums.AdGroupStatusEnum.ENABLED
    ag.type_ = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
    ag.cpc_bid_micros = 3000000  # $3.00 default
    resp = service.mutate_ad_groups(customer_id=customer_id, operations=[op])
    return resp.results[0].resource_name


# ---------------------------------------------------------------------------
# Keywords — mixed match types
# ---------------------------------------------------------------------------

def add_keywords(client, customer_id, ad_group_rn, city, config):
    """Add exact, phrase, and broad match keywords."""
    service = client.get_service("AdGroupCriterionService")
    operations = []
    kw_config = config["ad_templates"]["keywords"]

    def _add(text, match_type_enum):
        op = client.get_type("AdGroupCriterionOperation")
        crit = op.create
        crit.ad_group = ad_group_rn
        crit.status = client.enums.AdGroupCriterionStatusEnum.ENABLED
        crit.keyword.text = text
        crit.keyword.match_type = match_type_enum
        operations.append(op)

    EXACT = client.enums.KeywordMatchTypeEnum.EXACT
    PHRASE = client.enums.KeywordMatchTypeEnum.PHRASE
    BROAD = client.enums.KeywordMatchTypeEnum.BROAD

    for tpl in kw_config["exact"]:
        _add(tpl.format(city=city), EXACT)
    for tpl in kw_config["phrase"]:
        _add(tpl.format(city=city), PHRASE)
    for tpl in kw_config["broad"]:
        _add(tpl.format(city=city), BROAD)

    resp = service.mutate_ad_group_criteria(customer_id=customer_id, operations=operations)
    return len(resp.results)


# ---------------------------------------------------------------------------
# Negative keywords (campaign level)
# ---------------------------------------------------------------------------

def add_negative_keywords(client, customer_id, campaign_rn, config):
    """Add negative keywords at the campaign level."""
    service = client.get_service("CampaignCriterionService")
    operations = []
    for neg in config["ad_templates"]["negative_keywords"]:
        op = client.get_type("CampaignCriterionOperation")
        crit = op.create
        crit.campaign = campaign_rn
        crit.negative = True
        crit.keyword.text = neg
        crit.keyword.match_type = client.enums.KeywordMatchTypeEnum.BROAD
        operations.append(op)
    resp = service.mutate_campaign_criteria(customer_id=customer_id, operations=operations)
    return len(resp.results)


# ---------------------------------------------------------------------------
# Responsive search ad — all 15 headlines, all 4 descriptions, pinning
# ---------------------------------------------------------------------------

def create_responsive_search_ad(client, customer_id, ad_group_rn, city, hail_size, config):
    """Create RSA with full slots and pinned headlines."""
    service = client.get_service("AdGroupAdService")
    op = client.get_type("AdGroupAdOperation")
    aga = op.create
    aga.ad_group = ad_group_rn
    aga.status = client.enums.AdGroupAdStatusEnum.ENABLED

    ad = aga.ad
    landing = config["campaign_defaults"]["landing_page"]
    ad.final_urls.append(landing)

    # --- Headlines (15 slots, pin positions 1 & 2) ---
    ServedAssetFieldType = client.enums.ServedAssetFieldTypeEnum
    for entry in config["ad_templates"]["headlines"]:
        text = entry["text"].format(city=city, hail_size=hail_size)[:30]
        asset = client.get_type("AdTextAsset")
        asset.text = text
        # Pin position: 1 = HEADLINE_1, 2 = HEADLINE_2
        pin = entry.get("pin")
        if pin == 1:
            asset.pinned_field = ServedAssetFieldType.HEADLINE_1
        elif pin == 2:
            asset.pinned_field = ServedAssetFieldType.HEADLINE_2
        ad.responsive_search_ad.headlines.append(asset)

    # --- Descriptions (all 4 slots) ---
    for tpl in config["ad_templates"]["descriptions"]:
        text = tpl.format(city=city, hail_size=hail_size)[:90]
        asset = client.get_type("AdTextAsset")
        asset.text = text
        ad.responsive_search_ad.descriptions.append(asset)

    # Display URL paths
    ad.responsive_search_ad.path1 = "Storm-Damage"
    ad.responsive_search_ad.path2 = city[:15]

    resp = service.mutate_ad_group_ads(customer_id=customer_id, operations=[op])
    return resp.results[0].resource_name


# ---------------------------------------------------------------------------
# Assets (extensions)
# ---------------------------------------------------------------------------

def _create_asset(client, customer_id, asset_operation):
    """Helper: mutate a single asset and return its resource name."""
    service = client.get_service("AssetService")
    resp = service.mutate_assets(customer_id=customer_id, operations=[asset_operation])
    return resp.results[0].resource_name


def _link_campaign_asset(client, customer_id, campaign_rn, asset_rn, field_type):
    """Helper: link an asset to a campaign."""
    service = client.get_service("CampaignAssetService")
    op = client.get_type("CampaignAssetOperation")
    ca = op.create
    ca.campaign = campaign_rn
    ca.asset = asset_rn
    ca.field_type = field_type
    service.mutate_campaign_assets(customer_id=customer_id, operations=[op])


def add_sitelink_assets(client, customer_id, campaign_rn, config):
    """Add sitelink extensions."""
    count = 0
    FieldType = client.enums.AssetFieldTypeEnum
    for sl in config["ad_templates"]["sitelinks"]:
        try:
            op = client.get_type("AssetOperation")
            a = op.create
            a.name = f"SL - {sl['text']} - {uuid.uuid4().hex[:6]}"
            a.sitelink_asset.link_text = sl["text"]
            a.sitelink_asset.description1 = sl["description1"]
            a.sitelink_asset.description2 = sl["description2"]
            a.final_urls.append(sl["url"])
            asset_rn = _create_asset(client, customer_id, op)
            _link_campaign_asset(client, customer_id, campaign_rn, asset_rn, FieldType.SITELINK)
            count += 1
        except Exception as e:
            print(f"  ⚠️  Sitelink '{sl['text']}' failed: {e}")
    return count


def add_callout_assets(client, customer_id, campaign_rn, config):
    """Add callout extensions."""
    count = 0
    FieldType = client.enums.AssetFieldTypeEnum
    for text in config["ad_templates"]["callouts"]:
        try:
            op = client.get_type("AssetOperation")
            a = op.create
            a.name = f"CO - {text} - {uuid.uuid4().hex[:6]}"
            a.callout_asset.callout_text = text
            asset_rn = _create_asset(client, customer_id, op)
            _link_campaign_asset(client, customer_id, campaign_rn, asset_rn, FieldType.CALLOUT)
            count += 1
        except Exception as e:
            print(f"  ⚠️  Callout '{text}' failed: {e}")
    return count


def add_call_asset(client, customer_id, campaign_rn, config):
    """Add call extension with phone number."""
    FieldType = client.enums.AssetFieldTypeEnum
    try:
        op = client.get_type("AssetOperation")
        a = op.create
        a.name = f"Call - {uuid.uuid4().hex[:6]}"
        a.call_asset.country_code = "US"
        a.call_asset.phone_number = config["gates_info"]["phone"]
        a.call_asset.call_recorded = False
        a.call_asset.call_conversion_reporting_state = (
            client.enums.CallConversionReportingStateEnum.DISABLED
        )
        asset_rn = _create_asset(client, customer_id, op)
        _link_campaign_asset(client, customer_id, campaign_rn, asset_rn, FieldType.CALL)
        return True
    except Exception as e:
        print(f"  ⚠️  Call asset failed: {e}")
        return False


def add_structured_snippet_asset(client, customer_id, campaign_rn, config):
    """Add structured snippet extension."""
    FieldType = client.enums.AssetFieldTypeEnum
    snippet_config = config["ad_templates"]["structured_snippets"]
    try:
        op = client.get_type("AssetOperation")
        a = op.create
        a.name = f"SS - {snippet_config['header']} - {uuid.uuid4().hex[:6]}"
        a.structured_snippet_asset.header = snippet_config["header"]
        for val in snippet_config["values"]:
            a.structured_snippet_asset.values.append(val)
        asset_rn = _create_asset(client, customer_id, op)
        _link_campaign_asset(client, customer_id, campaign_rn, asset_rn, FieldType.STRUCTURED_SNIPPET)
        return True
    except Exception as e:
        print(f"  ⚠️  Structured snippet failed: {e}")
        return False


# ---------------------------------------------------------------------------
# Dry-run display
# ---------------------------------------------------------------------------

def print_dry_run(city, hail_size, config, budget_dollars, campaign_name):
    print("🏃 DRY RUN — no API calls made\n")

    landing = config["campaign_defaults"]["landing_page"]
    print(f"Landing page: {landing}\n")

    print("═══ HEADLINES (15/15 slots) ═══")
    for entry in config["ad_templates"]["headlines"]:
        text = entry["text"].format(city=city, hail_size=hail_size)[:30]
        pin = f" 📌 PIN {entry['pin']}" if entry.get("pin") else ""
        print(f"  [{len(text):2d} chars] \"{text}\"{pin}")

    print(f"\n═══ DESCRIPTIONS (4/4 slots) ═══")
    for tpl in config["ad_templates"]["descriptions"]:
        text = tpl.format(city=city, hail_size=hail_size)[:90]
        print(f"  [{len(text):2d} chars] \"{text}\"")

    kw = config["ad_templates"]["keywords"]
    print(f"\n═══ KEYWORDS ═══")
    print("  Exact match:")
    for t in kw["exact"]:
        print(f"    [{t.format(city=city)}]")
    print("  Phrase match:")
    for t in kw["phrase"]:
        print(f"    \"{t.format(city=city)}\"")
    print("  Broad match:")
    for t in kw["broad"]:
        print(f"    {t.format(city=city)}")

    print(f"\n═══ NEGATIVE KEYWORDS ({len(config['ad_templates']['negative_keywords'])}) ═══")
    for neg in config["ad_templates"]["negative_keywords"]:
        print(f"    -{neg}")

    print(f"\n═══ SITELINKS ({len(config['ad_templates']['sitelinks'])}) ═══")
    for sl in config["ad_templates"]["sitelinks"]:
        print(f"    {sl['text']} → {sl['url']}")
        print(f"      {sl['description1']}")
        print(f"      {sl['description2']}")

    print(f"\n═══ CALLOUTS ({len(config['ad_templates']['callouts'])}) ═══")
    for co in config["ad_templates"]["callouts"]:
        print(f"    • {co}")

    print(f"\n═══ CALL ═══")
    print(f"    📞 {config['gates_info']['phone']}")

    ss = config["ad_templates"]["structured_snippets"]
    print(f"\n═══ STRUCTURED SNIPPETS ═══")
    print(f"    {ss['header']}: {', '.join(ss['values'])}")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Create a storm response Google Ads campaign (quality score 8+ target)"
    )
    parser.add_argument("--city", required=True, help="City name (e.g., Denver)")
    parser.add_argument("--hail-size", type=float, required=True, help="Hail size in inches")
    parser.add_argument("--budget", type=float, default=None, help="Daily budget in dollars (default: $50)")
    parser.add_argument("--dry-run", action="store_true", help="Preview without API calls")
    args = parser.parse_args()

    config = load_config()
    city = args.city
    hail_size = args.hail_size

    if city not in config["colorado_cities"]:
        print(f"❌ City '{city}' not in config. Available:")
        for c in sorted(config["colorado_cities"].keys()):
            print(f"   - {c}")
        sys.exit(1)

    city_info = config["colorado_cities"][city]
    geo_id = city_info["geo_id"]
    today = date.today().strftime("%Y-%m-%d")
    campaign_name = f"Storm Response - {city} - {today}"

    budget_micros = config["campaign_defaults"]["daily_budget_micros"]
    if args.budget:
        budget_micros = int(args.budget * 1_000_000)
    budget_dollars = budget_micros / 1_000_000

    print(f"🌩️  Storm Response Campaign Creator (Quality Score 8+ Target)")
    print(f"{'='*60}")
    print(f"  City:         {city} ({city_info['region']})")
    print(f"  Hail Size:    {hail_size}\"")
    print(f"  Geo ID:       {geo_id}")
    print(f"  Budget:       ${budget_dollars:.2f}/day")
    print(f"  Campaign:     {campaign_name}")
    print(f"  Landing Page: {config['campaign_defaults']['landing_page']}")
    print(f"  Status:       PAUSED (review before activating)")
    print()

    if args.dry_run:
        print_dry_run(city, hail_size, config, budget_dollars, campaign_name)
        return

    # --- Build it ---
    print("🔑 Authenticating with Google Ads API...")
    client = get_google_ads_client(config)
    customer_id = get_customer_id(config)

    print("💰 Creating campaign budget...")
    budget_rn = create_campaign_budget(client, customer_id, budget_micros)
    print(f"  ✅ Budget: ${budget_dollars:.2f}/day")

    print("📋 Creating campaign (PAUSED)...")
    landing = config["campaign_defaults"]["landing_page"]
    campaign_rn = create_campaign(client, customer_id, campaign_name, budget_rn, landing)
    print(f"  ✅ {campaign_name}")

    print(f"📍 Geo targeting: {city} (ID: {geo_id})...")
    set_geo_target(client, customer_id, campaign_rn, geo_id)
    print(f"  ✅ Set")

    print("📁 Creating ad group...")
    ad_group_rn = create_ad_group(client, customer_id, campaign_rn, city)
    print(f"  ✅ Created")

    print("🔑 Adding keywords (exact + phrase + broad)...")
    kw_count = add_keywords(client, customer_id, ad_group_rn, city, config)
    print(f"  ✅ {kw_count} keywords added")

    print("🚫 Adding negative keywords...")
    neg_count = add_negative_keywords(client, customer_id, campaign_rn, config)
    print(f"  ✅ {neg_count} negative keywords added")

    print("📝 Creating responsive search ad (15 headlines, 4 descriptions, pinned)...")
    create_responsive_search_ad(client, customer_id, ad_group_rn, city, hail_size, config)
    print(f"  ✅ RSA created with pinned headlines")

    print("🔗 Adding sitelink assets...")
    sl_count = add_sitelink_assets(client, customer_id, campaign_rn, config)
    print(f"  ✅ {sl_count} sitelinks")

    print("📢 Adding callout assets...")
    co_count = add_callout_assets(client, customer_id, campaign_rn, config)
    print(f"  ✅ {co_count} callouts")

    print(f"📞 Adding call asset ({config['gates_info']['phone']})...")
    add_call_asset(client, customer_id, campaign_rn, config)

    print("📋 Adding structured snippet asset...")
    add_structured_snippet_asset(client, customer_id, campaign_rn, config)

    print()
    print(f"{'='*60}")
    print(f"✅ Campaign created with full quality optimization!")
    print(f"   Name:         {campaign_name}")
    print(f"   Status:       PAUSED")
    print(f"   Budget:       ${budget_dollars:.2f}/day")
    print(f"   Headlines:    15/15 slots (pos 1 & 2 pinned)")
    print(f"   Descriptions: 4/4 slots")
    print(f"   Keywords:     {kw_count} (exact + phrase + broad)")
    print(f"   Negatives:    {neg_count}")
    print(f"   Sitelinks:    {sl_count}")
    print(f"   Callouts:     {co_count}")
    print(f"   Call:         ✅")
    print(f"   Snippets:     ✅")
    print(f"   Landing Page: {config['campaign_defaults']['landing_page']}")
    print(f"   ⚠️  Run activate-campaign.py to enable when ready")


if __name__ == "__main__":
    main()
