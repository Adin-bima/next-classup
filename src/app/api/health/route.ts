import { NextRequest } from 'next/server';

import { HealthController } from '@/backend/presentation/controllers/HealthController';

/**
 * Basic Health Check Endpoint
 * GET /api/health
 * 
 * Returns basic health status of the application
 */
export async function GET(request: NextRequest) {
  return HealthController.getBasicHealth();
}
