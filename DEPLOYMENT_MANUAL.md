# Production Deployment Manual: Competitor & Market Price Intelligence Suite
### Architecture: Cloudflare Workers + Cloudflare D1 + TypeScript 5.3+

## 1. Prerequisites
- Node.js v18.0.0 or higher
- npm v9.0.0 or higher
- Wrangler CLI (`npm install -g wrangler`)
- Cloudflare Account with Workers and D1 enabled

## 2. Pack 1 (Core Engine) Setup
```bash
cd engine/price_intelligence_engine
npm install
npm test # executes demo_runner.ts
```

## 3. Pack 2 (Edge Gateway) Deployment
```bash
cd engine/edge_pricing_gateway
npm install

# Initialize Cloudflare D1 Database
npx wrangler d1 create pricing_telemetry_db
# Apply Schema
npx wrangler d1 execute pricing_telemetry_db --file=schema.sql --remote

# Deploy Worker
npx wrangler deploy
```

## 4. Endpoints Verification
- `GET /health` or `GET /api/v1/status`: Health check & regional edge telemetry.
- `POST /api/v1/scan` or `POST /api/pricing/diff`: Scans and analyzes price delta.
- `POST /api/v1/reprice` or `POST /api/pricing/matrix`: Computes dynamic repricing and feature matrix comparisons.
- `POST /api/v1/alerts` or `POST /api/pricing/telemetry`: Webhook alert dispatch.
