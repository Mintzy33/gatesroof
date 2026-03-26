"""
Shared Google Ads API client initialization for storm-ads scripts.
Uses service account with domain-wide delegation via the MCC.
"""

import json
import os
from google.ads.googleads.client import GoogleAdsClient
from google.oauth2 import service_account

CONFIG_PATH = os.path.join(os.path.dirname(__file__), "config.json")


def load_config():
    """Load configuration from config.json."""
    with open(CONFIG_PATH, "r") as f:
        return json.load(f)


def get_google_ads_client(config=None):
    """
    Initialize and return a GoogleAdsClient using service account credentials.
    
    The service account (indexing-bot@hailscore.iam.gserviceaccount.com) must have
    domain-wide delegation enabled, and be granted access to the Google Ads MCC.
    
    If service account auth fails, you'll need to switch to OAuth2 with a refresh token.
    See README.md for OAuth2 setup instructions.
    """
    if config is None:
        config = load_config()

    ads_config = config["google_ads"]
    key_path = ads_config["service_account_key_path"]

    # Load service account credentials with Google Ads API scope
    credentials = service_account.Credentials.from_service_account_file(
        key_path,
        scopes=["https://www.googleapis.com/auth/adwords"],
        # If domain-wide delegation is set up, impersonate the MCC owner:
        # subject="alexgatesent@gmail.com"
    )

    # Build the client
    client = GoogleAdsClient(
        credentials=credentials,
        developer_token=ads_config["developer_token"],
        login_customer_id=ads_config["login_customer_id"],
    )

    return client


def get_customer_id(config=None):
    """Return the customer ID (no dashes)."""
    if config is None:
        config = load_config()
    return config["google_ads"]["customer_id"]
