# Meta (Facebook/Instagram) Storm Response Ad System

> **Gates Enterprises** — Storm damage lead generation via Meta Ads  
> **Created:** March 31, 2026

## Overview

This directory contains the configuration and templates for running storm response ad campaigns on Facebook and Instagram. When hail hits one of our 30 Colorado service cities, these templates allow us to spin up targeted ads within hours.

**This system complements the Google Ads storm response system** located at `~/gatesroof/scripts/storm-ads/`. Together, they form a multi-channel storm response strategy.

---

## Prerequisites

Before you can run Meta ad campaigns, you need:

### 1. Meta Business Suite Access
- Go to [business.facebook.com](https://business.facebook.com)
- You need Admin access to the Gates Enterprises Business account
- If no Business account exists, create one and add the Gates Enterprises Facebook Page

### 2. Facebook Page
- Gates Enterprises must have an active Facebook Page
- The Page ID needs to be added to `meta-config.json` (replace `PLACEHOLDER_PAGE_ID`)

### 3. Ad Account
- Create an ad account in Meta Business Suite (or use an existing one)
- Add the Ad Account ID to `meta-config.json` (replace `PLACEHOLDER_AD_ACCOUNT_ID`)
- Format: `act_XXXXXXXXXX` (the `act_` prefix is required)
- Add a payment method to the ad account

### 4. Meta Pixel (Already Done ✅)
- Pixel ID: `1621445598880955`
- Already installed on gatesroof.com via `app/components/Analytics.tsx`
- Tracks PageView and Lead events

### 5. Access Token
- Go to [developers.facebook.com](https://developers.facebook.com)
- Create an app (type: Business)
- Under Tools > Graph API Explorer:
  - Select your app
  - Add permissions: `ads_management`, `ads_read`, `pages_manage_ads`, `pages_read_engagement`
  - Generate a User Access Token
  - Exchange it for a long-lived token (60 days)
- Add the token to `meta-config.json` (replace `PLACEHOLDER_ACCESS_TOKEN`)

**⚠️ Long-lived tokens expire after 60 days.** For production automation, set up a System User token in Business Settings which doesn't expire.

---

## Files in This Directory

| File | Purpose |
|------|---------|
| `meta-config.json` | Account IDs, API settings, 30 Colorado cities with zip codes, budget defaults |
| `ad-templates.json` | 4 pre-built ad creative templates (Storm Alert, Social Proof, Insurance Focus, Urgency) |
| `targeting-config.json` | Audience targeting presets (storm response, retargeting, lookalike) |
| `storm-playbook.md` | Complete step-by-step storm response protocol |
| `README.md` | This file |

---

## How to Create a Campaign from Templates

### Manual Process (Meta Ads Manager)

1. **Go to** Meta Ads Manager > Create Campaign
2. **Campaign objective:** Leads (or Traffic if Lead objective isn't available)
3. **Campaign name:** `Storm Response - Meta - {City} - {Date}`

4. **Ad Set level:**
   - Use targeting from `targeting-config.json` > `storm_response` audience
   - Set location to the city's zip codes (from `meta-config.json`)
   - Set age 28-65, homeowners
   - Add interests: Home improvement, Homeowner, Insurance, Roofing
   - Budget: $30/day
   - Placements: Facebook Feed, Instagram Feed, Facebook Stories, Instagram Stories

5. **Ad level:**
   - Pick a template from `ad-templates.json` (start with Template A)
   - Replace `{CITY}` with the city name
   - Replace `{HAIL_SIZE}` with the actual hail size
   - Replace `{ZIP_CODES}` with the city's zip codes
   - Add an image (real Gates project photo preferred)
   - Set the CTA button and destination URL

6. **Review and publish** (or save as draft for Alex to review)

### Future: Automated via API

Once the access token and ad account are configured, we can build Python scripts (similar to the Google Ads scripts) to automate campaign creation via the Meta Marketing API. The config files in this directory are structured to support that.

---

## Template Selection Guide

| Situation | Template | Why |
|-----------|----------|-----|
| Storm just hit (day 1) | **A - Storm Alert** | Urgency, specific hail data, direct response |
| Days 2-3, building trust | **B - Social Proof** | Reviews, certifications, neighbor trust |
| Days 3-5, insurance concerns | **C - Insurance Focus** | Claims process, hidden damage, peace of mind |
| Days 5+, capturing stragglers | **D - Urgency/Deadline** | Deadline pressure, last chance messaging |

**Best practice:** Run Template A alone on day 1, then add Template B on day 2. Rotate through C and D as the campaign matures.

---

## Budget & Timing Quick Reference

| Phase | Duration | Daily Budget | Templates |
|-------|----------|-------------|-----------|
| Immediate response | Day 1 | $30 | A only |
| Sustained push | Days 2-3 | $30 (cold) + $15 (retargeting) | A + B |
| Mid campaign | Days 4-7 | $20 (cold) + $15 (retargeting) | B + C |
| Wind down | Days 8-14 | $15 (retargeting only) | D |

**Max total daily spend across Google + Meta: $200**

---

## Retargeting Setup

To run retargeting campaigns, you need a Custom Audience:

1. Go to Meta Business Suite > Audiences > Create Audience > Custom Audience
2. Select "Website" as the source
3. Pixel: `1621445598880955`
4. Rule: People who visited URLs containing `/services/storm-hail-damage` OR `/areas/`
5. Exclude: People who visited `/thank-you` (already converted)
6. Retention: 30 days
7. Name: "Storm Damage Page Visitors - 30 Days"

This audience auto-updates as people visit the site.

---

## Lookalike Audience Setup (Future)

1. Export completed customers from the Master Customer Database
2. Upload as a Custom Audience in Meta (Customer List type)
3. Create a 1% Lookalike Audience targeting Colorado
4. Use this for prospecting campaigns beyond storm response

---

## Placeholders to Fill

Before the system is fully operational, Alex needs to provide:

- [ ] **Facebook Page ID** → update `meta-config.json`
- [ ] **Ad Account ID** → update `meta-config.json`
- [ ] **Access Token** → update `meta-config.json` (after Meta Business Suite setup)
- [ ] **Creative assets** → storm damage photos, Gates logo, before/after photos

---

## Related Files

- **Google Ads storm system:** `~/gatesroof/scripts/storm-ads/`
- **Storm trigger script:** `~/gatesroof/scripts/storm-ads/storm-trigger.py`
- **Gates website:** `~/gatesroof/` (Next.js app)
- **Landing page:** `gatesroof.com/services/storm-hail-damage`

---

## Questions?

Ask Tina. She built this. 💅
