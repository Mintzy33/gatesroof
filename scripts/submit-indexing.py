#!/usr/bin/env python3
"""
Submit priority GatesRoof URLs to Google Indexing API.
Daily limit: 200 total (shared with HailScore). We submit up to 100 for GatesRoof.

Usage:
    ~/hailscore/scripts/.venv/bin/python ~/gatesroof/scripts/submit-indexing.py
"""

import json
import time
import requests
from google.oauth2 import service_account
from google.auth.transport.requests import Request as GoogleAuthRequest

# ── Config ──
KEY_FILE = "/Users/alexchicilo/hailscore/scripts/google-indexing-key.json"
SCOPES = ["https://www.googleapis.com/auth/indexing"]
ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"
BASE = "https://www.gatesroof.com"
MAX_SUBMISSIONS = 100

# ── URL Lists ──

CORE_PAGES = [
    "",  # homepage
    "/services",
    "/contact",
    "/reviews",
    "/who-we-are",
    "/about",
    "/blog",
    "/insurance-claims",
    "/impact-resistant-shingles",
    "/financing",
    "/warranty",
    "/gallery",
]

BEST_ROOFER_PAGES = [
    "/best-roofer-denver",
    "/best-roofer-colorado-springs",
    "/best-roofer-aurora",
    "/best-roofer-fort-collins",
    "/best-roofer-arvada",
    "/best-roofer-thornton",
    "/best-roofer-westminster",
    "/best-roofer-broomfield",
    "/best-roofer-littleton",
]

# 26 indexed cities
INDEXED_CITIES = [
    "denver", "colorado-springs", "aurora", "fort-collins", "lakewood",
    "thornton", "arvada", "westminster", "centennial", "boulder",
    "highlands-ranch", "parker", "castle-rock", "longmont", "broomfield",
    "brighton", "loveland", "greeley", "pueblo", "littleton",
    "erie", "commerce-city", "northglenn", "castle-pines", "golden",
    "louisville",
]

AREA_PAGES = [f"/areas/{city}" for city in INDEXED_CITIES]

# 4 core services × 26 cities
INDEXED_SERVICES = ["roof-replacement", "roof-repair", "storm-hail-damage", "insurance-claims"]

SERVICE_CITY_PAGES = [
    f"/services/{svc}/{city}"
    for svc in INDEXED_SERVICES
    for city in INDEXED_CITIES
]

def build_url_list():
    """Build prioritized URL list, capped at MAX_SUBMISSIONS."""
    urls = []
    # Priority 1: Core pages (12)
    urls.extend([f"{BASE}{p}" for p in CORE_PAGES])
    # Priority 2: Best-roofer pages (9)
    urls.extend([f"{BASE}{p}" for p in BEST_ROOFER_PAGES])
    # Priority 3: Area pages (26)
    urls.extend([f"{BASE}{p}" for p in AREA_PAGES])
    # Priority 4: Service×city combos (up to 104)
    urls.extend([f"{BASE}{p}" for p in SERVICE_CITY_PAGES])

    # Cap at 100
    return urls[:MAX_SUBMISSIONS]


def main():
    # Authenticate
    credentials = service_account.Credentials.from_service_account_file(
        KEY_FILE, scopes=SCOPES
    )
    credentials.refresh(GoogleAuthRequest())

    urls = build_url_list()
    print(f"Submitting {len(urls)} URLs to Google Indexing API...")
    print(f"  Core pages: {len(CORE_PAGES)}")
    print(f"  Best-roofer pages: {len(BEST_ROOFER_PAGES)}")
    print(f"  Area pages: {len(AREA_PAGES)}")
    print(f"  Service×city combos: {len(SERVICE_CITY_PAGES)} (capped to fit 100 total)")
    print()

    success = 0
    fail = 0
    errors = []

    for i, url in enumerate(urls, 1):
        payload = {
            "url": url,
            "type": "URL_UPDATED",
        }
        headers = {
            "Authorization": f"Bearer {credentials.token}",
            "Content-Type": "application/json",
        }

        try:
            resp = requests.post(ENDPOINT, json=payload, headers=headers)
            if resp.status_code == 200:
                success += 1
                print(f"  [{i}/{len(urls)}] ✓ {url}")
            else:
                fail += 1
                err_msg = resp.text[:200]
                errors.append((url, resp.status_code, err_msg))
                print(f"  [{i}/{len(urls)}] ✗ {url} → {resp.status_code}: {err_msg}")

                # If we hit quota, stop
                if resp.status_code == 429:
                    print("\n⚠️  Rate limited! Stopping.")
                    break
        except Exception as e:
            fail += 1
            errors.append((url, 0, str(e)))
            print(f"  [{i}/{len(urls)}] ✗ {url} → Error: {e}")

        # Small delay to avoid rate limiting
        if i % 20 == 0:
            time.sleep(1)

    print(f"\n{'='*50}")
    print(f"Results: {success} success, {fail} failed, {len(urls)} total attempted")
    if errors:
        print(f"\nFailed URLs:")
        for url, code, msg in errors:
            print(f"  {url} → {code}: {msg}")


if __name__ == "__main__":
    main()
