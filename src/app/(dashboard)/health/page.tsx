/* eslint-disable no-nested-ternary */

'use client';

import { useState, useEffect } from 'react';

import { HealthCheckResponse } from '@/backend/presentation/controllers/HealthController';

interface BasicHealthResponse {
  status: 'healthy' | 'unhealthy' | 'degraded';
  timestamp: string;
  uptime: number;
  message: string;
}

export default function HealthDashboard() {
  const [basicHealth, setBasicHealth] = useState<BasicHealthResponse | null>(
    null
  );
  const [detailedHealth, setDetailedHealth] =
    useState<HealthCheckResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHealthData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch basic health
      const basicResponse = await fetch('/api/health');
      const basicData = await basicResponse.json();
      setBasicHealth(basicData);

      // Fetch detailed health
      const detailedResponse = await fetch('/api/health/detailed');
      const detailedData = await detailedResponse.json();
      setDetailedHealth(detailedData);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch health data'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthData();

    // Refresh every 30 seconds
    const interval = setInterval(fetchHealthData, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'unhealthy':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const formatUptime = (uptime: number) => {
    const seconds = Math.floor(uptime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
                  <div className="h-8 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-800 mb-2">
              Error Loading Health Data
            </h2>
            <p className="text-red-600">{error}</p>
            <button
              type="button"
              onClick={fetchHealthData}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            System Health Dashboard
          </h1>
          <button
            type="button"
            onClick={fetchHealthData}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>

        {/* Basic Health Status */}
        {basicHealth && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Overall Status
              </h3>
              <div
                className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(basicHealth.status)}`}
              >
                {basicHealth.status.toUpperCase()}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Uptime
              </h3>
              <p className="text-2xl font-bold text-gray-900">
                {formatUptime(basicHealth.uptime)}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Last Check
              </h3>
              <p className="text-sm text-gray-600">
                {new Date(basicHealth.timestamp).toLocaleString()}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Message
              </h3>
              <p className="text-sm text-gray-600">{basicHealth.message}</p>
            </div>
          </div>
        )}

        {/* Detailed Health Information */}
        {detailedHealth && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Database Health */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Database Health
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Connection Status</span>
                  <span
                    className={`px-2 py-1 rounded text-sm ${detailedHealth.database.connected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {detailedHealth.database.connected
                      ? 'Connected'
                      : 'Disconnected'}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-medium">
                    {detailedHealth.database.responseTime}ms
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Connections</span>
                  <span className="font-medium">
                    {detailedHealth.database.connectionPool.active}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Connections</span>
                  <span className="font-medium">
                    {detailedHealth.database.connectionPool.total}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Query Time</span>
                  <span className="font-medium">
                    {detailedHealth.database.performance.averageQueryTime.toFixed(
                      2
                    )}
                    ms
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Error Rate</span>
                  <span className="font-medium">
                    {detailedHealth.database.performance.errorRate.toFixed(2)}%
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Queries</span>
                  <span className="font-medium">
                    {detailedHealth.database.performance.totalQueries}
                  </span>
                </div>
              </div>
            </div>

            {/* System Health */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                System Health
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Memory Usage</span>
                  <span className="font-medium">
                    {detailedHealth.system.memory.used}MB /{' '}
                    {detailedHealth.system.memory.total}MB
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      detailedHealth.system.memory.percentage > 90
                        ? 'bg-red-500'
                        : detailedHealth.system.memory.percentage > 70
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                    }`}
                    style={{
                      width: `${detailedHealth.system.memory.percentage}%`,
                    }}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Memory Percentage</span>
                  <span className="font-medium">
                    {detailedHealth.system.memory.percentage}%
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Node Version</span>
                  <span className="font-medium">
                    {detailedHealth.system.nodeVersion}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Platform</span>
                  <span className="font-medium">
                    {detailedHealth.system.platform}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Warnings and Recommendations */}
        {(detailedHealth?.warnings?.length ||
          detailedHealth?.recommendations?.length) && (
          <div className="mt-8 space-y-4">
            {detailedHealth.warnings && detailedHealth.warnings.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  ⚠️ Warnings
                </h3>
                <ul className="space-y-2">
                  {detailedHealth.warnings.map((warning, index) => (
                    <li key={index} className="text-yellow-700">
                      • {warning}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {detailedHealth.recommendations &&
              detailedHealth.recommendations.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    💡 Recommendations
                  </h3>
                  <ul className="space-y-2">
                    {detailedHealth.recommendations.map(
                      (recommendation, index) => (
                        <li key={index} className="text-blue-700">
                          • {recommendation}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
}
