---
name: gates-storm-ads-ops
description: Operate the Gates Enterprises storm-response ad system (Google Ads + Meta) in /Users/alexchicilo/gatesroof/scripts/storm-ads. Use whenever a hail storm hits a Front Range city, a storm alert lands in Discord #tina, or the user mentions storm ads, storm campaigns, activating/pausing/killing ads, storm-trigger, ad spend, or Meta/Google campaigns for Gates — even if they just say "hail hit Aurora, turn the ads on." Also load BEFORE reading or editing anything under scripts/storm-ads/: several scripts there spend real money the moment they run, and the directory holds secrets.
---

# Gates Storm-Ads Ops

Storm lifecycle: automatic detection creates **PAUSED** campaigns → Alex reviews → activate only on Alex's explicit go → pause when the response window closes. Money only moves on the activate step — keep it that way.

All commands below run from `/Users/alexchicilo/gatesroof/scripts/storm-ads` (or its `meta/` subdir) using the `.venv` interpreter — that's the venv the launchd job uses (a second `venv/` dir also exists; ignore it, it's stale).

```bash
cd /Users/alexchicilo/gatesroof/scripts/storm-ads && source .venv/bin/activate
```

## Load-bearing files

| File | Role |
|---|---|
| `storm-trigger.py` | Main automation: detect hail → create PAUSED campaigns → Discord alert. Also the `--activate` entry point. |
| `config.json` | Google creds, Discord webhook, HailScore cron secret, 31-city list, trigger thresholds. **git-ignored, contains secrets — never print.** |
| `meta/meta-config.json` | Meta access token, account/page/pixel IDs, city zips. **git-ignored, secrets — never print.** |
| `hailscore-config.json` | HailScore-side creds (cross-company; data-source use only). **git-ignored, secrets.** |
| `.storm-state.json` | Dedup ledger: one campaign set per `city:YYYY-MM-DD`. git-ignored. |
| `activate-campaign.py` / `pause-campaign.py` / `list-campaigns.py` | Google-side controls (`--name` / `--id`; pause also `--all`; list has `--json`). |
| `meta/create|activate|pause|list-campaigns.py`, `meta/kill-all.py` | Meta-side controls. **All default to dry-run; `--live` makes them real.** |
| `meta/build-storm-city.py`, `meta/build-cos-fountain.py` | One-off campaign builders with `ACTIVATE = True` hardcoded — **running them spends immediately** (see section 5). |
| `meta/build-godtier.py` | Same builder pattern but builds ALL PAUSED (no spend). |
| `meta/retarget-watch.py` | Read-only audience watcher (see section 6). Never spends. |
| `meta/storm-playbook.md`, `README.md`, `meta/README.md` | Full protocol + per-script docs. Source of truth for details not covered here. |

## 1. Detection is automatic — don't re-run it, just understand it

- launchd job `com.gatesroof.storm-trigger` (`~/Library/LaunchAgents/com.gatesroof.storm-trigger.plist`) runs `run-storm-trigger.sh` every 30 min (`StartInterval 1800`).
- The script checks NWS active alerts (CO) + the HailScore storm-alerts API for hail ≥ 1.0" (`min_hail_size_inches` in config.json) across 31 Colorado cities.
- Hits create a PAUSED Google Search campaign (default $50/day) + a PAUSED Meta campaign ($30/day), then ping Discord #tina.
- Quiet hours: scheduled runs no-op outside 06:00–23:59 local (`active_hours: [6, 23]` set in config.json, matching the code default). Manual `--activate` / `--force` deliberately bypass this.
- Dedup: key `City:YYYY-MM-DD` in `.storm-state.json` — max one campaign set per city per day. To legitimately re-create for the same city same day, delete that key from the file (don't delete the whole file).

Manual test run (safe): `python storm-trigger.py --dry-run` — checks sources, creates nothing.

## 2. Storm alert fired — review before anything else

A Discord alert means PAUSED campaigns already exist. Nothing is spending yet. Review:

```bash
# Google side (storm campaigns, machine-readable)
python list-campaigns.py --json

# Meta side (needs --live even to READ real data; without it you get dry-run stubs)
cd meta && python list-campaigns.py --live
```

Cross-check in the UIs if anything looks off: Google `https://ads.google.com/aw/campaigns`, Meta `https://business.facebook.com/adsmanager`.

Sanity checks before recommending activation:
- Hail size in the alert is ≥ 1" and the city is genuinely in Gates territory.
- The Google campaign name matches today: `Storm Response - <City> - <YYYY-MM-DD>` (the `--activate` path looks it up by exactly this name — activating on a later date won't find it). The Meta campaign is named `Storm Response - Meta - <City>` (no date; the activate path matches it by city instead).

## 3. Activate — ONLY on Alex's explicit say-so

Activation = real spend (~$80/day per city: $50 Google + $30 Meta). Never activate on your own judgment, a briefing suggestion, or "the storm looks big." Alex says go, in this conversation, per city.

```bash
# Both channels for one city (preferred path)
python storm-trigger.py --activate Denver
```

Per-channel fallbacks if the combined path partially fails (it lists Meta campaigns and regex-matches the city; misses are reported as "needs manual activation"):

```bash
# Google only
python activate-campaign.py --name "Storm Response - Denver - 2026-07-02"

# Meta only (get the ID from meta/list-campaigns.py --live)
cd meta && python activate-campaign.py --campaign-id <ID> --live
```

After activating, confirm the Discord "LIVE" confirmation posted and mention the daily spend total to Alex.

## 4. Pause when the response window closes

The playbook window is a few days post-storm; Alex calls the end.

```bash
# Google: one campaign or the whole storm set
python pause-campaign.py --name "Storm Response - Denver - 2026-07-02"
python pause-campaign.py --all          # every active storm campaign (season end)

# Meta (dry-run by default — add --live to actually pause)
cd meta && python pause-campaign.py --campaign-id <ID> --live
cd meta && python pause-campaign.py --all --live
```

**Emergency kill (Meta):** pauses every campaign whose name starts with the `campaign_name_prefix` ("Storm Response - Meta"):

```bash
cd meta && python kill-all.py           # dry-run: shows what it WOULD pause
cd meta && python kill-all.py --live    # actually pauses
```

Note kill-all only matches the standard prefix — campaigns built by the one-off builders (`[GODTIER] Storm Lead — ...`) are NOT caught; pause those by ID or in Ads Manager.

## 5. One-off Meta builders — the money landmines

`meta/build-storm-city.py` and `meta/build-cos-fountain.py` have `ACTIVATE = True` **hardcoded** — running them builds a campaign/ad set/ads AND flips everything ACTIVE in the same run. There is no dry-run flag, no prompt. `meta/build-godtier.py` is the same pattern but builds PAUSED.

Rules for using or editing them:

- **Never run one "to see what it does."** Read it. Executing it is a purchase.
- Before any run: update the top-of-file constants — `CITIES` (city, zips, hail size, budget) + `DATESTAMP` in `build-storm-city.py`; `CITY` / `HAIL` / `BUDGET_CENTS` / `DATESTAMP` in the single-city builders — and set `ACTIVATE` deliberately: default to `False` unless Alex explicitly approved same-run activation.
- Hail sizes in `CITIES` must be **verified NWS Severe Thunderstorm Warning figures** for that date — never guessed or rounded up. The ad copy quotes them publicly; a wrong number is a false advertising claim under Gates' name.
- `budget` is in **cents** (Meta API minor units): `4000` = $40/day. Typing `50` buys you a useless $0.50/day ad set.
- Copy in these builders was CCO-cleared: claim-*process* language only, no deductible/payout promises (CO §6-22-101 / DORA — see memory `feedback_no_insurance_copy`). Keep any edits inside that line.
- The builders are idempotent by name (they delete a prior campaign with the same name before rebuilding) — re-running after a partial failure is safe *only if* you haven't changed the name.

## 6. retarget-watch (read-only, leave it alone)

`meta/retarget-watch.py` watches the "Storm Page, No Lead" custom audience and pings Discord **once** when it clears ~500 people (`THRESHOLD=500` in code; the docstring's "~1,000" is stale) so the pre-built PAUSED $20/day retargeting ad set can be activated. It never spends. Runs via launchd `com.alexchicilo.gates-retarget-watch` at 08:10 and 18:10 daily; state in `meta/.retarget-watch-state.json`, log in `meta/logs/retarget-watch.log`. To re-arm the one-time notification after acting on it, set `"notified": false` in the state file.

## 7. Settled decisions that look like bugs

- **Auto-activation is deliberately OFF** (`"auto_activate_enabled": false` in git-ignored config.json; the code also defaults to False when the key is missing, so a fresh clone is safe too). Killed 2026-06-24 after it was spending $80/day/city with zero approval (memory `project_storm_ads_autoactivate_off`). Detection, PAUSED-create, and Discord alerts still run. **Do not flip this flag, "fix" the dead auto-activate code paths in storm-trigger.py, or remove them** — re-enabling is Alex's one-line decision, and the code paths must keep working for that day.
- **Meta scripts require `--live` even for read-only listing** — annoying but intentional; the dry-run default is the guard rail across every Meta script. Don't invert the default.
- **HailScore config/creds living in this Gates repo** (`hailscore-config.json`, the cron secret inside config.json) is a known, contained cross-company wart: storm-trigger legitimately *queries* the HailScore API as a data source, nothing more. Never move additional HailScore credentials or data into this repo, and never make Gates copy claim ownership of HailScore.
- **`.venv` vs `venv`:** two venvs exist; `run-storm-trigger.sh` (production launchd path) uses `.venv`. Don't "clean up" `venv/` blindly, but use `.venv` for everything.

## 8. Secrets & git hygiene

- **Never `cat`, `echo`, `head`, or otherwise print** `config.json`, `meta/meta-config.json`, `hailscore-config.json`, or any `.bak` of them. To verify a config key exists, grep for the key *name* only (e.g. `grep -o '"auto_activate_enabled": *[a-z]*' config.json`). See memory `feedback_never_print_secrets`.
- All three config files + `scripts/storm-ads/*.bak` are git-ignored (root `.gitignore` lines 44–48, since commit `86fc887`), **but the old Meta token and HailScore cron secret still exist in git history** — treat them as burned, and never do anything that recreates tracked copies.
- **Never `git add .` / `git add -A` from inside `scripts/storm-ads/`.** The build scripts, `CAMPAIGN-BRIEF-godtier.md`, and `retarget-watch.py` are untracked-by-choice and NOT git-ignored — a blanket add would commit them. (Logs and `.bak` files at any depth are ignored; the one exception is `storm-trigger-launchd.log`, which was tracked before the ignore rules and still is.) Stage specific files by name, and run `git status --ignored -- scripts/storm-ads` first.

## 9. Verify the system is alive (health check)

```bash
# launchd jobs loaded and exiting 0
launchctl list | grep -E 'storm-trigger|gates-retarget'

# storm-trigger actually ran recently (run-storm-trigger.sh stamps each run)
grep '^=== ' /Users/alexchicilo/gatesroof/scripts/storm-ads/storm-trigger.log | tail -3

# launchd-level errors (should be quiet)
tail /Users/alexchicilo/gatesroof/scripts/storm-ads/storm-trigger-launchd.log

# retarget watcher heartbeat
tail -3 /Users/alexchicilo/gatesroof/scripts/storm-ads/meta/logs/retarget-watch.log
```

A healthy quiet day ends runs with "No qualifying hail events detected. All clear." Gaps > 1 hour in the `===` timestamps during 6am–11pm mean the Mac was asleep or the job unloaded — reload with `launchctl unload ~/Library/LaunchAgents/com.gatesroof.storm-trigger.plist && launchctl load ~/Library/LaunchAgents/com.gatesroof.storm-trigger.plist`.

After ANY activation or pause, verify state changed on both channels (`list-campaigns.py --json` / `meta/list-campaigns.py --live`), not just that the script exited 0 — partial activations are the known failure mode and the Meta half reports "needs manual activation" in text, not exit codes.
