import { NextRequest } from 'next/server';

import { HealthController } from '@/backend/application/controllers/HealthController';

/**
 * Detailed Health Check Endpoint
 * GET /api/health/detailed
 *
 * Returns comprehensive health information including:
 * - Database connection status and performance
 * - System memory usage
 * - Connection pool statistics
 * - Performance metrics
 * - Warnings and recommendations
 */
export async function GET(request: NextRequest) {
  return HealthController.getDetailedHealth();
}
