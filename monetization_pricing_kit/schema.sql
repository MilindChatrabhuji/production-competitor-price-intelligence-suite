-- Cloudflare D1 Database Schema for Competitor Price Intelligence
CREATE TABLE IF NOT EXISTS competitors (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  website_url TEXT NOT NULL,
  pricing_url TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  competitor_id TEXT NOT NULL,
  plan_name TEXT NOT NULL,
  billing_interval TEXT NOT NULL,
  currency TEXT DEFAULT 'USD',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(competitor_id) REFERENCES competitors(id)
);

CREATE TABLE IF NOT EXISTS price_history (
  id TEXT PRIMARY KEY,
  product_id TEXT NOT NULL,
  price_amount REAL NOT NULL,
  currency TEXT DEFAULT 'USD',
  recorded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(product_id) REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS alerts (
  id TEXT PRIMARY KEY,
  competitor_id TEXT NOT NULL,
  alert_type TEXT NOT NULL,
  message TEXT NOT NULL,
  severity TEXT DEFAULT 'MEDIUM',
  dispatched_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS digests (
  id TEXT PRIMARY KEY,
  period_label TEXT NOT NULL,
  summary_text TEXT NOT NULL,
  generated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
