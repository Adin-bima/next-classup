import { PrismaClient } from '@prisma/client';

import { DatabaseConfigManager } from './database-config';

// Connection pooling configuration
const createPrismaClient = (config: {
  maxConnections: number;
  connectionTimeout: number;
  queryTimeout: number;
  poolTimeout: number;
  logLevel: 'query' | 'info' | 'warn' | 'error';
  enableQueryLogging: boolean;
}) => new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log: [
    { level: config.logLevel, emit: 'event' },
    { level: 'error', emit: 'stdout' },
    { level: 'warn', emit: 'stdout' },
  ],
});

// Get configuration and validate it
const config = DatabaseConfigManager.getConfig();
const validation = DatabaseConfigManager.validateConfig(config);

if (!validation.isValid) {
  console.error('Invalid database configuration:', validation.errors);
  throw new Error(`Database configuration validation failed: ${validation.errors.join(', ')}`);
}

if (validation.warnings.length > 0) {
  console.warn('Database configuration warnings:', validation.warnings);
}

// Create optimized Prisma client
const prismaClient = createPrismaClient(config);

// Connection health monitoring
prismaClient.$on('query', (e) => {
  if (config.enableQueryLogging && process.env.NODE_ENV === 'development') {
    console.log(`Query: ${e.query}`);
    console.log(`Params: ${e.params}`);
    console.log(`Duration: ${e.duration}ms`);
  }
});

prismaClient.$on('error', (e) => {
  console.error('Prisma Error:', e);
});

// Graceful shutdown
process.on('beforeExit', async () => {
  console.log('Disconnecting from database...');
  await prismaClient.$disconnect();
});

process.on('SIGINT', async () => {
  console.log('Received SIGINT, disconnecting from database...');
  await prismaClient.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Received SIGTERM, disconnecting from database...');
  await prismaClient.$disconnect();
  process.exit(0);
});

export default prismaClient;
