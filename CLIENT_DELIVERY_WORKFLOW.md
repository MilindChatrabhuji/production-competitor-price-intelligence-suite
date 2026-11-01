# Client Delivery Workflow: Competitor Price Intelligence Retainer
### Standard Operating Procedure for Market Intelligence Operations

## Step 1: Client Onboarding & Competitor Mapping (Day 1 - 2)
1. Ingest client discovery brief from `CLIENT_PRICING_INTAKE_BRIEF.md`.
2. Extract client pricing structure and target competitor URLs (up to 20 competitors).
3. Determine alert threshold parameters (e.g. >= 5% price change, plan addition/removal, MAP compliance).

## Step 2: Automated Ingest & Baseline Capture (Day 3 - 5)
1. Configure `competitor_price_scraper.ts` to ingest public pricing tables and JSON-LD feeds.
2. Initialize Cloudflare D1 database with baseline competitor SKUs and entitlement tiers.
3. Run `feature_matrix_comparator.ts` to deliver initial competitive positioning matrix.

## Step 3: Edge Webhook Setup & Continuous Monitoring (Day 6 - 7)
1. Connect Cloudflare Workers edge router to client Slack or Discord webhook channels.
2. Verify automated alert dispatch via `repricing_webhook_dispatcher.ts`.
3. Deliver initial baseline executive digest to client stakeholders.

## Step 4: Monthly Recurring Cadence ($500 / $1,500 / $3,000 Retainers)
- 15-minute price polling SLA and antitrust compliance guarantee.
- Real-time instant alerts for price hikes, drops, and stealth feature shifts.
- Bi-weekly pricing diff reports.
- Monthly comprehensive executive digest generated via `executive_digest_synthesizer.ts`.
- Monthly billing via `invoicing_engine.ts` with GST LUT zero-rated export handling.
