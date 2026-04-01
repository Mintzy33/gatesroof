# Gates Enterprises Storm Response Playbook

> **Version:** 1.0  
> **Last Updated:** March 31, 2026  
> **Owner:** Alex Chicilo / Tina (AI Assistant)

This playbook defines the complete storm response process for Gates Enterprises. When hail hits one of our 30 Colorado cities, this is the step-by-step protocol to activate paid ads, organic content, and direct outreach to capture storm damage leads.

---

## Trigger Criteria

**Activate when:** Hail 1"+ is detected in any of our 30 Colorado service cities.

**Data sources:**
- NWS active alerts API (checked every 30 minutes by cron)
- HailScore storm alerts endpoint
- SPC daily hail reports
- Local news / storm chaser reports

**30 Service Cities:**
Denver, Aurora, Lakewood, Thornton, Arvada, Westminster, Centennial, Boulder, Longmont, Loveland, Fort Collins, Greeley, Broomfield, Castle Rock, Parker, Highlands Ranch, Littleton, Englewood, Commerce City, Brighton, Northglenn, Federal Heights, Wheat Ridge, Golden, Erie, Frederick, Firestone, Dacono, Colorado Springs, Pueblo

---

## Phase 1: AUTOMATIC (Within 30 Minutes of Storm Detection)

These happen automatically via the storm trigger cron and Tina:

| Action | System | Status |
|--------|--------|--------|
| Storm detected via NWS API | `storm-trigger.py` | Automatic |
| Google Search campaign created (PAUSED) for affected city | `create-campaign.py` | Automatic |
| Tina notifies Alex in #tina with storm details | Discord notification | Automatic |
| Storm details logged (city, hail size, time, affected zips) | Memory file | Automatic |

**What Tina's notification includes:**
- City name and affected zip codes
- Hail size (inches)
- Time of storm
- NWS alert details
- "Google campaign created and PAUSED. Ready for activation."
- "Meta ad templates ready. Awaiting your go."

---

## Phase 2: ALEX ACTIVATES (Within 1-2 Hours)

Alex reviews the storm data and activates campaigns:

### Step 1: Review & Activate Google Search Campaign
- Check the PAUSED campaign in Google Ads (or ask Tina to activate)
- Confirm city, budget ($50/day), and ad copy look correct
- Activate the campaign

### Step 2: Activate Meta Ad Campaign
- Go to Meta Business Suite > Ads Manager
- Create new campaign using Template A ("Storm Alert") from `ad-templates.json`
- Target the storm response audience for the affected city
- Set budget to $30/day
- Set placements: Facebook Feed, Instagram Feed, Facebook Stories, Instagram Stories
- **Or:** Tell Tina "activate Meta ads for [city]" and she'll walk you through it

### Step 3: Approve GBP Post
- Tina will draft a Google Business Profile post about the storm
- Review and approve it
- Post should mention: free inspections, the specific city, and a call to action

### Step 4: Confirm Activation
- Reply to Tina in #tina: "Campaigns active" so she knows to proceed with Phase 3

---

## Phase 3: TINA HANDLES (Within 2-4 Hours)

Once Alex confirms activation, Tina executes:

### LinkedIn Post
- Post to Gates Enterprises company page
- Content: Storm awareness, free inspection offer, social proof
- No links in post body (algorithm penalty)
- Alex must approve before posting (per AGENTS.md rules)

### Email to Past Customers
- Filter Master Customer Database by affected zip codes
- Send storm alert email to past customers in the area
- Template: "Your area was just hit by hail. Free inspection for past customers."
- Use tina@gatesroof.com, follow email campaign procedures

### Monitor Ad Performance
- Check Google Ads and Meta Ads performance hourly for the first 4 hours
- Report initial metrics to Alex in #tina
- Flag any issues (disapproved ads, low CTR, budget concerns)

---

## Phase 4: DAYS 2-7 (Sustained Response)

### Day 2-3: Add Social Proof Creative
- Launch Template B ("Social Proof") alongside Template A on Meta
- Start retargeting campaign for website visitors who viewed storm damage page
- Retargeting budget: $15/day
- Post follow-up GBP content: "Tips for checking your roof after a hail storm"

### Day 4-5: Shift to Insurance Messaging
- Swap Template A for Template C ("Insurance Focus") on Meta
- Keep Template B running
- Reduce storm response audience budget to $20/day
- Increase retargeting if conversion rate is strong
- Second GBP post: "How to file an insurance claim for hail damage"

### Day 5-7: Monitor and Optimize
- Daily performance report to Alex:
  - Total spend (Google + Meta)
  - Clicks, impressions, CTR
  - Leads/calls generated
  - Cost per lead
- Adjust budgets based on performance
- Pause underperforming ad variants
- Scale budget on high-performers (up to $200/day total cap)

---

## Phase 5: DEACTIVATION (When Storm Interest Dies)

Storm interest typically fades 5-7 days after the event. Signs it's time:

- CTR dropping below targets
- Cost per lead climbing above $50
- Search volume for "[city] hail damage" declining
- Fewer inbound calls

### Deactivation Steps:

1. **Pause Google Search campaign** (usually day 5-7)
   - Run `pause-campaign.py` or pause in Google Ads
   
2. **Pause Meta storm response ads** (same timeline)
   - Pause cold audience targeting (Templates A, B, C)
   
3. **Keep retargeting running for 14 more days**
   - Switch to Template D ("Urgency/Deadline")
   - Budget: $15/day
   - These are warm leads who already showed interest
   
4. **Final performance report**
   - Total spend across all channels
   - Total leads generated
   - Cost per lead
   - Estimated revenue from closed deals
   - Lessons learned for next storm

---

## Budget Guidelines

| Channel | Daily Budget | Notes |
|---------|-------------|-------|
| Google Search | $50/day per city | Highest intent, captures active searchers |
| Meta (cold audience) | $30/day per city | Broader reach, awareness + leads |
| Meta (retargeting) | $15/day | Runs across all recent storm cities |
| **Max total daily spend** | **$200** | Across all channels, all cities |

### Budget Escalation Rules:
- If cost per lead < $30 and budget is maxed: request Alex's approval to increase
- If cost per lead > $75: pause that channel and reallocate
- If multiple cities hit simultaneously: prioritize by hail size and population
- Never exceed $200/day total without Alex's explicit approval

---

## Key Metrics & Targets

| Metric | Google Target | Meta Target |
|--------|--------------|-------------|
| Cost per click | < $5 | < $2 |
| Cost per lead/call | < $50 | < $50 |
| Click-through rate | > 3% | > 1% |
| Conversion rate (landing page) | > 5% | > 5% |
| ROAS (if trackable) | > 5x | > 3x |

### Tracking Setup:
- **Google:** Conversion tracking via Google Ads + GA4 (property 524938162)
- **Meta:** Meta Pixel 1621445598880955 tracks PageView, Lead events
- **Landing page:** gatesroof.com/services/storm-damage
- **Phone tracking:** (720) 766-3377 (consider call tracking number for attribution)

---

## Creative Assets Needed

### Must-Have (Before Storm Season):
- [ ] 3-5 photos of real storm damage (Gates project photos)
- [ ] Gates logo (high res, transparent background)
- [ ] 2-3 before/after roof photos
- [ ] Team photo (for social proof ads)

### Nice-to-Have:
- [ ] 15-30 second video of inspection process
- [ ] Drone footage of completed roof
- [ ] Customer testimonial video
- [ ] Branded image templates (Canva or similar)

### Image Specs:
- **Feed ads:** 1080x1080px (1:1) or 1200x628px (1.91:1)
- **Stories:** 1080x1920px (9:16)
- **File format:** JPG or PNG, under 30MB

---

## Multi-City Storm Protocol

When a storm hits multiple cities at once:

1. **Prioritize by hail size** — larger hail = more damage = more leads
2. **Prioritize by population** — Denver/Aurora/Colorado Springs first
3. **Budget allocation:**
   - City 1 (largest hail): $50 Google + $30 Meta = $80
   - City 2: $50 Google + $30 Meta = $80
   - Retargeting: $15
   - Total: $175 (under $200 cap)
4. **If 3+ cities:** Reduce per-city budgets or get Alex's approval to exceed $200

---

## Quick Reference: Who Does What

| Task | Who | When |
|------|-----|------|
| Detect storm | Cron (automatic) | Real-time |
| Create Google campaign | Script (automatic) | Within 30 min |
| Notify Alex | Tina (automatic) | Within 30 min |
| Activate Google campaign | Alex | Within 1-2 hours |
| Activate Meta campaign | Alex | Within 1-2 hours |
| Approve GBP post | Alex | Within 1-2 hours |
| Post to LinkedIn | Tina (after approval) | Within 2-4 hours |
| Email past customers | Tina | Within 2-4 hours |
| Monitor performance | Tina | Ongoing |
| Daily reports | Tina | Daily |
| Pause campaigns | Tina (with Alex's OK) | Day 5-7 |
| Final report | Tina | After deactivation |

---

## Appendix: File Locations

| File | Path | Purpose |
|------|------|---------|
| Google Ads config | `~/gatesroof/scripts/storm-ads/config.json` | Google Ads campaign settings |
| Google Ads scripts | `~/gatesroof/scripts/storm-ads/*.py` | Campaign creation/management |
| Meta config | `~/gatesroof/scripts/storm-ads/meta/meta-config.json` | Meta Ads account settings |
| Meta ad templates | `~/gatesroof/scripts/storm-ads/meta/ad-templates.json` | Pre-built ad creatives |
| Meta targeting | `~/gatesroof/scripts/storm-ads/meta/targeting-config.json` | Audience targeting presets |
| This playbook | `~/gatesroof/scripts/storm-ads/meta/storm-playbook.md` | You're reading it |
| Master customer list | Google Sheet `1Catvr4UB6BNR6b6UedmlSZ_irSrSx94o9wjdn534mgE` | For email outreach |

---

*This playbook is a living document. Update it after every storm response with lessons learned.*
