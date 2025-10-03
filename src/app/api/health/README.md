# Health Check API Endpoints

This directory contains Next.js API routes for monitoring the health and performance of your application.

## 🚀 Available Endpoints

### 1. Basic Health Check

**GET** `/api/health`

Returns basic health status of the application.

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600000,
  "message": "Service is healthy"
}
```

**Status Codes:**

- `200` - Service is healthy
- `503` - Service is unhealthy

---

### 2. Detailed Health Check

**GET** `/api/health/detailed`

Returns comprehensive health information including database, system metrics, and recommendations.

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600000,
  "database": {
    "connected": true,
    "responseTime": 45,
    "connectionPool": {
      "active": 5,
      "idle": 3,
      "total": 8
    },
    "performance": {
      "averageQueryTime": 125.5,
      "errorRate": 0.1,
      "totalQueries": 1250
    }
  },
  "system": {
    "memory": {
      "used": 256,
      "total": 512,
      "percentage": 50
    },
    "nodeVersion": "v18.17.0",
    "platform": "linux"
  },
  "warnings": [],
  "recommendations": []
}
```

**Status Codes:**

- `200` - Service is healthy or degraded
- `503` - Service is unhealthy

---

### 3. Database Health Check

**GET** `/api/health/database`

Returns database-specific health information.

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "database": {
    "connected": true,
    "responseTime": 45,
    "connectionPool": {
      "active": 5,
      "idle": 3,
      "total": 8
    },
    "performance": {
      "averageQueryTime": 125.5,
      "errorRate": 0.1,
      "totalQueries": 1250
    }
  }
}
```

---

### 4. Performance Metrics

**GET** `/api/health/metrics`

Returns detailed performance metrics for monitoring and analysis.

**Response:**

```json
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600000,
  "database": {
    "connectionPool": {
      "active": 5,
      "idle": 3,
      "total": 8,
      "utilization": 62.5
    },
    "performance": {
      "averageQueryTime": 125.5,
      "errorRate": 0.1,
      "totalQueries": 1250,
      "slowQueries": 5
    }
  },
  "system": {
    "memory": {
      "used": 256,
      "total": 512,
      "percentage": 50
    },
    "nodeVersion": "v18.17.0",
    "platform": "linux"
  }
}
```

## 🎯 Health Status Values

### Status Types

- **`healthy`** - All systems operating normally
- **`degraded`** - Some performance issues detected, but service is functional
- **`unhealthy`** - Critical issues detected, service may not be fully functional

### Health Indicators

#### Database Health

- **Connection Status**: Whether database is reachable
- **Response Time**: Time to execute a simple query (should be < 1000ms)
- **Connection Pool**: Active, idle, and total connections
- **Query Performance**: Average query time (should be < 1000ms)
- **Error Rate**: Percentage of failed queries (should be < 1%)

#### System Health

- **Memory Usage**: Current memory consumption
- **Memory Percentage**: Percentage of available memory used (should be < 90%)
- **Uptime**: How long the service has been running
- **Platform Info**: Node.js version and operating system

## 🔧 Usage Examples

### cURL Examples

```bash
# Basic health check
curl http://localhost:3000/api/health

# Detailed health check
curl http://localhost:3000/api/health/detailed

# Database health only
curl http://localhost:3000/api/health/database

# Performance metrics
curl http://localhost:3000/api/health/metrics
```

### JavaScript/TypeScript Examples

```typescript
// Basic health check
const healthResponse = await fetch('/api/health');
const healthData = await healthResponse.json();

if (healthData.status === 'healthy') {
  console.log('Service is running normally');
} else {
  console.warn('Service has issues:', healthData.message);
}

// Detailed health check with error handling
try {
  const response = await fetch('/api/health/detailed');
  const data = await response.json();

  if (data.warnings && data.warnings.length > 0) {
    console.warn('Warnings:', data.warnings);
  }

  if (data.recommendations && data.recommendations.length > 0) {
    console.info('Recommendations:', data.recommendations);
  }
} catch (error) {
  console.error('Health check failed:', error);
}
```

### React Component Usage

```tsx
import HealthStatusWidget from '@/components/HealthStatusWidget';

// Simple health indicator
<HealthStatusWidget />

// Detailed health widget with auto-refresh
<HealthStatusWidget
  showDetails={true}
  refreshInterval={30000} // Refresh every 30 seconds
  className="mb-4"
/>
```

## 📊 Monitoring Integration

### Load Balancer Health Checks

Use the basic health endpoint for load balancer health checks:

```bash
# Nginx upstream health check
upstream backend {
    server app1:3000;
    server app2:3000;
}

# Health check configuration
location /health {
    proxy_pass http://backend/api/health;
    proxy_set_header Host $host;
}
```

### Kubernetes Health Checks

```yaml
apiVersion: v1
kind: Pod
spec:
  containers:
    - name: app
      livenessProbe:
        httpGet:
          path: /api/health
          port: 3000
        initialDelaySeconds: 30
        periodSeconds: 10
      readinessProbe:
        httpGet:
          path: /api/health
          port: 3000
        initialDelaySeconds: 5
        periodSeconds: 5
```

### Monitoring Tools

- **Prometheus**: Scrape `/api/health/metrics` for metrics
- **Grafana**: Create dashboards using the health data
- **Datadog**: Use the endpoints for custom health checks
- **New Relic**: Monitor application health via these endpoints

## 🚨 Alerting Thresholds

### Warning Thresholds

- Database response time > 1000ms
- Average query time > 1000ms
- Error rate > 1%
- Memory usage > 80%
- Connection pool utilization > 80%

### Critical Thresholds

- Database response time > 5000ms
- Error rate > 5%
- Memory usage > 90%
- Connection pool utilization > 90%
- Service status = 'unhealthy'

## 🔒 Security Considerations

- Health endpoints are public by default
- Consider adding authentication for detailed metrics in production
- Rate limiting may be needed for high-frequency monitoring
- Sensitive system information is included in detailed responses

## 🎯 Best Practices

1. **Use Basic Health for Load Balancers**: Simple, fast response
2. **Use Detailed Health for Monitoring**: Comprehensive metrics
3. **Monitor Trends**: Track metrics over time, not just current values
4. **Set Up Alerting**: Configure alerts based on health status
5. **Regular Testing**: Test health endpoints during deployments
6. **Documentation**: Keep health check documentation updated

## 🛠️ Troubleshooting

### Common Issues

1. **503 Service Unavailable**
   - Check database connection
   - Verify UnitOfWork is properly initialized
   - Check for memory issues

2. **Slow Response Times**
   - Check database performance
   - Monitor connection pool utilization
   - Review query performance

3. **High Error Rates**
   - Check database connectivity
   - Review application logs
   - Verify database schema

### Debug Commands

```bash
# Check if UnitOfWork is initialized
curl http://localhost:3000/api/health/detailed | jq '.database.connected'

# Monitor memory usage
curl http://localhost:3000/api/health/metrics | jq '.system.memory'

# Check connection pool
curl http://localhost:3000/api/health/database | jq '.database.connectionPool'
```
