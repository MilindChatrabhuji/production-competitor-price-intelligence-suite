import { PriceDiffAlert, CurrencyCode } from './types';

export class PriceChangeDetector {
  private static FX_RATES: Record<CurrencyCode, number> = {
    USD: 1.0,
    EUR: 1.08,
    GBP: 1.27,
    INR: 0.012
  };

  public static normalizeToUsd(amount: number, currency: CurrencyCode): number {
    const rate = this.FX_RATES[currency] || 1.0;
    return Math.round(amount * rate * 100) / 100;
  }

  public static detectDiff(
    competitorName: string,
    planName: string,
    oldPrice: number,
    newPrice: number,
    currency: CurrencyCode = 'USD',
    alertThresholdPercent: number = 5.0
  ): PriceDiffAlert {
    const delta = newPrice - oldPrice;
    const pctChange = oldPrice === 0 ? 0 : Math.round((delta / oldPrice) * 1000) / 10;

    let changeType: PriceDiffAlert['changeType'] = 'UNMODIFIED';
    let severity: PriceDiffAlert['alertSeverity'] = 'LOW';

    if (pctChange >= alertThresholdPercent) {
      changeType = 'HIKE';
      severity = pctChange >= 20 ? 'HIGH' : 'MEDIUM';
    } else if (pctChange <= -alertThresholdPercent) {
      changeType = 'DROP';
      severity = pctChange <= -20 ? 'HIGH' : 'MEDIUM';
    }

    return {
      competitorName,
      planName,
      oldPrice,
      newPrice,
      currency,
      percentageChange: pctChange,
      changeType,
      alertSeverity: severity,
      timestamp: new Date().toISOString()
    };
  }
}

export const PriceAnomalyAlertGenerator = PriceChangeDetector;
