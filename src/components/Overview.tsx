import { Activity, Users, Server, RefreshCw, Clock, CheckCircle2, TrendingUp, Crown, Shield, ChevronDown, Expand, X, Database, Zap, Timer, Download, Maximize2 } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';
import { useState, useEffect, useRef, useMemo } from 'react';
import { MetricCard } from './MetricCard';
import { ExportDropdown } from './ExportDropdown';

// Build: 2024-12-22T14:00:00Z - Overview Component - Redesigned

interface OverviewProps {
  onNavigate: (view: 'overview' | 'service' | 'consumer' | 'highUsageConsumers') => void;
  theme?: 'dark' | 'light';
}

// Premium card style helper
const getPremiumCardStyle = (theme: 'dark' | 'light') => {
  if (theme === 'light') {
    return {
      borderRadius: '14px',
      border: '4px solid #FFF',
      background: '#F8F8F8',
      boxShadow: '0 10px 15px -3px rgba(229, 231, 235, 0.50), 0 4px 6px -4px rgba(229, 231, 235, 0.50)'
    };
  }
  return {
    borderRadius: '12px',
    border: '1px solid rgba(6, 51, 96, 0.3)',
    background: 'linear-gradient(145deg, #1A1F2E 0%, #151926 100%)',
    boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(6, 51, 96, 0.15) inset'
  };
};

// Helper to get number of days from date range string
const getDaysFromRange = (range: string): number => {
  if (range === 'Last 7 Days') return 7;
  if (range === 'Last 30 Days') return 30;
  if (range === 'Last 90 Days') return 90;
  if (range === 'Last 6 Months') return 180;
  if (range === 'Last Year') return 365;
  return 30; // default
};

// Helper function to generate consumption over time data based on date range
const generateConsumptionData = (days: number) => {
  const data = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    let label;
    let shouldAdd = true;
    
    if (days <= 7) {
      // Show day names for 7 days
      label = date.toLocaleString('en-US', { weekday: 'short' });
    } else if (days <= 30) {
      // Show date for 30 days
      label = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
    } else if (days <= 90) {
      // Show date every 3 days for 90 days
      if (i % 3 === 0) {
        label = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
      } else {
        shouldAdd = false;
      }
    } else if (days <= 180) {
      // Show every week for 6 months
      if (i % 7 === 0) {
        label = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
      } else {
        shouldAdd = false;
      }
    } else {
      // Show monthly for year
      if (date.getDate() === 1 || i === days - 1) {
        label = date.toLocaleString('en-US', { month: 'short' });
      } else {
        shouldAdd = false;
      }
    }
    
    if (shouldAdd) {
      data.push({
        day: label,
        requests: Math.floor(120000 + Math.random() * 120000)
      });
    }
  }
  
  return data;
};

// Helper function to generate service usage trends data based on date range
const generateServiceTrendsData = (days: number) => {
  const data = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    let label;
    let shouldAdd = true;
    
    if (days <= 7) {
      label = date.toLocaleString('en-US', { weekday: 'short' });
    } else if (days <= 30) {
      label = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
    } else if (days <= 90) {
      if (i % 3 === 0) {
        label = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
      } else {
        shouldAdd = false;
      }
    } else if (days <= 180) {
      if (i % 7 === 0) {
        label = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
      } else {
        shouldAdd = false;
      }
    } else {
      if (date.getDate() === 1 || i === days - 1) {
        label = date.toLocaleString('en-US', { month: 'short' });
      } else {
        shouldAdd = false;
      }
    }
    
    if (shouldAdd) {
      data.push({
        day: label,
        Public: Math.floor(4000 + Math.random() * 2000),
        Secure: Math.floor(3000 + Math.random() * 2000),
        Restricted: Math.floor(1500 + Math.random() * 1000)
      });
    }
  }
  
  return data;
};

// Helper function to generate top consumed services for horizontal bar chart
const generateTopServices = () => {
  return [
    { service: 'WMS GetMap', value: 0.95 },
    { service: 'WFS GetFeature', value: 0.82 },
    { service: 'CSW GetRecords', value: 0.68 },
    { service: 'WCS GetCoverage', value: 0.54 },
    { service: 'WMTS GetTile', value: 1.0 },
  ];
};

export function Overview({ onNavigate, theme = 'dark' }: OverviewProps) {
  const [dateRange, setDateRange] = useState('Last 30 Days');
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [expandedChart, setExpandedChart] = useState<string | null>(null);
  const dateDropdownRef = useRef<HTMLDivElement>(null);

  // Dynamically generate data based on date range
  const consumptionData = useMemo(() => {
    return generateConsumptionData(getDaysFromRange(dateRange));
  }, [dateRange]);

  const serviceTrendsData = useMemo(() => {
    return generateServiceTrendsData(getDaysFromRange(dateRange));
  }, [dateRange]);

  const topServices = useMemo(() => generateTopServices(), []);

  // Calculate metrics based on date range
  const metrics = useMemo(() => {
    const days = getDaysFromRange(dateRange);
    const baseRequests = 2320000;
    const multiplier = days / 30; // Scale based on days
    const totalRequests = Math.floor(baseRequests * multiplier);
    
    return {
      totalRequests: totalRequests >= 1000000 
        ? `${(totalRequests / 1000000).toFixed(2)}M` 
        : `${Math.floor(totalRequests / 1000)}K`,
      avgResponseTime: Math.floor(120 + Math.random() * 20),
      successRate: (99 + Math.random() * 0.5).toFixed(1),
    };
  }, [dateRange]);

  // Handle click outside date dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dateDropdownRef.current && !dateDropdownRef.current.contains(event.target as Node)) {
        setShowDateDropdown(false);
      }
    };

    if (showDateDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDateDropdown]);

  const handleDateRangeSelect = (range: string) => {
    setDateRange(range);
    setShowDateDropdown(false);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Display metrics with formatted values
  const displayMetrics = useMemo(() => {
    return {
      totalRequests: parseInt(metrics.totalRequests.replace(/M|K/g, '')) * (metrics.totalRequests.includes('M') ? 1000000 : 1000),
      activeConsumers: 1247,
      activeServices: 24,
      errorRate: 2.1,
      uptime: '99.5%'
    };
  }, [metrics]);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl mb-2 font-bold">Overview</h1>
          <p className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
            Complete view of SDI service consumption and consumer engagement
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Date Range Selector */}
          <div className="relative" ref={dateDropdownRef}>
            <button
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#1A1F2E] to-[#151926] border-[rgba(6,51,96,0.4)] text-slate-300 hover:border-[#063360] hover:shadow-lg hover:shadow-[#063360]/20'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setShowDateDropdown(!showDateDropdown)}
            >
              <Clock className="w-4 h-4" />
              <span className="text-sm">{dateRange}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showDateDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {showDateDropdown && (
              <div
                className={`absolute z-[99999] mt-1 w-full min-w-[160px] rounded-lg border overflow-hidden shadow-xl ${ 
                  theme === 'dark' ? 'bg-gradient-to-br from-[#1A1F2E] to-[#151926] border-[rgba(6,51,96,0.4)] shadow-black/50' : 'bg-white border-gray-200 shadow-gray-300/50'
                }`}
              >
                <div
                  className={`px-4 py-2.5 cursor-pointer transition-colors ${
                    dateRange === 'Last 7 Days'
                      ? theme === 'dark'
                        ? 'bg-[#063360] text-white'
                        : 'bg-blue-50 text-blue-900'
                      : theme === 'dark'
                      ? 'hover:bg-slate-700/50 text-slate-300'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => handleDateRangeSelect('Last 7 Days')}
                >
                  Last 7 Days
                </div>
                <div
                  className={`px-4 py-2.5 cursor-pointer transition-colors ${
                    dateRange === 'Last 30 Days'
                      ? theme === 'dark'
                        ? 'bg-[#063360] text-white'
                        : 'bg-blue-50 text-blue-900'
                      : theme === 'dark'
                      ? 'hover:bg-slate-700/50 text-slate-300'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => handleDateRangeSelect('Last 30 Days')}
                >
                  Last 30 Days
                </div>
                <div
                  className={`px-4 py-2.5 cursor-pointer transition-colors ${
                    dateRange === 'Last 90 Days'
                      ? theme === 'dark'
                        ? 'bg-[#063360] text-white'
                        : 'bg-blue-50 text-blue-900'
                      : theme === 'dark'
                      ? 'hover:bg-slate-700/50 text-slate-300'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => handleDateRangeSelect('Last 90 Days')}
                >
                  Last 90 Days
                </div>
                <div
                  className={`px-4 py-2.5 cursor-pointer transition-colors ${
                    dateRange === 'Last 6 Months'
                      ? theme === 'dark'
                        ? 'bg-[#063360] text-white'
                        : 'bg-blue-50 text-blue-900'
                      : theme === 'dark'
                      ? 'hover:bg-slate-700/50 text-slate-300'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => handleDateRangeSelect('Last 6 Months')}
                >
                  Last 6 Months
                </div>
                <div
                  className={`px-4 py-2.5 cursor-pointer transition-colors ${
                    dateRange === 'Last Year'
                      ? theme === 'dark'
                        ? 'bg-[#063360] text-white'
                        : 'bg-blue-50 text-blue-900'
                      : theme === 'dark'
                      ? 'hover:bg-slate-700/50 text-slate-300'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => handleDateRangeSelect('Last Year')}
                >
                  Last Year
                </div>
              </div>
            )}
          </div>

          {/* Export Button */}
          <ExportDropdown theme={theme} />

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg border transition-all ${
              refreshing
                ? theme === 'dark'
                  ? 'bg-slate-800/50 border-slate-700/30 text-slate-500 cursor-not-allowed'
                  : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                : theme === 'dark'
                ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:text-slate-100'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            <span className="hidden md:inline text-sm">Refresh</span>
          </button>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <MetricCard
          title="Total SDI Services"
          value="24"
          icon={Database}
          trend={{ value: '3 new', positive: true }}
          gradient="from-blue-600 to-cyan-600"
          subtitle="Active services"
          theme={theme}
          borderColor="#048AC3"
        />
        
        <MetricCard
          title="Total API Requests"
          value={metrics.totalRequests}
          icon={Activity}
          trend={{ value: '16.5%', positive: true }}
          gradient="from-pink-600 to-rose-600"
          subtitle={dateRange}
          theme={theme}
          borderColor="#E9015A"
        />
        
        <MetricCard
          title="Total Consumers"
          value="1,247"
          icon={Users}
          trend={{ value: '12.3%', positive: true }}
          gradient="from-teal-600 to-emerald-600"
          subtitle="Active users"
          theme={theme}
          borderColor="#14B8A6"
        />
        
        <MetricCard
          title="Avg Response Time"
          value={`${metrics.avgResponseTime}ms`}
          icon={Timer}
          trend={{ value: '23ms', positive: true }}
          gradient="from-purple-600 to-indigo-600"
          subtitle="Improved"
          theme={theme}
          borderColor="#8B5CF6"
        />
        
        <MetricCard
          title="Success Rate"
          value={`${metrics.successRate}%`}
          icon={CheckCircle2}
          trend={{ value: '0.3%', positive: true }}
          gradient="from-emerald-600 to-green-600"
          subtitle="Uptime"
          theme={theme}
          borderColor="#10B981"
        />
      </div>

      {/* Bottom Section - Service Consumption & Top Services */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Service Consumption Over Time */}
        <div 
          style={getPremiumCardStyle(theme)}
          className="p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Service Consumption Over Time</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                API request trends - {dateRange}
              </p>
            </div>
            <button
              onClick={() => setExpandedChart('consumption')}
              className={`p-1.5 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
              }`}
              title="Expand chart"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={consumptionData}>
              <defs>
                <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                  {theme === 'dark' ? (
                    <>
                      <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8}/>
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#A855F7" stopOpacity={0.1}/>
                    </>
                  ) : (
                    <>
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </>
                  )}
                </linearGradient>
              </defs>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke={theme === 'dark' ? '#1e293b' : '#e5e7eb'}
                vertical={false}
              />
              <XAxis 
                dataKey="day" 
                stroke={theme === 'dark' ? '#475569' : '#6b7280'}
                tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 12 }}
              />
              <YAxis 
                stroke={theme === 'dark' ? '#475569' : '#6b7280'}
                tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                  border: theme === 'dark' ? '1px solid #334155' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: theme === 'dark' ? '#e2e8f0' : '#1f2937'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="requests" 
                stroke={theme === 'dark' ? '#8B5CF6' : '#3b82f6'}
                fill="url(#colorRequests)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Top Consumed Services */}
        <div 
          style={getPremiumCardStyle(theme)}
          className="p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Top Consumed Services</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Most requested SDI services
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topServices} layout="vertical">
              <defs>
                <linearGradient id="colorBar" x1="0" y1="0" x2="1" y2="0">
                  {theme === 'dark' ? (
                    <>
                      <stop offset="0%" stopColor="#60A5FA" stopOpacity={1}/>
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity={0.9}/>
                      <stop offset="100%" stopColor="#A855F7" stopOpacity={0.8}/>
                    </>
                  ) : (
                    <>
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.8}/>
                    </>
                  )}
                </linearGradient>
              </defs>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke={theme === 'dark' ? '#1e293b' : '#e5e7eb'}
                horizontal={false}
              />
              <XAxis 
                type="number"
                domain={[0, 1]}
                stroke={theme === 'dark' ? '#475569' : '#6b7280'}
                tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 12 }}
              />
              <YAxis 
                type="category"
                dataKey="service" 
                stroke={theme === 'dark' ? '#475569' : '#6b7280'}
                tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 12 }}
                width={120}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                  border: theme === 'dark' ? '1px solid #334155' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: theme === 'dark' ? '#e2e8f0' : '#1f2937'
                }}
              />
              <Bar 
                dataKey="value" 
                fill="url(#colorBar)" 
                radius={[0, 8, 8, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Service Usage Trends - Full Width */}
      <div 
        style={getPremiumCardStyle(theme)}
        className="p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Service Usage Trends</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              API request trends
            </p>
          </div>
          <button
            onClick={() => setExpandedChart('serviceTrends')}
            className={`p-1.5 rounded-lg transition-all ${
              theme === 'dark'
                ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
            }`}
            title="Expand chart"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={serviceTrendsData}>
            <defs>
              <linearGradient id="colorPublic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorSecure" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorRestricted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={theme === 'dark' ? '#1e293b' : '#e5e7eb'}
              vertical={false}
            />
            <XAxis 
              dataKey="day" 
              stroke={theme === 'dark' ? '#475569' : '#6b7280'}
              tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 12 }}
              axisLine={false}
            />
            <YAxis 
              stroke={theme === 'dark' ? '#475569' : '#6b7280'}
              tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 12 }}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                border: theme === 'dark' ? '1px solid #334155' : '1px solid #e5e7eb',
                borderRadius: '8px',
                color: theme === 'dark' ? '#e2e8f0' : '#1f2937',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="Public" 
              stackId="1"
              stroke="#3B82F6" 
              fill="url(#colorPublic)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="Secure" 
              stackId="1"
              stroke="#10B981" 
              fill="url(#colorSecure)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="Restricted" 
              stackId="1"
              stroke="#F59E0B" 
              fill="url(#colorRestricted)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Custom Legend */}
        <div className={`mt-6 p-4 rounded-lg ${
          theme === 'dark' ? 'bg-slate-800/50' : 'border border-gray-200'
        }`}>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
              <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Public</span>
              <span className={`text-sm font-bold ml-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>45%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
              <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Secure</span>
              <span className={`text-sm font-bold ml-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>35%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
              <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Restricted</span>
              <span className={`text-sm font-bold ml-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>20%</span>
            </div>
          </div>
        </div>
      </div>

      {/* New Section - Top Engaging Consumers & By Access Type */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Engaging Consumers */}
        <div 
          style={getPremiumCardStyle(theme)}
          className="p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold mb-1">
                Top Engaging Consumers
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Highest volume users ranked by activity
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Consumer 1 */}
            <div className={`flex items-center justify-between p-4 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-50'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  theme === 'dark' ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'
                }`}>
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="font-bold">Urban Planning Dept</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    342,000 requests
                  </p>
                </div>
              </div>
              <span className="font-bold text-emerald-500">+15.3%</span>
            </div>

            {/* Consumer 2 */}
            <div className={`flex items-center justify-between p-4 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-50'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  theme === 'dark' ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'
                }`}>
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="font-bold">Environmental Agency</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    298,000 requests
                  </p>
                </div>
              </div>
              <span className="font-bold text-emerald-500">+12.8%</span>
            </div>

            {/* Consumer 3 */}
            <div className={`flex items-center justify-between p-4 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-50'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  theme === 'dark' ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'
                }`}>
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <p className="font-bold">Transport Authority</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    267,000 requests
                  </p>
                </div>
              </div>
              <span className="font-bold text-emerald-500">+18.5%</span>
            </div>

            {/* Consumer 4 */}
            <div className={`flex items-center justify-between p-4 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-50'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  theme === 'dark' ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'
                }`}>
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <p className="font-bold">Public Works</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    223,000 requests
                  </p>
                </div>
              </div>
              <span className="font-bold text-emerald-500">+9.2%</span>
            </div>

            {/* Consumer 5 */}
            <div className={`flex items-center justify-between p-4 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-50'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  theme === 'dark' ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'
                }`}>
                  <span className="text-sm font-bold">5</span>
                </div>
                <div>
                  <p className="font-bold">Utilities Division</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    189,000 requests
                  </p>
                </div>
              </div>
              <span className="font-bold text-emerald-500">+11.7%</span>
            </div>
          </div>
        </div>

        {/* By Access Type */}
        <div 
          style={getPremiumCardStyle(theme)}
          className="p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold mb-1">By Access Type</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Service distribution across access levels
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Public', value: 54 },
                    { name: 'Secure', value: 32 },
                    { name: 'Restricted', value: 14 }
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  <Cell fill="#3B82F6" />
                  <Cell fill="#10B981" />
                  <Cell fill="#F59E0B" />
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                    border: theme === 'dark' ? '1px solid #334155' : '1px solid #e5e7eb',
                    borderRadius: '8px',
                    color: theme === 'dark' ? '#e2e8f0' : '#1f2937'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Custom Legend */}
          <div className={`mt-6 p-4 rounded-lg ${
            theme === 'dark' ? 'bg-slate-800/50' : 'bg-white border border-gray-200'
          }`}>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
                <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Public</span>
                <span className={`text-sm font-bold ml-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>54%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Secure</span>
                <span className={`text-sm font-bold ml-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>32%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Restricted</span>
                <span className={`text-sm font-bold ml-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>14%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Health Summary */}
      <div 
        style={getPremiumCardStyle(theme)}
        className="p-6"
      >
        <h3 className="text-xl font-bold mb-6">System Health Summary</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Data Transfer
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">2.4B</p>
              <span className="text-sm text-emerald-400">↑</span>
            </div>
          </div>

          <div>
            <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Total Errors
            </p>
            <p className="text-2xl font-bold">11,234</p>
          </div>

          <div>
            <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Total Success
            </p>
            <p className="text-2xl font-bold">2,836,358</p>
          </div>

          <div>
            <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Public/Private Sector
            </p>
            <p className="text-2xl font-bold">45 / 47</p>
          </div>
        </div>
      </div>

      {/* Expanded Chart Modal */}
      {expandedChart === 'serviceTrends' && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setExpandedChart(null)}
        >
          <div 
            className={`w-full max-w-6xl rounded-2xl border shadow-2xl p-8 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Service Usage Trends</h3>
                <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  API request trends - {dateRange}
                </p>
              </div>
              <button
                onClick={() => setExpandedChart(null)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Close
              </button>
            </div>

            <ResponsiveContainer width="100%" height={500}>
              <AreaChart data={serviceTrendsData}>
                <defs>
                  <linearGradient id="colorPublicExpanded" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorSecureExpanded" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorRestrictedExpanded" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke={theme === 'dark' ? '#1e293b' : '#e5e7eb'}
                  vertical={false}
                />
                <XAxis 
                  dataKey="day" 
                  stroke={theme === 'dark' ? '#475569' : '#6b7280'}
                  tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 12 }}
                  axisLine={false}
                />
                <YAxis 
                  stroke={theme === 'dark' ? '#475569' : '#6b7280'}
                  tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 12 }}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                    border: theme === 'dark' ? '1px solid #334155' : '1px solid #e5e7eb',
                    borderRadius: '8px',
                    color: theme === 'dark' ? '#e2e8f0' : '#1f2937',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="Public" 
                  stackId="1"
                  stroke="#3B82F6" 
                  fill="url(#colorPublicExpanded)" 
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="Secure" 
                  stackId="1"
                  stroke="#10B981" 
                  fill="url(#colorSecureExpanded)" 
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="Restricted" 
                  stackId="1"
                  stroke="#F59E0B" 
                  fill="url(#colorRestrictedExpanded)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>

            {/* Custom Legend */}
            <div className={`mt-6 p-4 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800/50' : 'border border-gray-200'
            }`}>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
                  <span className="text-xs text-[#364153]">Public</span>
                  <span className="text-sm font-bold text-[#364153] ml-1">45%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                  <span className="text-xs text-[#364153]">Secure</span>
                  <span className="text-sm font-bold text-[#364153] ml-1">35%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                  <span className="text-xs text-[#364153]">Restricted</span>
                  <span className="text-sm font-bold text-[#364153] ml-1">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Consumption Chart Modal */}
      {expandedChart === 'consumption' && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setExpandedChart(null)}
        >
          <div 
            className={`w-full max-w-6xl rounded-2xl border shadow-2xl p-8 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Service Consumption Over Time</h3>
                <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  API request trends - {dateRange}
                </p>
              </div>
              <button
                onClick={() => setExpandedChart(null)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Close
              </button>
            </div>

            <ResponsiveContainer width="100%" height={500}>
              <AreaChart data={consumptionData}>
                <defs>
                  <linearGradient id="colorRequestsExpanded" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke={theme === 'dark' ? '#1e293b' : '#e5e7eb'}
                  vertical={false}
                />
                <XAxis 
                  dataKey="day" 
                  stroke={theme === 'dark' ? '#475569' : '#6b7280'}
                  tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 12 }}
                  axisLine={false}
                />
                <YAxis 
                  stroke={theme === 'dark' ? '#475569' : '#6b7280'}
                  tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280', fontSize: 12 }}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                    border: theme === 'dark' ? '1px solid #334155' : '1px solid #e5e7eb',
                    borderRadius: '8px',
                    color: theme === 'dark' ? '#e2e8f0' : '#1f2937',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="requests" 
                  stroke="#3b82f6" 
                  fill="url(#colorRequestsExpanded)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}