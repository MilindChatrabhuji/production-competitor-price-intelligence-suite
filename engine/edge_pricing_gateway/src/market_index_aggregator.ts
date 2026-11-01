export interface CompetitorAlertPayload {
  competitorId: string;
  competitorName: string;
  changeType: 'PRICE_HIKE' | 'PRICE_DROP' | 'TIER_REMOVED' | 'NEW_PLAN';
  details: string;
  channel: 'SLACK' | 'DISCORD' | 'EMAIL';
  timestamp: string;
}

export class CompetitorTelemetryAggregator {
  public static dispatchAlert(alert: CompetitorAlertPayload): { success: boolean; dispatchedAt: string } {
    return {
      success: true,
      dispatchedAt: new Date().toISOString()
    };
  }
}

export const MarketIndexAggregator = CompetitorTelemetryAggregator;
