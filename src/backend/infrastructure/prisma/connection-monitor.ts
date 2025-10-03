/* eslint-disable max-classes-per-file */
import { PrismaClient } from '@prisma/client';

export interface ConnectionStats {
  activeConnections: number;
  idleConnections: number;
  totalConnections: number;
  connectionPoolSize: number;
  lastHealthCheck: Date;
  isHealthy: boolean;
  averageQueryTime: number;
  totalQueries: number;
  errorCount: number;
}

export class ConnectionMonitor {
  private stats: ConnectionStats = {
    activeConnections: 0,
    idleConnections: 0,
    totalConnections: 0,
    connectionPoolSize: 0,
    lastHealthCheck: new Date(),
    isHealthy: true,
    averageQueryTime: 0,
    totalQueries: 0,
    errorCount: 0,
  };

  private queryTimes: number[] = [];
  private readonly maxQueryTimeHistory = 100;
  private healthCheckInterval: NodeJS.Timeout | null = null;
  private destroyed = false;

  constructor(private readonly prismaClient: PrismaClient) {
    this.setupEventListeners();
    this.startHealthChecks();
  }

  private setupEventListeners(): void {
    // Monitor query performance
    (this.prismaClient as any).$on('query', (e: any) => {
      this.stats.totalQueries += 1;
      this.queryTimes.push(e.duration);

      // Keep only recent query times
      if (this.queryTimes.length > this.maxQueryTimeHistory) {
        this.queryTimes.shift();
      }

      // Calculate average query time
      this.stats.averageQueryTime =
        this.queryTimes.reduce((sum, time) => sum + time, 0) /
        this.queryTimes.length;
    });

    // Monitor errors
    (this.prismaClient as any).$on('error', () => {
      this.stats.errorCount += 1;
    });
  }

  private async startHealthChecks(): Promise<void> {
    // Initial health check
    await this.performHealthCheck();

    // Run health check every 30 seconds
    this.healthCheckInterval = setInterval(async () => {
      if (!this.destroyed) {
        await this.performHealthCheck();
      }
    }, 30000);
  }

  private async performHealthCheck(): Promise<void> {
    try {
      const startTime = Date.now();

      // Simple query to test connection
      await this.prismaClient.$queryRaw`SELECT 1`;

      const responseTime = Date.now() - startTime;

      this.stats.isHealthy = true;
      this.stats.lastHealthCheck = new Date();

      // Log slow health checks
      if (responseTime > 1000) {
        console.warn(`Slow health check: ${responseTime}ms`);
      }
    } catch (error) {
      this.stats.isHealthy = false;
      this.stats.errorCount += 1;
      console.error('Database health check failed:', error);
    }
  }

  public getStats(): ConnectionStats {
    return { ...this.stats };
  }

  public async getDetailedStats(): Promise<
    ConnectionStats & {
      slowQueries: number;
      connectionUtilization: number;
    }
  > {
    const slowQueries = this.queryTimes.filter((time) => time > 1000).length;
    const connectionUtilization =
      this.stats.totalConnections > 0
        ? (this.stats.activeConnections / this.stats.totalConnections) * 100
        : 0;

    return {
      ...this.stats,
      slowQueries,
      connectionUtilization,
    };
  }

  public isHealthy(): boolean {
    return this.stats.isHealthy;
  }

  public getAverageQueryTime(): number {
    return this.stats.averageQueryTime;
  }

  public getErrorRate(): number {
    return this.stats.totalQueries > 0
      ? (this.stats.errorCount / this.stats.totalQueries) * 100
      : 0;
  }

  // Force a health check
  public async forceHealthCheck(): Promise<boolean> {
    if (this.destroyed) {
      throw new Error('ConnectionMonitor has been destroyed');
    }
    await this.performHealthCheck();
    return this.stats.isHealthy;
  }

  /**
   * Clean up resources and stop health checks
   * Call this when the monitor is no longer needed
   */
  public destroy(): void {
    if (this.destroyed) {
      return; // Already destroyed
    }

    this.destroyed = true;

    // Clear the health check interval
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }

    // Clear query times array to free memory
    this.queryTimes.length = 0;

    console.log('ConnectionMonitor destroyed and resources cleaned up');
  }

  /**
   * Check if the monitor has been destroyed
   */
  public isDestroyed(): boolean {
    return this.destroyed;
  }
}

// Connection pool configuration recommendations
export class ConnectionPoolOptimizer {
  public static getRecommendedSettings(
    environment: 'development' | 'staging' | 'production',
    expectedConcurrency: number
  ): {
    maxConnections: number;
    connectionTimeout: number;
    queryTimeout: number;
    poolTimeout: number;
  } {
    const baseSettings = {
      development: {
        maxConnections: Math.min(10, expectedConcurrency + 2),
        connectionTimeout: 8000,
        queryTimeout: 20000,
        poolTimeout: 10000,
      },
      staging: {
        maxConnections: Math.min(30, expectedConcurrency * 1.5),
        connectionTimeout: 12000,
        queryTimeout: 45000,
        poolTimeout: 15000,
      },
      production: {
        maxConnections: Math.min(50, expectedConcurrency * 2),
        connectionTimeout: 15000,
        queryTimeout: 60000,
        poolTimeout: 20000,
      },
    };

    return baseSettings[environment];
  }

  public static analyzePerformance(stats: ConnectionStats): {
    recommendations: string[];
    warnings: string[];
  } {
    const recommendations: string[] = [];
    const warnings: string[] = [];

    // Connection utilization analysis
    const utilization =
      stats.totalConnections > 0
        ? (stats.activeConnections / stats.totalConnections) * 100
        : 0;

    if (utilization > 80) {
      warnings.push(
        'High connection utilization detected. Consider increasing pool size.'
      );
    }

    if (utilization < 20) {
      recommendations.push(
        'Low connection utilization. Consider reducing pool size to save resources.'
      );
    }

    // Query performance analysis
    if (stats.averageQueryTime > 1000) {
      warnings.push(
        'Average query time is high. Consider optimizing queries or adding indexes.'
      );
    }

    if (stats.averageQueryTime < 100) {
      recommendations.push('Query performance is excellent.');
    }

    // Error rate analysis
    const errorRate =
      stats.totalQueries > 0
        ? (stats.errorCount / stats.totalQueries) * 100
        : 0;

    if (errorRate > 1) {
      warnings.push(
        'High error rate detected. Check database connectivity and query syntax.'
      );
    }

    return { recommendations, warnings };
  }
}
