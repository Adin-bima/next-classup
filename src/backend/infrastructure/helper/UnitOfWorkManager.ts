import { UnitOfWork } from './UnitOfWork';
import defaultPrismaClient from '../prisma/prisma-client';

/**
 * Singleton manager for UnitOfWork instances
 * Ensures proper cleanup and prevents memory leaks
 */
export class UnitOfWorkManager {
  private static instance: UnitOfWork | null = null;
  private static isInitialized = false;

  /**
   * Get the singleton UnitOfWork instance
   */
  public static getInstance(): UnitOfWork {
    if (!this.instance) {
      this.instance = new UnitOfWork(defaultPrismaClient);
      this.isInitialized = true;

      // Set up graceful shutdown
      this.setupGracefulShutdown();
    }

    return this.instance;
  }

  /**
   * Check if UnitOfWork is initialized
   */
  public static getIsInitialized(): boolean {
    return this.isInitialized && this.instance !== null;
  }

  /**
   * Destroy the UnitOfWork instance and clean up resources
   */
  public static async destroy(): Promise<void> {
    if (this.instance) {
      await this.instance.destroy();
      this.instance = null;
      this.isInitialized = false;
    }
  }

  /**
   * Set up graceful shutdown handlers
   */
  private static setupGracefulShutdown(): void {
    // Handle process termination
    const gracefulShutdown = async (signal: string) => {
      console.log(`Received ${signal}, shutting down gracefully...`);
      await this.destroy();
      process.exit(0);
    };

    // Handle different termination signals
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGQUIT', () => gracefulShutdown('SIGQUIT'));

    // Handle uncaught exceptions
    process.on('uncaughtException', async (error) => {
      console.error('Uncaught Exception:', error);
      await this.destroy();
      process.exit(1);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', async (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
      await this.destroy();
      process.exit(1);
    });

    // Handle process exit
    process.on('beforeExit', async () => {
      await this.destroy();
    });
  }

  /**
   * Create a new UnitOfWork instance (for testing or special cases)
   * Note: This bypasses the singleton pattern
   */
  public static createInstance(): UnitOfWork {
    return new UnitOfWork(defaultPrismaClient);
  }
}
