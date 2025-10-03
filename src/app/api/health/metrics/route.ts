import { NextRequest } from 'next/server';

import { HealthController } from '@/backend/application/controllers/HealthController';

/**
 * Performance Metrics Endpoint
 * GET /api/health/metrics
 *
 * Returns detailed performance metrics:
 * - Connection pool utilization
 * - Query performance statistics
 * - System resource usage
 * - Memory consumption
 * - Slow query counts
 */
export async function GET(request: NextRequest) {
  return HealthController.getPerformanceMetrics();
}
