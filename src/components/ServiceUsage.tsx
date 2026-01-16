import { useState, useRef, useEffect } from 'react';
import { Activity, TrendingUp, AlertCircle, Zap, Calendar, Search, Download, RefreshCw, Clock, BarChart3, Database, ChevronDown, Maximize2, ChevronRight, Filter, Server, CheckCircle, XCircle, X } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { ExportDropdown } from './ExportDropdown';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Cell, PieChart, Pie } from 'recharts';
import React from 'react';
import svgPaths from '../imports/svg-stm1knywmd';
import { TrendAnalyticsContainer } from './TrendAnalyticsContainer';

// Helper function to generate date range data
const generateDateRangeData = (days: number, serviceName: string) => {
  const data = [];
  const today = new Date('2024-12-19');
  
  // Base values that vary by service
  const serviceMultiplier = serviceName === 'All' ? 1 : 0.7;
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const monthDay = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
    
    // Generate realistic varying request numbers
    const baseValue = 60000 + Math.random() * 40000;
    const requests = Math.floor(baseValue * serviceMultiplier);
    
    data.push({
      day: monthDay,
      requests: requests
    });
  }
  
  return data;
};

// Helper function to generate API usage data based on date range
const generateApiUsageData = (days: number, serviceName: string) => {
  const data = [];
  const today = new Date('2024-12-19');
  const serviceMultiplier = serviceName === 'All' ? 1 : 0.65;
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const monthDay = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
    
    const baseRequests = 40000 + Math.random() * 25000;
    const requests = Math.floor(baseRequests * serviceMultiplier);
    const success = Math.floor(requests * 0.9);
    const failure = requests - success;
    
    data.push({
      day: monthDay,
      requests: requests,
      success: success,
      failure: failure
    });
  }
  
  return data;
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

// Helper function to generate service request analysis data based on date range
const generateServiceRequestAnalysisData = (days: number) => {
  const multiplier = days / 30; // Base is 30 days
  
  return [
    { service: 'WMS GetMap', requests: Math.floor(45800 * multiplier), avgTime: 145, type: 'MapServer' },
    { service: 'WFS GetFeature', requests: Math.floor(38200 * multiplier), avgTime: 168, type: 'FeatureServer' },
    { service: 'CSW GetRecords', requests: Math.floor(29400 * multiplier), avgTime: 112, type: 'GeoDataServer' },
    { service: 'WCS GetCoverage', requests: Math.floor(22100 * multiplier), avgTime: 189, type: 'GeoProcessingServer' },
    { service: 'WMTS GetTile', requests: Math.floor(18700 * multiplier), avgTime: 98, type: 'WMSServer' },
    { service: 'WPS Execute', requests: Math.floor(12300 * multiplier), avgTime: 234, type: 'NetworkAnalysisServer' },
    { service: 'SOS GetObservation', requests: Math.floor(8900 * multiplier), avgTime: 156, type: 'ImageServer' },
  ];
};

// Operation Distribution Data
const operationDistributionData = [
  { operation: 'Query', value: 45 },
  { operation: 'Tile', value: 25 },
  { operation: 'Export', value: 20 },
  { operation: 'Geocode', value: 8 },
  { operation: 'Edit', value: 2 },
];

// Operation Metrics Data
const operationMetricsData = [
  { operation: 'Query', percentage: 45, requests: '5.6M', color: '#10b981' },
  { operation: 'Export', percentage: 20, requests: '2.5M', color: '#10b981' },
  { operation: 'Tile', percentage: 25, requests: '3.1M', color: '#10b981' },
  { operation: 'Geocode', percentage: 8, requests: '1.0M', color: '#10b981' },
  { operation: 'Edit', percentage: 2, requests: '250K', color: '#10b981' },
];

// Error Distribution (By category)
const errorDistributionData = [
  { name: 'Client Errors (4xx)', value: 612, color: '#f59e0b' },
  { name: 'Server Errors (5xx)', value: 267, color: '#ef4444' },
];

// Error Type Distribution Data (detailed)
const errorTypeDistributionData = [
  { name: '401 Unauthorized', value: 245, color: '#f59e0b' },
  { name: '404 Not Found', value: 187, color: '#fb923c' },
  { name: '403 Forbidden', value: 125, color: '#fdba74' },
  { name: '400 Bad Request', value: 55, color: '#fcd34d' },
  { name: '500 Internal Error', value: 156, color: '#ef4444' },
  { name: '503 Service Unavailable', value: 78, color: '#f87171' },
  { name: '502 Bad Gateway', value: 33, color: '#fca5a5' },
];

// Service Request and Analysis Data
const serviceRequestAnalysisData = [
  { service: 'WMS GetMap', requests: 45800, avgTime: 145, type: 'MapServer' },
  { service: 'WFS GetFeature', requests: 38200, avgTime: 168, type: 'FeatureServer' },
  { service: 'CSW GetRecords', requests: 29400, avgTime: 112, type: 'GeoDataServer' },
  { service: 'WCS GetCoverage', requests: 22100, avgTime: 189, type: 'GeoProcessingServer' },
  { service: 'WMTS GetTile', requests: 18700, avgTime: 98, type: 'WMSServer' },
  { service: 'WPS Execute', requests: 12300, avgTime: 234, type: 'NetworkAnalysisServer' },
  { service: 'SOS GetObservation', requests: 8900, avgTime: 156, type: 'ImageServer' },
];

// Service Type Usage Trend Data
const serviceTypeUsageTrendData = [
  { month: 'Jan', mapServer: 650, featureServer: 480, geoDataServer: 260, geoCodeServer: 210, geoProcessingServer: 320, networkAnalysisServer: 140, sceneServer: 180, vectorServer: 120, wmsServer: 290, versionManagementServer: 75, imageServer: 220, others: 120 },
  { month: 'Feb', mapServer: 720, featureServer: 530, geoDataServer: 290, geoCodeServer: 230, geoProcessingServer: 350, networkAnalysisServer: 155, sceneServer: 195, vectorServer: 135, wmsServer: 320, versionManagementServer: 85, imageServer: 245, others: 135 },
  { month: 'Mar', mapServer: 790, featureServer: 580, geoDataServer: 320, geoCodeServer: 255, geoProcessingServer: 385, networkAnalysisServer: 175, sceneServer: 210, vectorServer: 145, wmsServer: 350, versionManagementServer: 95, imageServer: 270, others: 150 },
  { month: 'Apr', mapServer: 850, featureServer: 620, geoDataServer: 340, geoCodeServer: 280, geoProcessingServer: 420, networkAnalysisServer: 180, sceneServer: 220, vectorServer: 150, wmsServer: 380, versionManagementServer: 95, imageServer: 290, others: 160 },
  { month: 'May', mapServer: 920, featureServer: 680, geoDataServer: 380, geoCodeServer: 310, geoProcessingServer: 460, networkAnalysisServer: 210, sceneServer: 250, vectorServer: 180, wmsServer: 420, versionManagementServer: 110, imageServer: 320, others: 180 },
  { month: 'Jun', mapServer: 1050, featureServer: 750, geoDataServer: 420, geoCodeServer: 350, geoProcessingServer: 510, networkAnalysisServer: 240, sceneServer: 280, vectorServer: 210, wmsServer: 470, versionManagementServer: 130, imageServer: 360, others: 210 },
  { month: 'Jul', mapServer: 1180, featureServer: 840, geoDataServer: 480, geoCodeServer: 390, geoProcessingServer: 570, networkAnalysisServer: 280, sceneServer: 320, vectorServer: 240, wmsServer: 530, versionManagementServer: 150, imageServer: 410, others: 240 },
  { month: 'Aug', mapServer: 1320, featureServer: 920, geoDataServer: 540, geoCodeServer: 430, geoProcessingServer: 630, networkAnalysisServer: 320, sceneServer: 360, vectorServer: 280, wmsServer: 590, versionManagementServer: 175, imageServer: 460, others: 280 },
  { month: 'Sep', mapServer: 1450, featureServer: 1000, geoDataServer: 600, geoCodeServer: 480, geoProcessingServer: 690, networkAnalysisServer: 360, sceneServer: 400, vectorServer: 320, wmsServer: 650, versionManagementServer: 200, imageServer: 510, others: 320 },
  { month: 'Oct', mapServer: 1380, featureServer: 950, geoDataServer: 570, geoCodeServer: 460, geoProcessingServer: 660, networkAnalysisServer: 340, sceneServer: 380, vectorServer: 305, wmsServer: 620, versionManagementServer: 190, imageServer: 490, others: 305 },
  { month: 'Nov', mapServer: 1280, featureServer: 890, geoDataServer: 530, geoCodeServer: 425, geoProcessingServer: 615, networkAnalysisServer: 315, sceneServer: 355, vectorServer: 285, wmsServer: 580, versionManagementServer: 180, imageServer: 455, others: 285 },
  { month: 'Dec', mapServer: 1350, featureServer: 930, geoDataServer: 555, geoCodeServer: 445, geoProcessingServer: 645, networkAnalysisServer: 330, sceneServer: 370, vectorServer: 298, wmsServer: 610, versionManagementServer: 188, imageServer: 478, others: 298 },
];

// Data Transferred Trend Data (GB per day)
const dataTransferredTrendData = [
  { date: 'Dec 14', transferred: 85, upload: 25, download: 60 },
  { date: 'Dec 15', transferred: 92, upload: 28, download: 64 },
  { date: 'Dec 16', transferred: 78, upload: 22, download: 56 },
  { date: 'Dec 17', transferred: 105, upload: 35, download: 70 },
  { date: 'Dec 18', transferred: 118, upload: 38, download: 80 },
  { date: 'Dec 19', transferred: 125, upload: 42, download: 83 },
];

// Service-Consumer Mapping (Top interactions)
const serviceConsumerMappingData = [
  { service: 'WMS GetMap', consumer: 'Urban Planning Dept', requests: 125000, avgResponse: 145, successRate: 99.2, access: 'Dec 15, 2024' },
  { service: 'WFS GetFeature', consumer: 'Environmental Agency', requests: 98000, avgResponse: 168, successRate: 98.7, access: 'Dec 17, 2024' },
  { service: 'WMS GetMap', consumer: 'Transport Authority', requests: 87000, avgResponse: 152, successRate: 99.5, access: 'Dec 18, 2024' },
  { service: 'CSW GetRecords', consumer: 'Public Works', requests: 76000, avgResponse: 112, successRate: 97.8, access: 'Dec 14, 2024' },
  { service: 'WCS GetCoverage', consumer: 'Utilities Division', requests: 65000, avgResponse: 189, successRate: 96.4, access: 'Dec 12, 2024' },
  { service: 'WFS GetFeature', consumer: 'Urban Planning Dept', requests: 58000, avgResponse: 173, successRate: 98.9, access: 'Dec 16, 2024' },
  { service: 'WMTS GetTile', consumer: 'Transport Authority', requests: 52000, avgResponse: 98, successRate: 99.7, access: 'Dec 18, 2024' },
  { service: 'CSW GetRecords', consumer: 'Environmental Agency', requests: 47000, avgResponse: 105, successRate: 98.2, access: 'Dec 17, 2024' },
];

// Service Registry Data
const serviceRegistryData = [
  { 
    name: 'Baseflow Imagery 2024', 
    type: 'MapServer', 
    accessType: 'Public', 
    criticality: 'Mission-Critical', 
    lifecycle: 'Active', 
    department: 'Abu Dhabi Geographic', 
    requests: '2.4M/month',
    dataSensitivity: 'Public',
    serviceOwner: 'GIS Operations Team',
    lastReview: 'Nov 15, 2024',
    businessPurpose: 'Provide high-resolution satellite imagery for urban planning and development projects'
  },
  { 
    name: 'Address Geocoder', 
    type: 'GeocodServer', 
    accessType: 'Public', 
    criticality: 'Mission-Critical', 
    lifecycle: 'Active', 
    department: 'Department of Municipality', 
    requests: '1.8M/month',
    dataSensitivity: 'Public',
    serviceOwner: 'Location Services Team',
    lastReview: 'Dec 1, 2024',
    businessPurpose: 'Convert addresses to geographic coordinates for mapping and location-based services'
  },
  { 
    name: 'LandParcel Registry', 
    type: 'FeatureServer', 
    accessType: 'Secure', 
    criticality: 'Mission-Critical', 
    lifecycle: 'Active', 
    department: 'Abu Dhabi Municipality', 
    requests: '956K/month',
    dataSensitivity: 'Confidential',
    serviceOwner: 'Property Management Division',
    lastReview: 'Oct 28, 2024',
    businessPurpose: 'Manage and distribute land parcel information for property transactions and planning'
  },
  { 
    name: 'Utility_Network_ADDC', 
    type: 'FeatureServer', 
    accessType: 'Restricted', 
    criticality: 'Mission-Critical', 
    lifecycle: 'Active', 
    department: 'Abu Dhabi Distribution Co', 
    requests: '745K/month',
    dataSensitivity: 'Restricted',
    serviceOwner: 'Network Operations Center',
    lastReview: 'Nov 22, 2024',
    businessPurpose: 'Monitor and manage electrical distribution network infrastructure across Abu Dhabi'
  },
  { 
    name: 'Legacy Zoning 2018', 
    type: 'MapServer', 
    accessType: 'Secure', 
    criticality: 'Non-Critical', 
    lifecycle: 'Deprecated', 
    department: 'Urban Planning', 
    requests: '126K/month',
    dataSensitivity: 'Internal',
    serviceOwner: 'Legacy Systems Team',
    lastReview: 'Sep 10, 2024',
    businessPurpose: 'Historical zoning data reference for comparison with current regulations'
  },
];

interface ServiceUsageProps {
  theme?: 'dark' | 'light';
  onViewAllServices?: () => void;
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

export function ServiceUsage({ theme = 'dark', onViewAllServices }: ServiceUsageProps) {
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  // Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [serviceName, setServiceName] = useState('All');
  const [dateRange, setDateRange] = useState('Last 30 Days');
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [serviceSearchQuery, setServiceSearchQuery] = useState('');
  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');
  
  // Applied filters (after submit)
  const [appliedServiceName, setAppliedServiceName] = useState('All');
  const [appliedDateRange, setAppliedDateRange] = useState('Last 30 Days');
  
  // Dynamic data based on filters
  const [requestsOverTimeData, setRequestsOverTimeData] = useState(() => generateDateRangeData(30, 'All'));
  const [apiUsageData, setApiUsageData] = useState(() => generateApiUsageData(30, 'All'));
  const [serviceRequestAnalysisData, setServiceRequestAnalysisData] = useState(() => generateServiceRequestAnalysisData(30));
  
  // Metric states
  const [metrics, setMetrics] = useState({
    totalRequests: '2.32M',
    avgResponseTime: '127ms',
    peakLoad: '98K/hr',
    errorRate: '0.8%',
    dataTransferred: '2.8TB',
    // New metrics
    totalSdiServices: '24',
    totalApiRequests: '2.32M',
    avgRequests: '64.2K',
    successRate: '99.2%',
    failureRate: '0.8%',
    peakLoadHour: '2-3 PM'
  });
  
  // Expand modal states
  const [expandedChart, setExpandedChart] = useState<'requests' | 'apiUsage' | 'serviceTypeTrend' | null>(null);
  
  // Expanded row state for service registry
  const [expandedServiceRow, setExpandedServiceRow] = useState<string | null>(null);
  
  // Service Type Usage Trend filter
  const [selectedServiceType, setSelectedServiceType] = useState('All Services');
  const [showServiceTypeDropdown, setShowServiceTypeDropdown] = useState(false);
  
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const dateDropdownRef = useRef<HTMLDivElement>(null);
  
  const serviceNames = [
    'All',
    'Citizen Identity Verification',
    'WMS GetMap',
    'WFS GetFeature',
    'CSW GetRecords',
    'WCS GetCoverage',
    'WMTS GetTile'
  ];
  
  const filteredServiceNames = serviceNames.filter(name =>
    name.toLowerCase().includes(serviceSearchQuery.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target as Node)) {
        setShowServiceDropdown(false);
      }
      if (dateDropdownRef.current && !dateDropdownRef.current.contains(event.target as Node)) {
        setShowDateDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Function to update metrics based on date range
  const updateMetrics = (days: number) => {
    const multiplier = days / 30;
    const totalReqs = Math.floor(2320000 * multiplier);
    const totalReqsDisplay = totalReqs >= 1000000 
      ? `${(totalReqs / 1000000).toFixed(2)}M` 
      : `${(totalReqs / 1000).toFixed(0)}K`;
    
    const avgReqs = Math.floor(64200 * multiplier);
    const avgReqsDisplay = avgReqs >= 1000000 
      ? `${(avgReqs / 1000000).toFixed(1)}M` 
      : `${(avgReqs / 1000).toFixed(1)}K`;
    
    const avgResp = 127;
    const peakLoad = Math.floor(98000 * multiplier);
    const peakLoadDisplay = `${(peakLoad / 1000).toFixed(0)}K/hr`;
    const errorRate = 0.8;
    const successRate = 99.2;
    const failureRate = 0.8;
    const dataTransfer = (2.8 * multiplier).toFixed(1);
    
    setMetrics({
      totalRequests: totalReqsDisplay,
      avgResponseTime: `${avgResp}ms`,
      peakLoad: peakLoadDisplay,
      errorRate: `${errorRate}%`,
      dataTransferred: `${dataTransfer}TB`,
      // New metrics
      totalSdiServices: '24',
      totalApiRequests: totalReqsDisplay,
      avgRequests: avgReqsDisplay,
      successRate: `${successRate}%`,
      failureRate: `${failureRate}%`,
      peakLoadHour: '2-3 PM'
    });
  };
  
  // Update metrics when applied date range changes
  useEffect(() => {
    const days = getDaysFromRange(appliedDateRange);
    updateMetrics(days);
  }, [appliedDateRange]);

  const handleSubmit = () => {
    // Apply filters
    setAppliedServiceName(serviceName);
    setAppliedDateRange(dateRange);
    
    // Generate new data based on filters - both charts use same date range
    const days = getDaysFromRange(dateRange);
    setRequestsOverTimeData(generateDateRangeData(days, serviceName));
    setApiUsageData(generateApiUsageData(days, serviceName));
    setServiceRequestAnalysisData(generateServiceRequestAnalysisData(days));
    updateMetrics(days);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setLastUpdated(new Date());
      // Regenerate data on refresh - both charts use same date range
      const days = getDaysFromRange(appliedDateRange);
      setRequestsOverTimeData(generateDateRangeData(days, appliedServiceName));
      setApiUsageData(generateApiUsageData(days, appliedServiceName));
      setServiceRequestAnalysisData(generateServiceRequestAnalysisData(days));
      updateMetrics(days);
    }, 1000);
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const chartColors = {
    grid: theme === 'dark' ? '#1e293b' : '#e5e7eb',
    axis: theme === 'dark' ? '#64748b' : '#9ca3af',
    tooltipBg: theme === 'dark' ? '#1e293b' : '#ffffff',
    tooltipBorder: theme === 'dark' ? '#334155' : '#d1d5db',
    tooltipText: theme === 'dark' ? '#ffffff' : '#111827',
  };

  const handleExport = () => {
    alert('Exporting service analytics data...');
  };

  const toggleServiceRow = (serviceName: string) => {
    setExpandedServiceRow(expandedServiceRow === serviceName ? null : serviceName);
  };

  const handleViewAnalytics = (serviceName: string) => {
    alert(`Opening analytics dashboard for: ${serviceName}`);
  };

  const handleEditClassification = (serviceName: string) => {
    alert(`Opening classification editor for: ${serviceName}`);
  };

  return (
    <div className="space-y-8">
      {/* Expanded Chart Modal */}
      {expandedChart && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4"
          onClick={() => setExpandedChart(null)}
        >
          <div 
            className={`w-full max-w-6xl rounded-2xl border shadow-2xl p-4 sm:p-6 md:p-8 overflow-auto max-h-[95vh] ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold mb-1">
                  {expandedChart === 'requests' ? 'Requests Over Time' : expandedChart === 'apiUsage' ? 'API Usage Trend' : 'Service Type Usage Trend'}
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  {expandedChart === 'requests' 
                    ? `API request volume trends (${appliedDateRange})` 
                    : expandedChart === 'apiUsage'
                    ? 'Daily performance metrics'
                    : 'Usage trends by service type (in thousands)'}
                </p>
              </div>
              <button
                onClick={() => setExpandedChart(null)}
                className={`px-3 sm:px-4 py-2 rounded-lg border transition-all flex items-center gap-2 whitespace-nowrap self-start sm:self-center ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>

            <ResponsiveContainer width="100%" height={500}>
              {expandedChart === 'requests' ? (
                <AreaChart data={requestsOverTimeData}>
                  <defs>
                    <linearGradient id="colorRequestsExpanded" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="50%" stopColor="#60a5fa" stopOpacity={0.4}/>
                      <stop offset="100%" stopColor="#93c5fd" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} opacity={0.3} />
                  <XAxis dataKey="day" stroke={chartColors.axis} style={{ fontSize: '12px' }} />
                  <YAxis stroke={chartColors.axis} style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: chartColors.tooltipBg, 
                      border: `1px solid ${chartColors.tooltipBorder}`,
                      borderRadius: '8px',
                      color: chartColors.tooltipText
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="requests" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorRequestsExpanded)"
                  />
                </AreaChart>
              ) : expandedChart === 'apiUsage' ? (
                <BarChart data={apiUsageData} barGap={2} barCategoryGap={20}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} opacity={0.3} />
                  <XAxis 
                    dataKey="day" 
                    stroke={chartColors.axis} 
                    style={{ fontSize: '12px' }} 
                  />
                  <YAxis stroke={chartColors.axis} style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: chartColors.tooltipBg, 
                      border: `1px solid ${chartColors.tooltipBorder}`,
                      borderRadius: '8px',
                      color: chartColors.tooltipText
                    }} 
                  />
                  <Bar 
                    dataKey="requests" 
                    fill="#3b82f6"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={30}
                  />
                  <Bar 
                    dataKey="success" 
                    fill="#10b981"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={30}
                  />
                  <Bar 
                    dataKey="failure" 
                    fill="#ef4444"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={30}
                  />
                </BarChart>
              ) : (
                <LineChart data={serviceTypeUsageTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#334155' : '#E5E7EB'} />
                  <XAxis dataKey="month" stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '12px' }} />
                  <YAxis stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                      borderColor: theme === 'dark' ? '#334155' : '#e5e7eb',
                      color: theme === 'dark' ? '#f1f5f9' : '#1f2937'
                    }}
                  />
                  <Line type="monotone" dataKey="mapServer" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4 }} name="MapServer" />
                  <Line type="monotone" dataKey="featureServer" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} name="FeatureServer" />
                  <Line type="monotone" dataKey="geoDataServer" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4 }} name="GeoDataServer" />
                  <Line type="monotone" dataKey="geoCodeServer" stroke="#8B5CF6" strokeWidth={3} dot={{ r: 4 }} name="GeoCodeServer" />
                  <Line type="monotone" dataKey="geoProcessingServer" stroke="#EC4899" strokeWidth={3} dot={{ r: 4 }} name="GeoProcessingServer" />
                  <Line type="monotone" dataKey="networkAnalysisServer" stroke="#14B8A6" strokeWidth={3} dot={{ r: 4 }} name="NetworkAnalysisServer" />
                  <Line type="monotone" dataKey="sceneServer" stroke="#F97316" strokeWidth={3} dot={{ r: 4 }} name="SceneServer" />
                  <Line type="monotone" dataKey="vectorServer" stroke="#6366F1" strokeWidth={3} dot={{ r: 4 }} name="VectorServer" />
                  <Line type="monotone" dataKey="wmsServer" stroke="#EAB308" strokeWidth={3} dot={{ r: 4 }} name="WMSServer" />
                  <Line type="monotone" dataKey="versionManagementServer" stroke="#06B6D4" strokeWidth={3} dot={{ r: 4 }} name="VersionManagementServer" />
                  <Line type="monotone" dataKey="imageServer" stroke="#A855F7" strokeWidth={3} dot={{ r: 4 }} name="ImageServer" />
                  <Line type="monotone" dataKey="others" stroke="#64748B" strokeWidth={3} dot={{ r: 4 }} name="Others" />
                </LineChart>
              )}
            </ResponsiveContainer>

            {expandedChart === 'apiUsage' && (
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#3b82f6]" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>Requests</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>Success</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>Failure</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Header with Search, Export, and Refresh */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-[0px] mr-[0px] mb-[32px] ml-[0px] mx-[0px] my-[32px]">
        <div>
          <h1 className="text-3xl tracking-tight mb-[8px] font-bold mt-[0px] mr-[0px] ml-[0px]">Service Analytics</h1>
          <p className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>Deep dive into service performance, errors, and consumer interaction</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {/* Filter Button */}
        
          {/* Last Updated Display */}
          <div className={`flex flex-col gap-1 text-xs sm:text-sm ${
            theme === 'dark'
              ? 'text-slate-400'
              : 'text-gray-600'
          }`}>
            <span className="whitespace-nowrap font-bold">Last Updated</span>
            <span className="whitespace-nowrap">
              {lastUpdated.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} {formatTimestamp(lastUpdated)}
            </span>
          </div>

          {/* Export Button */}
          <ExportDropdown theme={theme} />
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg border transition-all ${
              refreshing
                ? theme === 'dark'
                  ? 'bg-slate-800/50 border-slate-700/30 text-slate-500 cursor-not-allowed'
                  : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                : theme === 'dark'
                ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:text-slate-100'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <RefreshCw className={`w-3 h-3 sm:w-4 sm:h-4 ${refreshing ? 'animate-spin' : ''}`} />
            <span className="whitespace-nowrap">Refresh</span>
          </button>
        </div>
      </div>

      {/* Search Filters */}
      {showFilters && (
      <div
        className={`rounded-xl backdrop-blur-sm border p-6 shadow-lg relative z-10 ${
          theme === 'dark' ? 'bg-slate-900/60 border-slate-800/60 shadow-black/30' : 'bg-white border-gray-200 shadow-gray-200/50'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Service Name Filter */}
          <div className="relative z-[99999] md:col-span-2" ref={serviceDropdownRef}>
            <label className={`block text-sm mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
              Service Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={serviceName}
                readOnly
                className={`w-full px-4 py-2.5 rounded-lg border transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-slate-800/60 border-slate-700/50 text-slate-200 focus:border-[#063360] focus:ring-2 focus:ring-[#063360]/20'
                    : 'bg-white border-gray-300 text-gray-700 focus:border-[#063360] focus:ring-2 focus:ring-[#063360]/20'
                } focus:outline-none`}
                onClick={() => setShowServiceDropdown(!showServiceDropdown)}
              />
              <div
                className={`absolute top-0 right-0 h-full px-4 flex items-center pointer-events-none ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
              {showServiceDropdown && (
                <div
                  className={`absolute z-[99999] mt-1 w-full rounded-lg border overflow-hidden shadow-xl ${ 
                    theme === 'dark' ? 'bg-slate-800 border-slate-700 shadow-black/50' : 'bg-white border-gray-200 shadow-gray-300/50'
                  }`}
                >
                  {/* Search Input */}
                  <div className={`p-2 border-b ${theme === 'dark' ? 'border-slate-700' : 'border-gray-200'}`}>
                    <div className="relative">
                      <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`} />
                      <input
                        type="text"
                        value={serviceSearchQuery}
                        onChange={(e) => setServiceSearchQuery(e.target.value)}
                        placeholder="Search services..."
                        className={`w-full pl-10 pr-3 py-2 rounded-lg border text-sm ${
                          theme === 'dark'
                            ? 'bg-slate-900 border-slate-700 text-slate-200 placeholder-slate-500'
                            : 'bg-gray-50 border-gray-200 text-gray-700 placeholder-gray-400'
                        } focus:outline-none`}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </div>
                  <div className={`max-h-48 overflow-y-auto pr-2 ${
                    theme === 'dark' 
                      ? '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-800/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#063360] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#052954]'
                      : '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#063360] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#052954]'
                  }`}>
                    {filteredServiceNames.map((name) => (
                      <div
                        key={name}
                        className={`px-4 py-2.5 cursor-pointer transition-colors ${
                          serviceName === name
                            ? theme === 'dark'
                              ? 'bg-[#063360] text-white'
                              : 'bg-[#063360] text-white'
                            : theme === 'dark'
                              ? 'hover:bg-slate-700/50 text-slate-200'
                              : 'hover:bg-gray-100 text-gray-700'
                        }`}
                        onClick={() => {
                          setServiceName(name);
                          setShowServiceDropdown(false);
                          setServiceSearchQuery('');
                        }}
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Date Range Filter */}
          <div className="relative z-[99999] md:col-span-2" ref={dateDropdownRef}>
            <label className={`block text-sm mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
              Date Range
            </label>
            <div className="relative">
              <input
                type="text"
                value={dateRange}
                readOnly
                className={`w-full px-4 py-2.5 rounded-lg border transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-slate-800/60 border-slate-700/50 text-slate-200 focus:border-[#063360] focus:ring-2 focus:ring-[#063360]/20'
                    : 'bg-white border-gray-300 text-gray-700 focus:border-[#063360] focus:ring-2 focus:ring-[#063360]/20'
                } focus:outline-none`}
                onClick={() => setShowDateDropdown(!showDateDropdown)}
              />
              <div
                className={`absolute top-0 right-0 h-full px-4 flex items-center pointer-events-none ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
              {showDateDropdown && (
                <div
                  className={`absolute z-[99999] mt-1 w-full rounded-lg border overflow-hidden shadow-xl ${ 
                    theme === 'dark' ? 'bg-slate-800 border-slate-700 shadow-black/50' : 'bg-white border-gray-200 shadow-gray-300/50'
                  }`}
                >
                  <div className={`max-h-48 overflow-y-auto pr-2 ${
                    theme === 'dark' 
                      ? '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-800/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#063360] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#052954]'
                      : '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#063360] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#052954]'
                  }`}>
                    <div
                      className={`px-4 py-2.5 cursor-pointer transition-colors ${
                        dateRange === 'Last 7 Days'
                          ? theme === 'dark'
                            ? 'bg-[#063360] text-white'
                            : 'bg-[#063360] text-white'
                          : theme === 'dark'
                            ? 'hover:bg-slate-700/50 text-slate-200'
                            : 'hover:bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => {
                        setDateRange('Last 7 Days');
                        setShowDateDropdown(false);
                        setShowCustomDatePicker(false);
                      }}
                    >
                      Last 7 Days
                    </div>
                    <div
                      className={`px-4 py-2.5 cursor-pointer transition-colors ${
                        dateRange === 'Last 30 Days'
                          ? theme === 'dark'
                            ? 'bg-[#063360] text-white'
                            : 'bg-[#063360] text-white'
                          : theme === 'dark'
                            ? 'hover:bg-slate-700/50 text-slate-200'
                            : 'hover:bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => {
                        setDateRange('Last 30 Days');
                        setShowDateDropdown(false);
                        setShowCustomDatePicker(false);
                      }}
                    >
                      Last 30 Days
                    </div>
                    <div
                      className={`px-4 py-2.5 cursor-pointer transition-colors ${
                        dateRange === 'Last 90 Days'
                          ? theme === 'dark'
                            ? 'bg-[#063360] text-white'
                            : 'bg-[#063360] text-white'
                          : theme === 'dark'
                            ? 'hover:bg-slate-700/50 text-slate-200'
                            : 'hover:bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => {
                        setDateRange('Last 90 Days');
                        setShowDateDropdown(false);
                        setShowCustomDatePicker(false);
                      }}
                    >
                      Last 90 Days
                    </div>
                    <div
                      className={`px-4 py-2.5 cursor-pointer transition-colors ${
                        dateRange === 'Last 6 Months'
                          ? theme === 'dark'
                            ? 'bg-[#063360] text-white'
                            : 'bg-[#063360] text-white'
                          : theme === 'dark'
                            ? 'hover:bg-slate-700/50 text-slate-200'
                            : 'hover:bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => {
                        setDateRange('Last 6 Months');
                        setShowDateDropdown(false);
                        setShowCustomDatePicker(false);
                      }}
                    >
                      Last 6 Months
                    </div>
                    <div
                      className={`px-4 py-2.5 cursor-pointer transition-colors ${
                        dateRange === 'Last Year'
                          ? theme === 'dark'
                            ? 'bg-[#063360] text-white'
                            : 'bg-[#063360] text-white'
                          : theme === 'dark'
                            ? 'hover:bg-slate-700/50 text-slate-200'
                            : 'hover:bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => {
                        setDateRange('Last Year');
                        setShowDateDropdown(false);
                        setShowCustomDatePicker(false);
                      }}
                    >
                      Last Year
                    </div>
                    <div
                      className={`px-4 py-2.5 cursor-pointer transition-colors ${
                        dateRange === 'Custom Range'
                          ? theme === 'dark'
                            ? 'bg-[#063360] text-white'
                            : 'bg-[#063360] text-white'
                          : theme === 'dark'
                            ? 'hover:bg-slate-700/50 text-slate-200'
                            : 'hover:bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => {
                        setDateRange('Custom Range');
                        setShowDateDropdown(false);
                        setShowCustomDatePicker(true);
                      }}
                    >
                      Custom Range
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Apply Filter Button */}
          <div className="flex items-end md:col-span-1">
            <button
              onClick={handleSubmit}
              className="w-full px-3 py-2.5 rounded-lg transition-all bg-[#063360] hover:bg-[#052954] text-white border border-[#063360] text-sm"
            >
              Apply
            </button>
          </div>
        </div>
        
        {/* Custom Date Picker */}
        {showCustomDatePicker && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                Start Date
              </label>
              <input
                type="date"
                value={customStartDate}
                onChange={(e) => setCustomStartDate(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800/60 border-slate-700/50 text-slate-200 focus:border-[#063360] focus:ring-2 focus:ring-[#063360]/20'
                    : 'bg-white border-gray-300 text-gray-700 focus:border-[#063360] focus:ring-2 focus:ring-[#063360]/20'
                } focus:outline-none`}
              />
            </div>
            <div>
              <label className={`block text-sm mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                End Date
              </label>
              <input
                type="date"
                value={customEndDate}
                onChange={(e) => setCustomEndDate(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800/60 border-slate-700/50 text-slate-200 focus:border-[#063360] focus:ring-2 focus:ring-[#063360]/20'
                    : 'bg-white border-gray-300 text-gray-700 focus:border-[#063360] focus:ring-2 focus:ring-[#063360]/20'
                } focus:outline-none`}
              />
            </div>
          </div>
        )}
      </div>
      )}

      {/* Service KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total SDI Services"
          value={metrics.totalSdiServices}
          icon={Server}
          theme={theme}
          borderColor="#063360"
        />
        <MetricCard
          title="Total API Requests"
          value={metrics.totalApiRequests}
          icon={Activity}
          theme={theme}
          borderColor="#10B981"
        />
        <MetricCard
          title="Average Requests"
          value={metrics.avgRequests}
          icon={BarChart3}
          theme={theme}
          borderColor="#0EA5E9"
        />
        <MetricCard
          title="Average Response Time"
          value={metrics.avgResponseTime}
          icon={Clock}
          theme={theme}
          borderColor="#8B5CF6"
        />
        <MetricCard
          title="Success Rate"
          value={metrics.successRate}
          icon={CheckCircle}
          theme={theme}
          borderColor="#22C55E"
        />
        <MetricCard
          title="Failure Rate"
          value={metrics.failureRate}
          icon={XCircle}
          theme={theme}
          borderColor="#DC2626"
        />
        <MetricCard
          title="Peak Load Hour"
          value={metrics.peakLoadHour}
          icon={Zap}
          theme={theme}
          borderColor="#F59E0B"
        />
        <MetricCard
          title="Data Transferred"
          value={metrics.dataTransferred}
          icon={Database}
          theme={theme}
          borderColor="#14B8A6"
        />
      </div>

      {/* Top Services Usage Table */}
      <div
        style={getPremiumCardStyle(theme)}
        className={`p-4 sm:p-6 overflow-hidden ${theme === 'dark' ? 'rounded-xl' : ''}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
          <h3 className="text-lg sm:text-xl font-bold">Top services usage</h3>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <ExportDropdown theme={theme} />
            <button 
              onClick={onViewAllServices}
              className={`text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border transition-all whitespace-nowrap ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:text-slate-100'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              View all services
            </button>
          </div>
        </div>

        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className={`border-b ${theme === 'dark' ? 'border-slate-800' : 'border-gray-200'}`}>
                <th className={`text-left py-3 px-4 text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Service Name</th>
                <th className={`text-left py-3 px-4 text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Type</th>
                <th className={`text-left py-3 px-4 text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Last Review</th>
                <th className={`text-left py-3 px-4 text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Requests</th>
              </tr>
            </thead>
            <tbody>
              {serviceRegistryData.map((service) => (
                <tr 
                  key={service.name}
                  className={`border-b transition-colors ${
                    theme === 'dark' 
                      ? 'border-slate-800/50 hover:bg-slate-800/30' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <td className="py-4 px-4">
                    <span className={theme === 'dark' ? 'text-slate-200' : 'text-gray-700'}>{service.name}</span>
                  </td>
                  <td className={`py-4 px-4 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    {service.type}
                  </td>
                  <td className={`py-4 px-4 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    {service.lastReview}
                  </td>
                  <td className={`py-4 px-4 ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`}>
                    {service.requests}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trend Analytics Container */}
      <TrendAnalyticsContainer theme={theme} />

      {/* Service Request & Analysis and Service Type Usage Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Service Request & Analysis Chart */}
        <div
          style={getPremiumCardStyle(theme)}
          className={`p-4 sm:p-6 overflow-hidden ${theme === 'dark' ? 'rounded-xl' : ''}`}
        >
          <div className="mb-4">
            <h3 className={`text-lg sm:text-xl font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-[#101828]'}`}>
              Service Request & Analysis
            </h3>
            <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-[#4a5565]'}`}>
              Top services by request volume and performance
            </p>
          </div>
          
          <div className={`space-y-3 max-h-[450px] overflow-y-auto pr-2 pb-2 ${
            theme === 'dark' 
              ? '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-800/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#063360] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#052954]'
              : '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#063360] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#052954]'
          }`}>
            {generateServiceRequestAnalysisData(getDaysFromRange(dateRange)).map((item, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border transition-all ${
                  theme === 'dark' 
                    ? 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60' 
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <span className={`font-medium text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'} break-words`}>
                    {item.service}
                  </span>
                  <span 
                    className="px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap self-start"
                    style={{
                      backgroundColor: 
                        item.type === 'MapServer' ? 'rgba(14, 165, 233, 0.15)' :
                        item.type === 'FeatureServer' ? 'rgba(139, 92, 246, 0.15)' :
                        item.type === 'GeoDataServer' ? 'rgba(245, 158, 11, 0.15)' :
                        item.type === 'GeoCodeServer' ? 'rgba(16, 185, 129, 0.15)' :
                        item.type === 'GeoProcessingServer' ? 'rgba(239, 68, 68, 0.15)' :
                        item.type === 'NetworkAnalysisServer' ? 'rgba(236, 72, 153, 0.15)' :
                        item.type === 'SceneServer' ? 'rgba(20, 184, 166, 0.15)' :
                        item.type === 'VectorServer' ? 'rgba(249, 115, 22, 0.15)' :
                        item.type === 'WMSServer' ? 'rgba(59, 130, 246, 0.15)' :
                        item.type === 'VersionManagementServer' ? 'rgba(168, 85, 247, 0.15)' :
                        item.type === 'ImageServer' ? 'rgba(34, 197, 94, 0.15)' :
                        theme === 'dark' ? 'rgba(100, 116, 139, 0.15)' : 'rgba(107, 114, 128, 0.15)',
                      color:
                        item.type === 'MapServer' ? '#0EA5E9' :
                        item.type === 'FeatureServer' ? '#8B5CF6' :
                        item.type === 'GeoDataServer' ? '#F59E0B' :
                        item.type === 'GeoCodeServer' ? '#10B981' :
                        item.type === 'GeoProcessingServer' ? '#EF4444' :
                        item.type === 'NetworkAnalysisServer' ? '#EC4899' :
                        item.type === 'SceneServer' ? '#14B8A6' :
                        item.type === 'VectorServer' ? '#F97316' :
                        item.type === 'WMSServer' ? '#3B82F6' :
                        item.type === 'VersionManagementServer' ? '#A855F7' :
                        item.type === 'ImageServer' ? '#22C55E' :
                        '#6B7280'
                    }}
                  >
                    {item.type}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between text-xs gap-2">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <div>
                      <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}>Requests: </span>
                      <span className={`font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                        {item.requests.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}>Avg: </span>
                      <span className={`font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                        {item.avgTime}ms
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Type Usage Trend */}
        <div className={`relative rounded-[14px]`}
          style={getPremiumCardStyle(theme)}
        >
          <div className="p-4 sm:p-6 pb-6 sm:pb-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h3 className={`text-lg sm:text-xl font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-[#101828]'}`}>
                  Service Type Usage Trend
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-[#4a5565]'}`}>
                  Usage trends by service type (in thousands)
                </p>
              </div>
              
              {/* Export Button */}
              <div className="relative flex items-center gap-2 z-50">
                <div className="scale-90 relative z-50">
                  <ExportDropdown theme={theme} />
                </div>
                <button
                  onClick={() => setExpandedChart('serviceTypeTrend')}
                  className={`p-1.5 rounded-lg border transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:text-slate-100'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  title="Expand chart"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={420}>
              <LineChart data={serviceTypeUsageTrendData} margin={{ top: 10, right: 10, left: -15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#334155' : '#E5E7EB'} />
                <XAxis 
                  dataKey="month" 
                  stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} 
                  style={{ fontSize: '12px' }}
                  angle={-45}
                  textAnchor="end"
                  height={70}
                  interval="preserveStartEnd"
                />
                <YAxis 
                  stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} 
                  style={{ fontSize: '12px' }}
                  width={45}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                    borderColor: theme === 'dark' ? '#334155' : '#e5e7eb',
                    color: theme === 'dark' ? '#f1f5f9' : '#1f2937',
                    fontSize: '14px'
                  }}
                />
                <Line type="monotone" dataKey="mapServer" stroke="#3B82F6" strokeWidth={1.5} dot={false} name="MapServer" />
                <Line type="monotone" dataKey="featureServer" stroke="#10B981" strokeWidth={1.5} dot={false} name="FeatureServer" />
                <Line type="monotone" dataKey="geoDataServer" stroke="#F59E0B" strokeWidth={1.5} dot={false} name="GeoDataServer" />
                <Line type="monotone" dataKey="geoCodeServer" stroke="#8B5CF6" strokeWidth={1.5} dot={false} name="GeoCodeServer" />
                <Line type="monotone" dataKey="geoProcessingServer" stroke="#EC4899" strokeWidth={1.5} dot={false} name="GeoProcessingServer" />
                <Line type="monotone" dataKey="networkAnalysisServer" stroke="#14B8A6" strokeWidth={1.5} dot={false} name="NetworkAnalysisServer" />
                <Line type="monotone" dataKey="sceneServer" stroke="#F97316" strokeWidth={1.5} dot={false} name="SceneServer" />
                <Line type="monotone" dataKey="vectorServer" stroke="#6366F1" strokeWidth={1.5} dot={false} name="VectorServer" />
                <Line type="monotone" dataKey="wmsServer" stroke="#EAB308" strokeWidth={1.5} dot={false} name="WMSServer" />
                <Line type="monotone" dataKey="versionManagementServer" stroke="#06B6D4" strokeWidth={1.5} dot={false} name="VersionManagementServer" />
                <Line type="monotone" dataKey="imageServer" stroke="#A855F7" strokeWidth={1.5} dot={false} name="ImageServer" />
                <Line type="monotone" dataKey="others" stroke="#64748B" strokeWidth={1.5} dot={false} name="Others" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}