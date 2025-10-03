/* eslint-disable no-nested-ternary */
import { NextResponse } from 'next/server';

import { UnitOfWorkManager } from '@/backend/infrastructure/helper/UnitOfWorkManager';

export interface HealthCheckResponse {
  status: 'healthy' | 'unhealthy' | 'degraded';
  timestamp: string;
  uptime: number;
  database: {
    connected: boolean;
    responseTime: number;
    connectionPool: {
      active: number;
      idle: number;
      total: number;
    };
    performance: {
      averageQueryTime: number;
      errorRate: number;
      totalQueries: number;
    };
  };
  system: {
    memory: {
      used: number;
      total: number;
      percentage: number;
    };
    nodeVersion: string;
    platform: string;
  };
  recommendations?: string[];
  warnings?: string[];
}

export class HealthController {
  private static startTime = Date.now();

  /**
   * Basic health check endpoint
   * GET /api/health
   */
  public static async getBasicHealth(): Promise<NextResponse> {
    try {
      const unitOfWork = UnitOfWorkManager.getInstance();
      const isHealthy = unitOfWork.isHealthy();

      const status = isHealthy ? 'healthy' : 'unhealthy';
      const httpStatus = isHealthy ? 200 : 503;

      return NextResponse.json(
        {
          status,
          timestamp: new Date().toISOString(),
          uptime: Date.now() - this.startTime,
          message: isHealthy ? 'Service is healthy' : 'Service is unhealthy',
        },
        { status: httpStatus }
      );
    } catch (error) {
      return NextResponse.json(
        {
          status: 'unhealthy',
          timestamp: new Date().toISOString(),
          uptime: Date.now() - this.startTime,
          message: 'Health check failed',
          error: error instanceof Error ? error.message : 'Unknown error',
        },
        { status: 503 }
      );
    }
  }

  /**
   * Detailed health check endpoint
   * GET /api/health/detailed
   */
  public static async getDetailedHealth(): Promise<NextResponse> {
    try {
      const unitOfWork = UnitOfWorkManager.getInstance();
      const startTime = Date.now();

      // Test basic connectivity
      const isConnected = await unitOfWork.forceHealthCheck();
      const responseTime = Date.now() - startTime;

      // Get connection statistics
      const stats = await unitOfWork.getDetailedConnectionStats();

      // Get system information
      const systemInfo = this.getSystemInfo();

      // Determine health status
      let status: 'healthy' | 'unhealthy' | 'degraded' = 'healthy';
      const warnings: string[] = [];
      const recommendations: string[] = [];

      // Check response time
      if (responseTime > 5000) {
        status = 'degraded';
        warnings.push('Database response time is slow');
      }

      // Check error rate
      if (stats.errorCount > 0) {
        const errorRate = unitOfWork.getErrorRate();
        if (errorRate > 5) {
          status = 'unhealthy';
          warnings.push('High error rate detected');
        } else if (errorRate > 1) {
          status = 'degraded';
          warnings.push('Elevated error rate');
        }
      }

      // Check query performance
      if (stats.averageQueryTime > 2000) {
        status = 'degraded';
        warnings.push('Average query time is high');
      }

      // Check connection utilization
      if (stats.connectionUtilization > 90) {
        status = 'degraded';
        warnings.push('High connection pool utilization');
        recommendations.push('Consider increasing connection pool size');
      }

      if (!isConnected) {
        status = 'unhealthy';
        warnings.push('Database connection failed');
      }

      // Check memory usage
      if (systemInfo.memory.percentage > 90) {
        status = 'degraded';
        warnings.push('High memory usage detected');
        recommendations.push('Consider restarting the application');
      }

      const response: HealthCheckResponse = {
        status,
        timestamp: new Date().toISOString(),
        uptime: Date.now() - this.startTime,
        database: {
          connected: isConnected,
          responseTime,
          connectionPool: {
            active: stats.activeConnections,
            idle: stats.idleConnections,
            total: stats.totalConnections,
          },
          performance: {
            averageQueryTime: stats.averageQueryTime,
            errorRate: unitOfWork.getErrorRate(),
            totalQueries: stats.totalQueries,
          },
        },
        system: systemInfo,
        warnings: warnings.length > 0 ? warnings : undefined,
        recommendations:
          recommendations.length > 0 ? recommendations : undefined,
      };

      const httpStatus =
        status === 'healthy' ? 200 : status === 'degraded' ? 200 : 503;

      return NextResponse.json(response, { status: httpStatus });
    } catch (error) {
      return NextResponse.json(
        {
          status: 'unhealthy',
          timestamp: new Date().toISOString(),
          uptime: Date.now() - this.startTime,
          message: 'Detailed health check failed',
          error: error instanceof Error ? error.message : 'Unknown error',
        },
        { status: 503 }
      );
    }
  }

  /**
   * Database-only health check
   * GET /api/health/database
   */
  public static async getDatabaseHealth(): Promise<NextResponse> {
    try {
      const unitOfWork = UnitOfWorkManager.getInstance();
      const startTime = Date.now();

      const isConnected = await unitOfWork.forceHealthCheck();
      const responseTime = Date.now() - startTime;
      const stats = unitOfWork.getConnectionStats();

      const response = {
        status: isConnected ? 'healthy' : 'unhealthy',
        timestamp: new Date().toISOString(),
        database: {
          connected: isConnected,
          responseTime,
          connectionPool: {
            active: stats.activeConnections,
            idle: stats.idleConnections,
            total: stats.totalConnections,
          },
          performance: {
            averageQueryTime: stats.averageQueryTime,
            errorRate: unitOfWork.getErrorRate(),
            totalQueries: stats.totalQueries,
          },
        },
      };

      const httpStatus = isConnected ? 200 : 503;

      return NextResponse.json(response, { status: httpStatus });
    } catch (error) {
      return NextResponse.json(
        {
          status: 'unhealthy',
          timestamp: new Date().toISOString(),
          message: 'Database health check failed',
          error: error instanceof Error ? error.message : 'Unknown error',
        },
        { status: 503 }
      );
    }
  }

  /**
   * Performance metrics endpoint
   * GET /api/health/metrics
   */
  public static async getPerformanceMetrics(): Promise<NextResponse> {
    try {
      const unitOfWork = UnitOfWorkManager.getInstance();
      const stats = await unitOfWork.getDetailedConnectionStats();
      const systemInfo = this.getSystemInfo();

      const response = {
        timestamp: new Date().toISOString(),
        uptime: Date.now() - this.startTime,
        database: {
          connectionPool: {
            active: stats.activeConnections,
            idle: stats.idleConnections,
            total: stats.totalConnections,
            utilization: stats.connectionUtilization,
          },
          performance: {
            averageQueryTime: stats.averageQueryTime,
            errorRate: unitOfWork.getErrorRate(),
            totalQueries: stats.totalQueries,
            slowQueries: stats.slowQueries,
          },
        },
        system: systemInfo,
      };

      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        {
          timestamp: new Date().toISOString(),
          message: 'Failed to get performance metrics',
          error: error instanceof Error ? error.message : 'Unknown error',
        },
        { status: 500 }
      );
    }
  }

  /**
   * Get system information
   */
  private static getSystemInfo() {
    const memUsage = process.memoryUsage();
    const totalMemory = memUsage.heapTotal + memUsage.external;
    const usedMemory = memUsage.heapUsed + memUsage.external;

    return {
      memory: {
        used: Math.round(usedMemory / 1024 / 1024), // MB
        total: Math.round(totalMemory / 1024 / 1024), // MB
        percentage: Math.round((usedMemory / totalMemory) * 100),
      },
      nodeVersion: process.version,
      platform: process.platform,
    };
  }
}
