import { NextRequest } from 'next/server';

import { HealthController } from '@/backend/presentation/controllers/HealthController';

/**
 * Database Health Check Endpoint
 * GET /api/health/database
 *
 * Returns database-specific health information:
 * - Database connection status
 * - Connection pool statistics
 * - Query performance metrics
 * - Error rates
 */
export async function GET(request: NextRequest) {
  return HealthController.getDatabaseHealth();
}
