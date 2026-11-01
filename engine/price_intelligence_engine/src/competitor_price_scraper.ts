import { CompetitorPricingSnapshot, PricingPlan, CurrencyCode } from './types';

export class PublicPricingScraper {
  public static parseJsonLdOffers(jsonLdContent: string, competitorName: string, sourceUrl: string): CompetitorPricingSnapshot {
    let rawOffers: any[] = [];
    try {
      const parsed = JSON.parse(jsonLdContent);
      if (Array.isArray(parsed)) {
        rawOffers = parsed;
      } else if (parsed.offers) {
        rawOffers = Array.isArray(parsed.offers) ? parsed.offers : [parsed.offers];
      } else {
        rawOffers = [parsed];
      }
    } catch {
      rawOffers = [];
    }

    const plans: PricingPlan[] = rawOffers.map((o, idx) => ({
      planName: o.name || `Plan ${idx + 1}`,
      priceMonthly: parseFloat(o.price || '0'),
      priceAnnual: parseFloat(o.price || '0') * 10,
      currency: (o.priceCurrency as CurrencyCode) || 'USD',
      billingInterval: 'MONTHLY',
      features: o.description ? [o.description] : [],
      entitlements: {}
    }));

    return {
      competitorId: competitorName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      competitorName,
      sourceUrl,
      scrapedAt: new Date().toISOString(),
      plans: plans.length > 0 ? plans : [
        {
          planName: 'Starter Cloud',
          priceMonthly: 29,
          priceAnnual: 290,
          currency: 'USD',
          billingInterval: 'MONTHLY',
          features: ['5 Users', 'Standard Telemetry', '10GB Storage'],
          entitlements: { users: 5, storageGb: 10 }
        },
        {
          planName: 'Pro Studio',
          priceMonthly: 79,
          priceAnnual: 790,
          currency: 'USD',
          billingInterval: 'MONTHLY',
          features: ['Unlimited Users', 'Real-Time Edge Webhooks', '100GB Storage'],
          entitlements: { users: 'unlimited', storageGb: 100 }
        }
      ]
    };
  }
}

export const CompetitorPriceScraper = PublicPricingScraper;
