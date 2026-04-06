#!/usr/bin/env python3
"""
Meta (Facebook) Ads Graph API client for Gates Storm Response.

Thin wrapper around `requests`. No Facebook Business SDK on purpose.
Loads meta-config.json from the same directory.

NOTE: meta-config.json currently pins api_version to v19.0. The Graph API
v21.0 endpoints are compatible, but we keep whatever the config says.
"""

from __future__ import annotations

import json
import os
from typing import Any, Dict, List, Optional

import requests


CONFIG_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "meta-config.json")


def load_config(path: str = CONFIG_PATH) -> Dict[str, Any]:
    with open(path, "r") as fh:
        return json.load(fh)


class MetaAdsClient:
    def __init__(self, config: Optional[Dict[str, Any]] = None, dry_run: bool = True):
        self.config = config or load_config()
        meta = self.config["meta_ads"]
        self.access_token: str = meta["access_token"]
        self.api_version: str = meta.get("api_version", "v19.0")
        self.base_url: str = f"{meta.get('base_url', 'https://graph.facebook.com')}/{self.api_version}"
        self.ad_account_id: str = meta["ad_account_id"]  # already act_ prefixed
        self.page_id: str = meta["page_id"]
        self.pixel_id: str = meta["pixel_id"]
        self.defaults: Dict[str, Any] = self.config["campaign_defaults"]
        self.cities: Dict[str, Any] = self.config["colorado_cities"]
        self.dry_run = dry_run

    # -----------------------------------------------------------------
    # HTTP helpers
    # -----------------------------------------------------------------
    def _post(self, path: str, payload: Dict[str, Any]) -> Dict[str, Any]:
        url = f"{self.base_url}/{path.lstrip('/')}"
        body = {**payload, "access_token": self.access_token}
        if self.dry_run:
            print(f"[DRY-RUN POST] {url}")
            redacted = {k: v for k, v in body.items() if k != "access_token"}
            print(f"  payload: {json.dumps(redacted, indent=2)}")
            return {"id": f"dryrun_{path.replace('/', '_')}"}
        r = requests.post(url, json=body, timeout=30)
        r.raise_for_status()
        return r.json()

    def _get(self, path: str, params: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        url = f"{self.base_url}/{path.lstrip('/')}"
        params = {**(params or {}), "access_token": self.access_token}
        if self.dry_run:
            print(f"[DRY-RUN GET]  {url}")
            redacted = {k: v for k, v in params.items() if k != "access_token"}
            print(f"  params: {json.dumps(redacted)}")
            return {"data": []}
        r = requests.get(url, params=params, timeout=30)
        r.raise_for_status()
        return r.json()

    # -----------------------------------------------------------------
    # Campaigns
    # -----------------------------------------------------------------
    def create_campaign(self, city: str) -> Dict[str, Any]:
        name = f"{self.defaults['campaign_name_prefix']} - {city}"
        payload = {
            "name": name,
            "objective": "OUTCOME_LEADS",
            "status": self.defaults.get("initial_status", "PAUSED"),
            "special_ad_categories": [],
            "buying_type": "AUCTION",
        }
        return self._post(f"act_{self._acct_num()}/campaigns", payload)

    def create_ad_set(self, campaign_id: str, city: str, zip_codes: List[str]) -> Dict[str, Any]:
        name = f"{self.defaults['ad_set_name_prefix']}{city}"
        targeting = {
            "geo_locations": {
                "countries": ["US"],
                "zips": [{"key": f"US:{z}"} for z in zip_codes],
            },
            "age_min": 28,
            "age_max": 65,
            "publisher_platforms": ["facebook", "instagram"],
        }
        payload = {
            "name": name,
            "campaign_id": campaign_id,
            "daily_budget": self.defaults["daily_budget_cents"],
            "billing_event": self.defaults.get("billing_event", "IMPRESSIONS"),
            "optimization_goal": self.defaults.get("optimization_goal", "LEAD_GENERATION"),
            "bid_strategy": self.defaults.get("bid_strategy", "LOWEST_COST_WITHOUT_CAP"),
            "targeting": json.dumps(targeting),
            "status": self.defaults.get("initial_status", "PAUSED"),
        }
        return self._post(f"act_{self._acct_num()}/adsets", payload)

    def create_ad_creative(self, city: str) -> Dict[str, Any]:
        landing = self.defaults["landing_page"]
        link_data = {
            "link": landing,
            "message": (
                f"Storm hit {city}? Gates Enterprises has been repairing Colorado roofs for years. "
                "Free inspection, full insurance support, no obligation."
            ),
            "name": f"Free Storm Damage Inspection in {city}",
            "description": "Quadruple manufacturer certified. 308+ five-star reviews.",
            "call_to_action": {"type": "GET_QUOTE", "value": {"link": landing}},
        }
        payload = {
            "name": f"Storm Creative - {city}",
            "object_story_spec": json.dumps({
                "page_id": self.page_id,
                "link_data": link_data,
            }),
        }
        return self._post(f"act_{self._acct_num()}/adcreatives", payload)

    def create_ad(self, ad_set_id: str, creative_id: str, city: str = "") -> Dict[str, Any]:
        payload = {
            "name": f"Storm Ad - {city}".strip(" -"),
            "adset_id": ad_set_id,
            "creative": json.dumps({"creative_id": creative_id}),
            "status": self.defaults.get("initial_status", "PAUSED"),
        }
        return self._post(f"act_{self._acct_num()}/ads", payload)

    # -----------------------------------------------------------------
    # Read / mutate
    # -----------------------------------------------------------------
    def list_campaigns(self) -> List[Dict[str, Any]]:
        resp = self._get(
            f"act_{self._acct_num()}/campaigns",
            {"fields": "id,name,status,objective,daily_budget,created_time", "limit": 200},
        )
        return resp.get("data", [])

    def pause_campaign(self, campaign_id: str) -> Dict[str, Any]:
        return self._post(campaign_id, {"status": "PAUSED"})

    def activate_campaign(self, campaign_id: str) -> Dict[str, Any]:
        return self._post(campaign_id, {"status": "ACTIVE"})

    def get_campaign_insights(self, campaign_id: str) -> Dict[str, Any]:
        return self._get(
            f"{campaign_id}/insights",
            {"fields": "spend,impressions,clicks,actions,cpm,ctr"},
        )

    # -----------------------------------------------------------------
    def _acct_num(self) -> str:
        # ad_account_id is already 'act_NNN' in config; strip prefix for path
        return self.ad_account_id.replace("act_", "")
