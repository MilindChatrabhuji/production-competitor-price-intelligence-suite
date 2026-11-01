# Master Catalog: Production Competitor & Market Price Intelligence Suite
### Catalog Identifier: Way #64 / Product 66

| Asset ID | Component Name | Description | Deliverable Format |
|---|---|---|---|
| WAY64-P1-01 | Competitor Price Scraper | RFC-compliant public website & JSON-LD schema pricing extractor | TypeScript 5.3+ (`competitor_price_scraper.ts`, `public_pricing_scraper.ts`) |
| WAY64-P1-02 | Price Elasticity Modeler | Dynamic repricing rule simulator, margin guardrails, MAP compliance | TypeScript 5.3+ (`price_elasticity_modeler.ts`) |
| WAY64-P1-03 | Price Anomaly Alert Generator | Semantic diffing, price shift anomaly detector, flash sale alert generator | TypeScript 5.3+ (`price_anomaly_alert_generator.ts`, `price_change_detector.ts`) |
| WAY64-P1-04 | Feature Matrix Comparator | SaaS feature tier matrix builder, plan entitlement diff generator | TypeScript 5.3+ (`feature_matrix_comparator.ts`) |
| WAY64-P1-05 | Executive Digest Synthesizer | Monthly/weekly executive competitor digest compiler (Markdown/HTML) | TypeScript 5.3+ (`executive_digest_synthesizer.ts`) |
| WAY64-P2-01 | Repricing Webhook Dispatcher | Edge webhook dispatcher for ERP/Shopify/Amazon repricing APIs | TypeScript (`repricing_webhook_dispatcher.ts`, `pricing_webhook_router.ts`) |
| WAY64-P2-02 | Market Index Aggregator | Industry price index aggregator, historical trend analyzer, telemetry receiver | TypeScript (`market_index_aggregator.ts`, `competitor_telemetry_aggregator.ts`) |
| WAY64-P2-03 | Edge Pricing Worker & Router | Cloudflare Workers edge REST router with D1 bindings (`/api/v1/scan`, `/api/v1/reprice`) | TypeScript / Workers (`worker.ts`, `wrangler.toml`) |
| WAY64-P2-04 | Cloudflare D1 SQL Schema | Production database tables: competitors, products, price_history, alerts | SQLite D1 (`schema.sql`) |
| WAY64-P3-01 | Price Intelligence Agreement | Price Intelligence SLA Retainer Agreement with 15-min polling SLA ($500/$1500/$3000) | Markdown (`PRICE_INTELLIGENCE_SERVICE_AGREEMENT.md`) |
| WAY64-P3-02 | Client Pricing Intake Brief | Comprehensive questionnaire for client onboarding, MAP policies, competitor URLs | Markdown (`CLIENT_PRICING_INTAKE_BRIEF.md`, `CLIENT_COMPETITOR_INTAKE_BRIEF.md`) |
| WAY64-P3-03 | Agency White-Label Pitch | Multi-page B2B sales deck with gross margin expansion & revenue recapture ROI | Markdown (`AGENCY_WHITE_LABEL_PRICING_PITCH.md`) |
| WAY64-P3-04 | Dual Invoicing Engine | USD and INR invoice calculation engine with GST LUT export logic | TypeScript (`invoicing_engine.ts`) |
| WAY64-SH-01 | Interactive Intelligence Showcase | 4-Screen client-side HTML5/JS simulator for scraping, diffs, matrix & digest | HTML5 / CSS3 / JS (`showcase/index.html`) |
| WAY64-AS-01 | Hero Vector Illustration | 1200x630 scalable vector graphic banner with valid XML schema | Scalable Vector Graphic (`assets/price_intelligence_hero.svg`) |
