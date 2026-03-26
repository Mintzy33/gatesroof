#!/usr/bin/env python3
"""
OAuth2 Refresh Token Generator for Google Ads API

Run this script to authorize the Google Ads API and get a refresh token.
It will open a browser window for you to log in and authorize access,
then save the refresh token to config.json.

Prerequisites:
  - config.json must have google_ads.oauth_client_id and google_ads.oauth_client_secret
  - Or set environment variables: GOOGLE_ADS_CLIENT_ID and GOOGLE_ADS_CLIENT_SECRET

Usage:
    cd ~/gatesroof/scripts/storm-ads
    source .venv/bin/activate
    python get-refresh-token.py
"""

import json
import os
import sys
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ['https://www.googleapis.com/auth/adwords']
CONFIG_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "config.json")


def load_config():
    with open(CONFIG_PATH, "r") as f:
        return json.load(f)


def get_credentials(config):
    """Get OAuth client ID and secret from config.json or environment variables."""
    client_id = (
        os.environ.get("GOOGLE_ADS_CLIENT_ID")
        or config.get("google_ads", {}).get("oauth_client_id")
    )
    client_secret = (
        os.environ.get("GOOGLE_ADS_CLIENT_SECRET")
        or config.get("google_ads", {}).get("oauth_client_secret")
    )

    if not client_id or not client_secret:
        print("❌ OAuth2 credentials not found.")
        print()
        print("Either set environment variables:")
        print("  export GOOGLE_ADS_CLIENT_ID='your-client-id'")
        print("  export GOOGLE_ADS_CLIENT_SECRET='your-client-secret'")
        print()
        print("Or add to config.json under google_ads:")
        print('  "oauth_client_id": "your-client-id",')
        print('  "oauth_client_secret": "your-client-secret"')
        sys.exit(1)

    return client_id, client_secret


def main():
    config = load_config()
    client_id, client_secret = get_credentials(config)

    client_config = {
        "installed": {
            "client_id": client_id,
            "client_secret": client_secret,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "redirect_uris": ["http://localhost"]
        }
    }

    print("Starting OAuth2 authorization flow...")
    print("A browser window will open. Log in with the Google account that has access to your Ads account.")
    print()

    flow = InstalledAppFlow.from_client_config(client_config, SCOPES)
    credentials = flow.run_local_server(port=0)

    refresh_token = credentials.refresh_token
    print(f"\n✅ Authorization successful!")
    print(f"Refresh token: {refresh_token}")

    # Update config.json with the refresh token
    try:
        config["google_ads"]["refresh_token"] = refresh_token
        with open(CONFIG_PATH, "w") as f:
            json.dump(config, f, indent=2)
        print(f"\n✅ config.json updated with refresh_token")
    except Exception as e:
        print(f"\n⚠️  Could not update config.json: {e}")
        print("You can manually add the refresh token to config.json under google_ads.refresh_token")


if __name__ == "__main__":
    main()
