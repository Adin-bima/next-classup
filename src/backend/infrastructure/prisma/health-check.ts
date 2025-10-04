import { UnitOfWork } from './UnitOfWork';

export interface HealthCheckResult {
  status: 'healthy' | 'unhealthy' | 'degraded';
  timestamp: Date;
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
  recommendations?: string[];
  warnings?: string[];
}

export class DatabaseHealthCheck {
  constructor(private readonly unitOfWork: UnitOfWork) {}

  public async performHealthCheck(): Promise<HealthCheckResult> {
    const startTime = Date.now();

    try {
      // Test basic connectivity
      const isConnected = await this.unitOfWork.forceHealthCheck();
      const responseTime = Date.now() - startTime;

      // Get connection statistics
      const stats = await this.unitOfWork.getDetailedConnectionStats();

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
        const errorRate = this.unitOfWork.getErrorRate();
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

      return {
        status,
        timestamp: new Date(),
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
            errorRate: this.unitOfWork.getErrorRate(),
            totalQueries: stats.totalQueries,
          },
        },
        warnings: warnings.length > 0 ? warnings : undefined,
        recommendations:
          recommendations.length > 0 ? recommendations : undefined,
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        timestamp: new Date(),
        database: {
          connected: false,
          responseTime: Date.now() - startTime,
          connectionPool: {
            active: 0,
            idle: 0,
            total: 0,
          },
          performance: {
            averageQueryTime: 0,
            errorRate: 100,
            totalQueries: 0,
          },
        },
        warnings: [
          `Health check failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        ],
      };
    }
  }

  public async getQuickHealthStatus(): Promise<
    'healthy' | 'unhealthy' | 'degraded'
  > {
    try {
      const isHealthy = await this.unitOfWork.forceHealthCheck();
      const averageQueryTime = this.unitOfWork.getAverageQueryTime();
      const errorRate = this.unitOfWork.getErrorRate();

      if (!isHealthy || errorRate > 5) {
        return 'unhealthy';
      }

      if (averageQueryTime > 2000 || errorRate > 1) {
        return 'degraded';
      }

      return 'healthy';
    } catch {
      return 'unhealthy';
    }
  }
}
