/* eslint-disable no-nested-ternary */

'use client';

import { useState, useEffect } from 'react';

interface HealthStatus {
  status: 'healthy' | 'unhealthy' | 'degraded';
  timestamp: string;
  uptime: number;
  message: string;
}

interface HealthStatusWidgetProps {
  className?: string;
  showDetails?: boolean;
  refreshInterval?: number; // in milliseconds
}

export default function HealthStatusWidget({
  className = '',
  showDetails = false,
  refreshInterval = 30000,
}: HealthStatusWidgetProps) {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHealth = async () => {
    try {
      setError(null);
      const response = await fetch('/api/health');
      const data = await response.json();
      setHealth(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Health check failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealth();

    if (refreshInterval > 0) {
      const interval = setInterval(fetchHealth, refreshInterval);
      return () => clearInterval(interval);
    }

    return () => {};
  }, [refreshInterval]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-600 bg-green-100 border-green-200';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'unhealthy':
        return 'text-red-600 bg-red-100 border-red-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return '🟢';
      case 'degraded':
        return '🟡';
      case 'unhealthy':
        return '🔴';
      default:
        return '⚪';
    }
  };

  const formatUptime = (uptime: number) => {
    const seconds = Math.floor(uptime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m`;
    return `${seconds}s`;
  };

  if (loading) {
    return (
      <div className={`p-4 bg-gray-50 rounded-lg border ${className}`}>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse" />
          <span className="text-sm text-gray-600">Checking health...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`p-4 bg-red-50 rounded-lg border border-red-200 ${className}`}
      >
        <div className="flex items-center space-x-2">
          <span className="text-red-600">🔴</span>
          <span className="text-sm text-red-600">Health check failed</span>
        </div>
        {showDetails && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    );
  }

  if (!health) {
    return (
      <div className={`p-4 bg-gray-50 rounded-lg border ${className}`}>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">⚪</span>
          <span className="text-sm text-gray-600">No health data</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-4 rounded-lg border ${getStatusColor(health.status)} ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{getStatusIcon(health.status)}</span>
          <div>
            <div className="text-sm font-medium">
              System{' '}
              {health.status === 'healthy'
                ? 'Healthy'
                : health.status === 'degraded'
                  ? 'Degraded'
                  : 'Unhealthy'}
            </div>
            {showDetails && (
              <div className="text-xs opacity-75">
                Uptime: {formatUptime(health.uptime)}
              </div>
            )}
          </div>
        </div>

        {showDetails && (
          <button
            type="button"
            onClick={fetchHealth}
            className="text-xs px-2 py-1 rounded hover:bg-white hover:bg-opacity-20 transition-colors"
            title="Refresh health status"
          >
            ↻
          </button>
        )}
      </div>

      {showDetails && (
        <div className="mt-2 text-xs opacity-75">
          <div>
            Last check: {new Date(health.timestamp).toLocaleTimeString()}
          </div>
          <div className="mt-1">{health.message}</div>
        </div>
      )}
    </div>
  );
}
