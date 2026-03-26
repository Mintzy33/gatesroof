# Storm Response Google Ads Automation

Automatically create and manage Google Ads campaigns for Gates Enterprises when hail storms hit Colorado cities.

## How It Works

1. **storm-trigger.py** checks NWS alerts and HailScore API for hail events in Colorado
2. When hail ≥ 1" hits a city Gates serves, it creates a **PAUSED** search campaign
3. Alex reviews the campaign, then activates it with **activate-campaign.py**
4. After the storm response window, pause with **pause-campaign.py**

All campaigns start **PAUSED** by default. Nothing goes live without human review.

## Quality Score Optimization (Target: 8+)

Every campaign is built for maximum quality score:

- **15/15 headline slots** filled with varied, specific copy
- **Pinned headlines** — positions 1 & 2 locked to highest-intent headlines
- **4/4 description slots** filled with proof points and CTAs
- **Mixed keyword match types** — exact, phrase, and broad for coverage
- **12 negative keywords** to block junk traffic (DIY, jobs, YouTube, etc.)
- **4 sitelink assets** pointing to relevant pages
- **6 callout assets** highlighting trust signals
- **Call asset** with (720) 766-3377
- **Structured snippet** listing services
- **Landing page** → gatesroof.com/services/storm-damage (intent-matched)
- **Enhanced manual CPC** bidding

## Setup

```bash
cd ~/gatesroof/scripts/storm-ads
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### Authentication

Currently configured for service account auth:
- Service account: `indexing-bot@hailscore.iam.gserviceaccount.com`
- Key: `/Users/alexchicilo/hailscore/scripts/google-indexing-key.json`
- MCC: `133-636-2356`
- Customer: `440-384-3497`

If service account auth fails (needs domain-wide delegation), switch to OAuth2:

1. Go to Google Cloud Console → APIs & Services → Credentials
2. Create OAuth2 client ID (Desktop app)
3. Download the JSON, run the auth flow to get a refresh token
4. Update `ads_client.py` to use `google.ads.googleads.client.GoogleAdsClient.load_from_dict()` with OAuth2 credentials

## Scripts

### create-campaign.py
Create a full campaign for a storm-hit city.

```bash
# Dry run (preview everything, no API calls)
python create-campaign.py --city "Denver" --hail-size 1.5 --dry-run

# Create for real (starts PAUSED)
python create-campaign.py --city "Denver" --hail-size 1.5

# Custom budget
python create-campaign.py --city "Boulder" --hail-size 2.0 --budget 75
```

### list-campaigns.py
View all storm response campaigns with metrics.

```bash
python list-campaigns.py              # Storm response campaigns only
python list-campaigns.py --all        # All campaigns
python list-campaigns.py --status PAUSED
python list-campaigns.py --json       # Machine-readable output
```

### activate-campaign.py
Enable a paused campaign to start serving ads.

```bash
python activate-campaign.py --name "Storm Response - Denver - 2026-03-26"
python activate-campaign.py --id 12345678
```

### pause-campaign.py
Pause campaigns when the response window closes.

```bash
python pause-campaign.py --name "Storm Response - Denver - 2026-03-26"
python pause-campaign.py --id 12345678
python pause-campaign.py --all   # Pause ALL active storm campaigns
```

### storm-trigger.py
The main automation — check for storms and create campaigns.

```bash
# Normal check (both NWS + HailScore)
python storm-trigger.py

# Dry run
python storm-trigger.py --dry-run

# Force-create for testing
python storm-trigger.py --force Denver --force-size 1.5

# Only check NWS
python storm-trigger.py --source nws
```

#### Cron Setup (every 30 min during storm season, Apr–Sep)

```crontab
*/30 * * * 4-9 cd ~/gatesroof/scripts/storm-ads && .venv/bin/python storm-trigger.py >> /tmp/storm-ads.log 2>&1
```

## Config

All configuration lives in `config.json`:
- Google Ads credentials
- Campaign defaults (budget, bidding, landing page)
- Ad copy templates (headlines, descriptions)
- Keyword templates (exact, phrase, broad)
- Negative keywords
- Asset templates (sitelinks, callouts, snippets)
- Colorado city list with geo target IDs
- Storm trigger thresholds

## Colorado Cities Covered (30)

Metro: Denver, Aurora, Lakewood, Thornton, Arvada, Westminster, Centennial, Broomfield, Commerce City, Brighton, Northglenn, Federal Heights, Wheat Ridge, Golden

Front Range: Boulder, Longmont, Loveland, Fort Collins, Greeley, Erie, Frederick, Firestone, Dacono

South Metro: Castle Rock, Parker, Highlands Ranch, Littleton, Englewood

South: Colorado Springs, Pueblo

## Files

```
storm-ads/
├── config.json           # All configuration
├── ads_client.py         # Shared Google Ads client init
├── create-campaign.py    # Create a storm response campaign
├── list-campaigns.py     # List campaigns with metrics
├── activate-campaign.py  # Activate a paused campaign
├── pause-campaign.py     # Pause campaign(s)
├── storm-trigger.py      # Main automation (check + create)
├── requirements.txt      # Python dependencies
├── README.md             # This file
├── .venv/                # Python virtual environment (gitignored)
└── .storm-state.json     # Dedup state (gitignored)
```
