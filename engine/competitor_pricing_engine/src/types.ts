/**
 * Competitor & Market Price Intelligence Types & Interfaces
 */

export type CurrencyCode = 'USD' | 'INR' | 'EUR' | 'GBP';

export interface PricingPlan {
  planName: string;
  priceMonthly: number;
  priceAnnual: number;
  currency: CurrencyCode;
  billingInterval: 'MONTHLY' | 'ANNUAL' | 'USAGE_BASED';
  features: string[];
  entitlements: Record<string, string | number | boolean>;
}

export interface CompetitorPricingSnapshot {
  competitorId: string;
  competitorName: string;
  sourceUrl: string;
  scrapedAt: string;
  plans: PricingPlan[];
}

export interface PriceDiffAlert {
  competitorName: string;
  planName: string;
  oldPrice: number;
  newPrice: number;
  currency: CurrencyCode;
  percentageChange: number;
  changeType: 'HIKE' | 'DROP' | 'PACKAGING_SHIFT' | 'UNMODIFIED';
  alertSeverity: 'LOW' | 'MEDIUM' | 'HIGH';
  timestamp: string;
}

export interface DynamicRepricingRule {
  ruleId: string;
  targetSku: string;
  minGrossMarginPercent: number;
  mapPrice: number;
  strategy: 'MATCH_LOWEST' | 'UNDERCUT_1_PERCENT' | 'TARGET_PERCENTILE';
}

export interface FeatureMatrixRow {
  featureName: string;
  category: string;
  competitorSupport: Record<string, boolean | string>;
}

export interface ExecutiveDigest {
  digestId: string;
  period: string;
  generatedAt: string;
  marketSummary: string;
  keyPriceMoves: PriceDiffAlert[];
  whitespaceOpportunities: string[];
}
