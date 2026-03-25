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

# ── URL Lists (prioritized) ──

# Priority 1: NEW pages not in yesterday's batch
NEW_PAGES = [
    "/blog/parker-colorado-hail-damage-homeowner-guide",
    "/blog/how-to-file-roof-insurance-claim-colorado",
    "/blog/best-roofing-materials-colorado-weather",
    "/blog/spring-roof-maintenance-checklist-colorado-hail-season",
    "/blog/spot-storm-chaser-vs-legitimate-roofing-company",
    "/blog/questions-ask-before-hiring-roofing-contractor-colorado",
    "/blog/gaf-master-elite-vs-preferred-difference",
    "/blog/why-manufacturer-certifications-matter-roofer",
    "/blog/colorado-freeze-thaw-cycle-roof-damage",
    "/blog/fall-roof-maintenance-checklist-colorado-homes",
    "/blog/summer-roofing-colorado-best-time-replace",
    "/blog/post-storm-roof-inspection-checklist-colorado",
    "/blog/preparing-roof-colorado-2026-hail-season",
    "/blog/roof-repair-vs-full-replacement-after-storm",
    "/blog/does-homeowners-insurance-cover-roof-leaks-colorado",
    "/blog/supplementing-roof-insurance-claim-guide",
    "/blog/roof-insurance-claim-timeline-how-long",
    "/blog/what-to-expect-roof-insurance-inspection",
    "/blog/arvada-roofing-front-range-storms",
    "/blog/colorado-springs-roofing-military-community-guide",
    "/blog/fort-collins-roofing-weather-challenges-solutions",
    "/blog/lakewood-roofing-companies-how-to-choose",
    "/blog/aurora-colorado-roofing-homeowner-guide",
    "/blog/castle-rock-roofing-guide-hail-wind-weather",
    "/blog/roofing-highlands-ranch-homeowners-guide",
    "/blog/best-roofing-companies-parker-colorado",
    # New area pages not in old script
    "/areas/conifer",
    "/areas/edgewater",
    "/areas/englewood",
    "/areas/evergreen",
    "/areas/federal-heights",
    "/areas/lone-tree",
    "/areas/morrison",
    "/areas/superior",
    "/areas/wheat-ridge",
    # New service pages
    "/services/gutters-guards",
    "/services/paint",
    "/services/siding-exterior",
    "/services/windows",
    "/services/insurance-claims",
    "/insurance-restoration",
    # New comparison/tool pages
    "/compare",
    "/compare/storm-chasers",
    "/tools",
    "/tools/hail-risk-check",
    "/tools/insurance-coverage-estimator",
    "/tools/repair-cost-estimator",
    "/tools/roof-age-calculator",
    # About sub-pages
    "/about/alex-chicilo",
    "/about/gates-enterprises",
    "/why-gates-enterprises",
    "/warranty",
    "/faq",
    # Best roofer nested pages
    "/best-roofer-parker",
    "/best-roofer-lakewood",
    "/best-roofer/arvada",
    "/best-roofer/broomfield",
    "/best-roofer/littleton",
    "/best-roofer/thornton",
    "/best-roofer/westminster",
]

# Priority 2: Core pages (always resubmit)
CORE_PAGES = [
    "",  # homepage
    "/services",
    "/contact",
    "/reviews",
    "/about",
    "/blog",
    "/insurance-claims",
    "/impact-resistant-shingles",
    "/financing",
    "/gallery",
]

# Priority 3: Best-roofer top-level pages
BEST_ROOFER_PAGES = [
    "/best-roofer-denver",
    "/best-roofer-colorado-springs",
    "/best-roofer-aurora",
    "/best-roofer-fort-collins",
]

# Priority 4: Area pages (all 25 cities)
ALL_CITIES = [
    "denver", "colorado-springs", "aurora", "fort-collins", "lakewood",
    "thornton", "arvada", "westminster", "centennial", "boulder",
    "highlands-ranch", "parker", "castle-rock", "longmont", "broomfield",
    "brighton", "loveland", "greeley", "pueblo", "littleton",
    "erie", "commerce-city", "northglenn", "castle-pines", "golden",
    "louisville",
]
AREA_PAGES = [f"/areas/{city}" for city in ALL_CITIES]


def build_url_list():
    """Build prioritized URL list, capped at MAX_SUBMISSIONS."""
    urls = []
    # Priority 1: NEW pages first
    urls.extend([f"{BASE}{p}" for p in NEW_PAGES])
    # Priority 2: Core pages
    urls.extend([f"{BASE}{p}" for p in CORE_PAGES])
    # Priority 3: Best-roofer pages
    urls.extend([f"{BASE}{p}" for p in BEST_ROOFER_PAGES])
    # Priority 4: Area pages
    urls.extend([f"{BASE}{p}" for p in AREA_PAGES])

    # Deduplicate while preserving order
    seen = set()
    deduped = []
    for u in urls:
        if u not in seen:
            seen.add(u)
            deduped.append(u)

    # Cap at 100
    return deduped[:MAX_SUBMISSIONS]


def main():
    # Authenticate
    credentials = service_account.Credentials.from_service_account_file(
        KEY_FILE, scopes=SCOPES
    )
    credentials.refresh(GoogleAuthRequest())

    urls = build_url_list()
    print(f"Submitting {len(urls)} URLs to Google Indexing API...")
    print(f"  NEW pages: {len(NEW_PAGES)}")
    print(f"  Core pages: {len(CORE_PAGES)}")
    print(f"  Best-roofer pages: {len(BEST_ROOFER_PAGES)}")
    print(f"  Area pages: {len(AREA_PAGES)}")
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
