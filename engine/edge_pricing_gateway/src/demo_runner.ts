import { CompetitorTelemetryAggregator } from './competitor_telemetry_aggregator';

console.log('=== RUNNING EDGE PRICING GATEWAY DEMO ===');
const res = CompetitorTelemetryAggregator.dispatchAlert({
  competitorId: 'medcloud-saas',
  competitorName: 'MedCloud Health SaaS',
  changeType: 'PRICE_HIKE',
  details: 'Pro tier increased from $49 to $59/mo (+20.4%)',
  channel: 'SLACK',
  timestamp: new Date().toISOString()
});
console.log('Alert dispatch result:', res);
console.log('=== EDGE GATEWAY DEMO COMPLETE ===');
