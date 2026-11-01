import { FeatureMatrixRow, PricingPlan } from './types';

export class FeatureMatrixComparator {
  public static buildMatrix(competitors: { name: string; plans: PricingPlan[] }[]): FeatureMatrixRow[] {
    const featureSet = new Set<string>();

    competitors.forEach(c => {
      c.plans.forEach(p => {
        p.features.forEach(f => featureSet.add(f));
      });
    });

    const rows: FeatureMatrixRow[] = [];

    featureSet.forEach(feat => {
      const supportMap: Record<string, boolean | string> = {};
      competitors.forEach(c => {
        const hasFeature = c.plans.some(p => p.features.includes(feat));
        supportMap[c.name] = hasFeature;
      });

      rows.push({
        featureName: feat,
        category: 'Core Platform',
        competitorSupport: supportMap
      });
    });

    return rows;
  }
}
