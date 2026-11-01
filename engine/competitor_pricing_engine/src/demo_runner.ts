import { PublicPricingScraper } from './public_pricing_scraper';
import { PriceChangeDetector } from './price_change_detector';
import { FeatureMatrixComparator } from './feature_matrix_comparator';
import { ExecutiveDigestSynthesizer } from './executive_digest_synthesizer';
import { PriceElasticityModeler } from './price_elasticity_modeler';

console.log('=== RUNNING COMPETITOR PRICE INTELLIGENCE ENGINE DEMO ===');

const snap = PublicPricingScraper.parseJsonLdOffers('{"name":"HealthPortal Pro","price":49,"priceCurrency":"USD"}', 'MedCloud SaaS', 'https://pricing.example.com');
console.log('Parsed Competitor Snapshot:', snap);

const diff = PriceChangeDetector.detectDiff('MedCloud SaaS', 'Pro Tier', 49, 59, 'USD');
console.log('Detected Price Diff:', diff);

const matrix = FeatureMatrixComparator.buildMatrix([{ name: 'MedCloud SaaS', plans: snap.plans }]);
console.log('Feature Matrix Rows:', matrix.length);

const percentiles = PriceElasticityModeler.calculatePercentiles([29, 49, 59, 79, 99, 149]);
console.log('Market Percentiles:', percentiles);

const repricing = PriceElasticityModeler.simulateDynamicRepricing([59, 79, 99], 20, {
  ruleId: 'RULE-01',
  targetSku: 'SKU-HEALTH-EHR',
  minGrossMarginPercent: 40,
  mapPrice: 39,
  strategy: 'UNDERCUT_1_PERCENT'
});
console.log('Dynamic Repricing Simulation:', repricing);

const digest = ExecutiveDigestSynthesizer.generateMonthlyDigest('November 2026', [diff], ['Self-serve $39/mo tier absent in market']);
console.log('Executive Digest Generated:', digest.digestId);

console.log('=== CORE ENGINE DEMO COMPLETED SUCCESSFULLY ===');
