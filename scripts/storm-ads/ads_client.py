"""
Shared Google Ads API client initialization for storm-ads scripts.
Uses OAuth2 refresh token for authentication.
"""

import json
import os
from google.ads.googleads.client import GoogleAdsClient

CONFIG_PATH = os.path.join(os.path.dirname(__file__), "config.json")


def load_config():
    """Load configuration from config.json."""
    with open(CONFIG_PATH, "r") as f:
        return json.load(f)


def get_google_ads_client(config=None):
    """
    Initialize and return a GoogleAdsClient using OAuth2 refresh token.
    """
    if config is None:
        config = load_config()

    ads_config = config["google_ads"]

    # Build credentials dict for GoogleAdsClient
    credentials = {
        "developer_token": ads_config["developer_token"],
        "login_customer_id": ads_config["login_customer_id"],
        "client_id": ads_config["oauth_client_id"],
        "client_secret": ads_config["oauth_client_secret"],
        "refresh_token": ads_config["refresh_token"],
        "use_proto_plus": True,
    }

    client = GoogleAdsClient.load_from_dict(credentials)

    return client


def get_customer_id(config=None):
    """Return the customer ID (no dashes)."""
    if config is None:
        config = load_config()
    return config["google_ads"]["customer_id"]
