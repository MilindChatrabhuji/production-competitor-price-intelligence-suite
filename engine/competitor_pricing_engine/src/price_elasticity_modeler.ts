import { DynamicRepricingRule } from './types';

export class PriceElasticityModeler {
  public static calculatePercentiles(prices: number[]): { p25: number; median: number; p75: number; p90: number; recommendedCorridor: string } {
    if (prices.length === 0) return { p25: 0, median: 0, p75: 0, p90: 0, recommendedCorridor: '$0 - $0' };

    const sorted = [...prices].sort((a, b) => a - b);
    const getP = (p: number) => {
      const idx = Math.floor((p / 100) * sorted.length);
      return sorted[Math.min(idx, sorted.length - 1)];
    };

    const p25 = getP(25);
    const median = getP(50);
    const p75 = getP(75);
    const p90 = getP(90);

    return {
      p25,
      median,
      p75,
      p90,
      recommendedCorridor: `$${p25} - $${p75}`
    };
  }

  public static simulateDynamicRepricing(
    competitorPrices: number[],
    costOfGoods: number,
    rule: DynamicRepricingRule
  ): { targetPrice: number; marginPercent: number; mapCompliant: boolean } {
    const lowest = Math.min(...competitorPrices);
    let candidate = lowest;

    if (rule.strategy === 'UNDERCUT_1_PERCENT') {
      candidate = Math.round(lowest * 0.99 * 100) / 100;
    }

    // Guardrail: MAP compliance
    const mapCompliant = candidate >= rule.mapPrice;
    if (!mapCompliant) {
      candidate = rule.mapPrice;
    }

    // Guardrail: Min gross margin
    const minAllowablePrice = Math.round((costOfGoods / (1 - rule.minGrossMarginPercent / 100)) * 100) / 100;
    if (candidate < minAllowablePrice) {
      candidate = minAllowablePrice;
    }

    const marginPercent = Math.round(((candidate - costOfGoods) / candidate) * 1000) / 10;

    return {
      targetPrice: candidate,
      marginPercent,
      mapCompliant: candidate >= rule.mapPrice
    };
  }
}
