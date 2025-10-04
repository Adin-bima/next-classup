import { Prisma, PrismaClient } from '@prisma/client';

import { IUserRepo } from '@/backend/domain/repo/IUserRepo';

import defaultPrismaClient from './prisma-client';
import { ConnectionMonitor } from './connection-monitor';
import { UserPrismaRepo } from '../prisma-repo/UserPrismaRepo';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Repositories = {
  userRepo: IUserRepo;
};

function getRepositories(
  prismaClient: PrismaClient | Prisma.TransactionClient
): Repositories {
  return {
    userRepo: new UserPrismaRepo(prismaClient),
  };
}

export class UnitOfWork {
  private readonly mainRepositories: Repositories;
  private readonly connectionMonitor: ConnectionMonitor;
  private destroyed = false;

  constructor(
    private readonly prismaClient: PrismaClient = defaultPrismaClient
  ) {
    // Initialize connection monitoring
    this.connectionMonitor = new ConnectionMonitor(prismaClient);

    // TODO: Pre-instantiate repositories for better performance
    this.mainRepositories = getRepositories(prismaClient);
  }

  /**
   * Execute read-only operations without transactions
   * Optimized for performance with pre-instantiated repositories
   */
  async execute<T>(fn: (repositories: Repositories) => Promise<T>): Promise<T> {
    if (this.destroyed) {
      throw new Error('UnitOfWork has been destroyed');
    }
    return fn(this.mainRepositories);
  }

  /**
   * Execute write operations with transactions
   * Creates new repository instances within transaction context
   */
  async executeWrite<T>(
    fn: (repositories: Repositories) => Promise<T>
  ): Promise<T> {
    if (this.destroyed) {
      throw new Error('UnitOfWork has been destroyed');
    }
    return this.prismaClient.$transaction(async (txClient) => {
      const repositories: Repositories = getRepositories(txClient);

      return fn(repositories);
    });
  }

  /**
   * Execute multiple operations in a single transaction
   * Useful for complex business operations that span multiple entities
   */
  async executeTransaction<T>(
    fn: (repositories: Repositories) => Promise<T>
  ): Promise<T> {
    return this.executeWrite(fn);
  }

  /**
   * Get connection health status
   */
  public isHealthy(): boolean {
    if (this.destroyed) {
      throw new Error('UnitOfWork has been destroyed');
    }
    return this.connectionMonitor.isHealthy();
  }

  /**
   * Get connection statistics
   */
  public getConnectionStats() {
    if (this.destroyed) {
      throw new Error('UnitOfWork has been destroyed');
    }
    return this.connectionMonitor.getStats();
  }

  /**
   * Get detailed connection statistics
   */
  public async getDetailedConnectionStats() {
    if (this.destroyed) {
      throw new Error('UnitOfWork has been destroyed');
    }
    return this.connectionMonitor.getDetailedStats();
  }

  /**
   * Force a health check
   */
  public async forceHealthCheck(): Promise<boolean> {
    if (this.destroyed) {
      throw new Error('UnitOfWork has been destroyed');
    }
    return this.connectionMonitor.forceHealthCheck();
  }

  /**
   * Get average query time
   */
  public getAverageQueryTime(): number {
    if (this.destroyed) {
      throw new Error('UnitOfWork has been destroyed');
    }
    return this.connectionMonitor.getAverageQueryTime();
  }

  /**
   * Get error rate
   */
  public getErrorRate(): number {
    if (this.destroyed) {
      throw new Error('UnitOfWork has been destroyed');
    }
    return this.connectionMonitor.getErrorRate();
  }

  /**
   * Clean up resources and stop monitoring
   * Call this when the UnitOfWork is no longer needed
   */
  public async destroy(): Promise<void> {
    if (this.destroyed) {
      return; // Already destroyed
    }

    this.destroyed = true;

    // Destroy the connection monitor
    this.connectionMonitor.destroy();

    // Disconnect from the database
    await this.prismaClient.$disconnect();

    console.log('UnitOfWork destroyed and resources cleaned up');
  }

  /**
   * Check if the UnitOfWork has been destroyed
   */
  public isDestroyed(): boolean {
    return this.destroyed;
  }
}
