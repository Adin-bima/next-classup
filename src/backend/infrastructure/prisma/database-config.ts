export interface DatabaseConfig {
  maxConnections: number;
  connectionTimeout: number;
  queryTimeout: number;
  poolTimeout: number;
  logLevel: 'query' | 'info' | 'warn' | 'error';
  enableQueryLogging: boolean;
  enableConnectionMonitoring: boolean;
  healthCheckInterval: number;
}

export class DatabaseConfigManager {
  public static getConfig(): DatabaseConfig {
    const env = process.env.NODE_ENV || 'development';

    // Get environment-specific settings
    const baseConfig = this.getEnvironmentConfig(env);

    // Override with environment variables if provided
    return {
      maxConnections: parseInt(
        process.env.DB_MAX_CONNECTIONS || baseConfig.maxConnections.toString(),
        10
      ),
      connectionTimeout: parseInt(
        process.env.DB_CONNECTION_TIMEOUT ||
          baseConfig.connectionTimeout.toString(),
        10
      ),
      queryTimeout: parseInt(
        process.env.DB_QUERY_TIMEOUT || baseConfig.queryTimeout.toString(),
        10
      ),
      poolTimeout: parseInt(
        process.env.DB_POOL_TIMEOUT || baseConfig.poolTimeout.toString(),
        10
      ),
      logLevel: (process.env.DB_LOG_LEVEL as any) || baseConfig.logLevel,
      enableQueryLogging:
        process.env.ENABLE_QUERY_LOGGING === 'true' ||
        baseConfig.enableQueryLogging,
      enableConnectionMonitoring:
        process.env.ENABLE_CONNECTION_MONITORING === 'true' ||
        baseConfig.enableConnectionMonitoring,
      healthCheckInterval: parseInt(
        process.env.HEALTH_CHECK_INTERVAL ||
          baseConfig.healthCheckInterval.toString(),
        10
      ),
    };
  }

  private static getEnvironmentConfig(env: string): DatabaseConfig {
    switch (env) {
      case 'production':
        return {
          maxConnections: 50,
          connectionTimeout: 15000,
          queryTimeout: 60000,
          poolTimeout: 20000,
          logLevel: 'error',
          enableQueryLogging: false,
          enableConnectionMonitoring: true,
          healthCheckInterval: 30000,
        };

      case 'staging':
        return {
          maxConnections: 30,
          connectionTimeout: 12000,
          queryTimeout: 45000,
          poolTimeout: 15000,
          logLevel: 'warn',
          enableQueryLogging: true,
          enableConnectionMonitoring: true,
          healthCheckInterval: 20000,
        };

      case 'test':
        return {
          maxConnections: 5,
          connectionTimeout: 5000,
          queryTimeout: 15000,
          poolTimeout: 10000,
          logLevel: 'error',
          enableQueryLogging: false,
          enableConnectionMonitoring: false,
          healthCheckInterval: 60000,
        };

      default: // development
        return {
          maxConnections: 10,
          connectionTimeout: 8000,
          queryTimeout: 20000,
          poolTimeout: 10000,
          logLevel: 'query',
          enableQueryLogging: true,
          enableConnectionMonitoring: true,
          healthCheckInterval: 15000,
        };
    }
  }

  public static getRecommendedConfig(
    expectedConcurrency: number,
    environment: 'development' | 'staging' | 'production' = 'development'
  ): DatabaseConfig {
    const baseConfig = this.getEnvironmentConfig(environment);

    // Adjust max connections based on expected concurrency
    const adjustedMaxConnections = Math.min(
      baseConfig.maxConnections,
      Math.max(5, expectedConcurrency * 1.5)
    );

    return {
      ...baseConfig,
      maxConnections: adjustedMaxConnections,
    };
  }

  public static validateConfig(config: DatabaseConfig): {
    isValid: boolean;
    errors: string[];
    warnings: string[];
  } {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Validate max connections
    if (config.maxConnections < 1) {
      errors.push('maxConnections must be at least 1');
    } else if (config.maxConnections > 100) {
      warnings.push(
        'maxConnections is very high, consider if this is necessary'
      );
    }

    // Validate timeouts
    if (config.connectionTimeout < 1000) {
      warnings.push(
        'connectionTimeout is very low, may cause connection failures'
      );
    }

    if (config.queryTimeout < 5000) {
      warnings.push('queryTimeout is very low, may cause query timeouts');
    }

    if (config.poolTimeout < 5000) {
      warnings.push('poolTimeout is very low, may cause pool exhaustion');
    }

    // Validate health check interval
    if (config.healthCheckInterval < 10000) {
      warnings.push(
        'healthCheckInterval is very frequent, may impact performance'
      );
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }
}
