import { ExecutiveDigest, PriceDiffAlert } from './types';

export class ExecutiveDigestSynthesizer {
  public static generateMonthlyDigest(
    period: string,
    alerts: PriceDiffAlert[],
    whitespaceOpportunities: string[]
  ): ExecutiveDigest {
    const totalMoves = alerts.filter(a => a.changeType !== 'UNMODIFIED').length;
    const summary = `During ${period}, detected ${totalMoves} strategic competitor price movements. Market median pricing shifted with key competitors elevating entry-tier packaging.`;

    return {
      digestId: `DIGEST-${period.replace(/\s+/g, '-').toUpperCase()}-${Date.now()}`,
      period,
      generatedAt: new Date().toISOString(),
      marketSummary: summary,
      keyPriceMoves: alerts,
      whitespaceOpportunities
    };
  }
}
