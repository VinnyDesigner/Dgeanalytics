import { useState, useEffect, useRef } from 'react';
import { Users, TrendingUp, TrendingDown, Activity, Calendar, Search, Download, RefreshCw, UserCheck, UserX, PieChart, BarChart3, ChevronDown, ChevronRight, Clock, Database, Maximize2, X } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { ExportDropdown } from './ExportDropdown';
import { PieChart as RechartsPie, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import React from 'react';

// Helper to get number of days from date range string
const getDaysFromRange = (range: string): number => {
  if (range === 'Last 7 Days') return 7;
  if (range === 'Last 30 Days') return 30;
  if (range === 'Last 90 Days') return 90;
  if (range === 'Last 6 Months') return 180;
  if (range === 'Last Year') return 365;
  return 30; // default
};

// Helper function to generate usage trend analysis data based on date range
const generateUsageTrendAnalysisData = (days: number) => {
  const data = [];
  const today = new Date('2024-12-25');
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const monthDay = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
    
    // Generate realistic varying data
    const baseTotalRequests = 45000 + Math.random() * 50000;
    const baseActiveConsumers = baseTotalRequests * 0.9; // Active consumers are ~90% of requests
    
    data.push({
      day: monthDay,
      totalRequests: Math.floor(baseTotalRequests),
      activeConsumers: Math.floor(baseActiveConsumers)
    });
  }
  
  return data;
};

// Public vs Private Consumer Usage Trend Data
const publicVsPrivateTrendData = [
  { month: 'Jan', public: 28000, private: 42000 },
  { month: 'Feb', public: 32000, private: 45000 },
  { month: 'Mar', public: 35000, private: 48000 },
  { month: 'Apr', public: 38000, private: 52000 },
  { month: 'May', public: 42000, private: 55000 },
  { month: 'Jun', public: 45000, private: 58000 },
  { month: 'Jul', public: 48000, private: 62000 },
  { month: 'Aug', public: 52000, private: 65000 },
  { month: 'Sep', public: 55000, private: 68000 },
  { month: 'Oct', public: 58000, private: 72000 },
  { month: 'Nov', public: 62000, private: 75000 },
  { month: 'Dec', public: 65000, private: 78000 },
];

// Consumer Source Breakdown (Platform) Data
const platformBreakdownData = [
  { name: 'Android', value: 28, color: '#10b981' },
  { name: 'IOS', value: 25, color: '#3b82f6' },
  { name: 'MacOS', value: 18, color: '#8b5cf6' },
  { name: 'Windows', value: 15, color: '#f59e0b' },
  { name: 'Linux', value: 8, color: '#06b6d4' },
  { name: 'ArcgisPro', value: 4, color: '#ec4899' },
  { name: 'Others', value: 2, color: '#6366f1' },
];

// Consumer Source Distribution (Device) Data
const deviceDistributionData = [
  { name: 'Mobile', value: 45, color: '#10b981' },
  { name: 'Tablet', value: 25, color: '#8b5cf6' },
  { name: 'Web', value: 20, color: '#3b82f6' },
  { name: 'Desktop', value: 10, color: '#f59e0b' },
];

// All Consumers Data (expanded list)
const allConsumersData = [
  { name: 'Abu Dhabi Airports Company', type: 'Government', requests: 304825, successRate: 99.5, lastAccess: 'Dec 23, 2025', status: 'high', email: 'contact@adac.ae', phone: '+971-2-123-4567', department: 'Airport Operations', apiKey: 'adac_prod_8x9y2z3a4b5c6d7e' },
  { name: 'Abu Dhabi Agriculture and Food Safety Authority', type: 'Government', requests: 352893, successRate: 98.8, lastAccess: 'Dec 24, 2025', status: 'high', email: 'info@adafsa.ae', phone: '+971-4-555-1234', department: 'Food Safety', apiKey: 'adafsa_prod_1a2b3c4d5e6f7g8h' },
  { name: 'Abu Dhabi Municipality', type: 'Government', requests: 388379, successRate: 99.2, lastAccess: 'Dec 25, 2025', status: 'high', email: 'support@adm.ae', phone: '+971-2-777-8899', department: 'Municipal Services', apiKey: 'adm_prod_9h8g7f6e5d4c3b2a' },
  { name: 'TAQA Water Solution Company', type: 'Government', requests: 304995, successRate: 97.6, lastAccess: 'Dec 25, 2025', status: 'high', email: 'info@taqa.ae', phone: '+971-3-888-9900', department: 'Water Services', apiKey: 'taqa_prod_5k4j3h2g1f0e9d8c' },
  { name: 'TAQA Distribution', type: 'Government', requests: 162441, successRate: 98.3, lastAccess: 'Dec 22, 2025', status: 'high', email: 'distribution@taqa.ae', phone: '+971-2-333-4455', department: 'Distribution Network', apiKey: 'taqad_prod_7b6n5m4k3j2h1g0f' },
  { name: 'Abu Dhabi Ports Company', type: 'Government', requests: 205313, successRate: 99.1, lastAccess: 'Dec 25, 2025', status: 'high', email: 'info@adports.ae', phone: '+971-4-222-3333', department: 'Port Operations', apiKey: 'adports_prod_3x4y5z6a7b8c9d0e' },
  { name: 'Emirates Integrated Telecommunication Company', type: 'Government', requests: 142807, successRate: 98.9, lastAccess: 'Dec 25, 2025', status: 'medium', email: 'contact@eitc.ae', phone: '+971-4-111-2222', department: 'Telecommunications', apiKey: 'eitc_prod_2w3x4y5z6a7b8c9d' },
  { name: 'Department of Municipalities and Transport', type: 'Government', requests: 114687, successRate: 97.8, lastAccess: 'Dec 24, 2025', status: 'medium', email: 'info@dmt.ae', phone: '+971-4-999-8888', department: 'Transport Division', apiKey: 'dmt_prod_8v9w0x1y2z3a4b5c' },
  { name: 'Environment Agency Abu Dhabi', type: 'Government', requests: 155377, successRate: 98.5, lastAccess: 'Dec 25, 2025', status: 'medium', email: 'contact@ead.ae', phone: '+971-2-444-5555', department: 'Environmental Protection', apiKey: 'ead_prod_6u7v8w9x0y1z2a3b' },
  { name: 'Emirates Telecommunication Corporation', type: 'Government', requests: 85179, successRate: 96.9, lastAccess: 'Dec 25, 2025', status: 'medium', email: 'info@etc.ae', phone: '+971-3-666-7777', department: 'Network Operations', apiKey: 'etc_prod_4t5u6v7w8x9y0z1a' },
  { name: 'Ministry of Interior', type: 'Government', requests: 298541, successRate: 99.3, lastAccess: 'Dec 25, 2025', status: 'high', email: 'info@moi.gov.ae', phone: '+971-2-441-5555', department: 'National Security', apiKey: 'moi_prod_1x2y3z4a5b6c7d8e' },
  { name: 'Statistics Center Abu Dhabi', type: 'Government', requests: 189234, successRate: 98.7, lastAccess: 'Dec 24, 2025', status: 'high', email: 'contact@scad.ae', phone: '+971-2-810-9999', department: 'Data Analytics', apiKey: 'scad_prod_2a3b4c5d6e7f8g9h' },
  { name: 'Department of Community Development', type: 'Government', requests: 176890, successRate: 97.9, lastAccess: 'Dec 25, 2025', status: 'high', email: 'info@dcd.gov.ae', phone: '+971-2-699-9999', department: 'Community Services', apiKey: 'dcd_prod_3b4c5d6e7f8g9h0i' },
  { name: 'TAMM', type: 'Government', requests: 421567, successRate: 99.6, lastAccess: 'Dec 25, 2025', status: 'high', email: 'support@tamm.ae', phone: '+971-600-535-555', department: 'Digital Government', apiKey: 'tamm_prod_4c5d6e7f8g9h0i1j' },
  { name: 'Family Development Foundation', type: 'Government', requests: 143298, successRate: 98.2, lastAccess: 'Dec 24, 2025', status: 'medium', email: 'info@fdf.gov.ae', phone: '+971-2-441-9444', department: 'Family Services', apiKey: 'fdf_prod_5d6e7f8g9h0i1j2k' },
  { name: 'General Directorate of Abu Dhabi Police', type: 'Government', requests: 267890, successRate: 99.4, lastAccess: 'Dec 25, 2025', status: 'high', email: 'contact@adpolice.gov.ae', phone: '+971-2-446-1461', department: 'Law Enforcement', apiKey: 'adp_prod_6e7f8g9h0i1j2k3l' },
  { name: 'Abu Dhabi Chamber of Commerce and Industry', type: 'Commercial', requests: 198765, successRate: 98.6, lastAccess: 'Dec 25, 2025', status: 'high', email: 'info@adcci.gov.ae', phone: '+971-2-621-4000', department: 'Business Development', apiKey: 'adcci_prod_7f8g9h0i1j2k3l4m' },
  { name: 'Abu Dhabi Department of Education and Knowledge', type: 'Government', requests: 234567, successRate: 99.1, lastAccess: 'Dec 25, 2025', status: 'high', email: 'contact@adek.ae', phone: '+971-2-501-5555', department: 'Education Services', apiKey: 'adek_prod_8g9h0i1j2k3l4m5n' },
  { name: 'Integrated Transportation Center', type: 'Government', requests: 156789, successRate: 98.4, lastAccess: 'Dec 24, 2025', status: 'medium', email: 'info@itc.gov.ae', phone: '+971-2-418-3333', department: 'Transport Planning', apiKey: 'itc_prod_9h0i1j2k3l4m5n6o' },
  { name: 'Department of Economic Development', type: 'Government', requests: 289432, successRate: 99.0, lastAccess: 'Dec 25, 2025', status: 'high', email: 'info@added.gov.ae', phone: '+971-2-666-2888', department: 'Economic Planning', apiKey: 'ded_prod_0i1j2k3l4m5n6o7p' },
  { name: 'Abu Dhabi National Oil Company', type: 'Commercial', requests: 445678, successRate: 99.7, lastAccess: 'Dec 25, 2025', status: 'high', email: 'contact@adnoc.ae', phone: '+971-2-602-9000', department: 'Operations', apiKey: 'adnoc_prod_1j2k3l4m5n6o7p8q' },
  { name: 'Abu Dhabi Investment Office', type: 'Government', requests: 178934, successRate: 98.8, lastAccess: 'Dec 25, 2025', status: 'high', email: 'info@adio.gov.ae', phone: '+971-2-333-6333', department: 'Investment Promotion', apiKey: 'adio_prod_2k3l4m5n6o7p8q9r' },
  { name: 'Emirates Nuclear Energy Corporation', type: 'Commercial', requests: 167543, successRate: 99.5, lastAccess: 'Dec 24, 2025', status: 'medium', email: 'info@enec.gov.ae', phone: '+971-2-666-9400', department: 'Nuclear Operations', apiKey: 'enec_prod_3l4m5n6o7p8q9r0s' },
  { name: 'Etihad Rail', type: 'Commercial', requests: 134567, successRate: 98.3, lastAccess: 'Dec 25, 2025', status: 'medium', email: 'contact@etihadrail.ae', phone: '+971-2-418-2020', department: 'Rail Operations', apiKey: 'er_prod_4m5n6o7p8q9r0s1t' },
  { name: 'Department of Health', type: 'Government', requests: 312456, successRate: 99.2, lastAccess: 'Dec 25, 2025', status: 'high', email: 'info@doh.gov.ae', phone: '+971-2-449-3333', department: 'Healthcare Services', apiKey: 'doh_prod_5n6o7p8q9r0s1t2u' },
  { name: 'National Crises & Emergency Management Authority', type: 'Government', requests: 198765, successRate: 99.6, lastAccess: 'Dec 25, 2025', status: 'high', email: 'info@ncema.gov.ae', phone: '+971-2-403-2220', department: 'Emergency Response', apiKey: 'ncema_prod_6o7p8q9r0s1t2u3v' },
  { name: 'National Center of Meteorology & Seismology', type: 'Government', requests: 145678, successRate: 98.9, lastAccess: 'Dec 24, 2025', status: 'medium', email: 'info@ncms.ae', phone: '+971-2-445-4433', department: 'Weather Services', apiKey: 'ncms_prod_7p8q9r0s1t2u3v4w' },
  { name: 'ALDAR', type: 'Commercial', requests: 223456, successRate: 98.7, lastAccess: 'Dec 25, 2025', status: 'high', email: 'contact@aldar.com', phone: '+971-2-810-5555', department: 'Property Development', apiKey: 'aldar_prod_8q9r0s1t2u3v4w5x' },
  { name: 'Zayed Higher Organization', type: 'Government', requests: 112345, successRate: 98.1, lastAccess: 'Dec 24, 2025', status: 'medium', email: 'info@zho.gov.ae', phone: '+971-2-444-7800', department: 'Special Needs Services', apiKey: 'zho_prod_9r0s1t2u3v4w5x6y' },
  { name: 'Department of Culture and Tourism', type: 'Government', requests: 256789, successRate: 99.0, lastAccess: 'Dec 25, 2025', status: 'high', email: 'info@dct.gov.ae', phone: '+971-2-444-0444', department: 'Tourism Services', apiKey: 'dct_prod_0s1t2u3v4w5x6y7z' },
  { name: 'Al Ain Wildlife Park & Resort', type: 'Government', requests: 98765, successRate: 97.8, lastAccess: 'Dec 24, 2025', status: 'medium', email: 'info@awpr.ae', phone: '+971-3-799-2000', department: 'Wildlife Management', apiKey: 'awpr_prod_1t2u3v4w5x6y7z8a' },
  { name: 'General Authority of Islamic Affairs and Endowment', type: 'Government', requests: 134567, successRate: 98.5, lastAccess: 'Dec 25, 2025', status: 'medium', email: 'info@awqaf.gov.ae', phone: '+971-2-446-4444', department: 'Islamic Services', apiKey: 'awqaf_prod_2u3v4w5x6y7z8a9b' },
  { name: 'The Center of Waste Management Abu Dhabi', type: 'Government', requests: 187654, successRate: 98.6, lastAccess: 'Dec 25, 2025', status: 'high', email: 'info@tadweer.ae', phone: '+971-2-555-9999', department: 'Waste Operations', apiKey: 'tadweer_prod_3v4w5x6y7z8a9b0c' },
  { name: 'Abu Dhabi Monitoring and Control Centre', type: 'Government', requests: 276543, successRate: 99.3, lastAccess: 'Dec 25, 2025', status: 'high', email: 'contact@admcc.ae', phone: '+971-2-417-8888', department: 'Monitoring Services', apiKey: 'admcc_prod_4w5x6y7z8a9b0c1d' },
];

// Consumer Activity Over Time (Last 30 days)
const activityOverTimeData = [
  { day: 'Dec 1', requests: 45000 },
  { day: 'Dec 3', requests: 48000 },
  { day: 'Dec 5', requests: 52000 },
  { day: 'Dec 7', requests: 49000 },
  { day: 'Dec 9', requests: 55000 },
  { day: 'Dec 11', requests: 58000 },
  { day: 'Dec 13', requests: 54000 },
  { day: 'Dec 15', requests: 61000 },
  { day: 'Dec 17', requests: 65000 },
  { day: 'Dec 19', requests: 68000 },
];

// Traffic Sources Data
const trafficSourcesData = [
  { name: 'Export', value: 25, color: '#8b5cf6' },
  { name: 'Identify', value: 15, color: '#06b6d4' },
  { name: 'Query', value: 30, color: '#10b981' },
  { name: 'Tile', value: 12, color: '#3b82f6' },
  { name: 'Edits', value: 5, color: '#ef4444' },
  { name: 'Find', value: 6, color: '#f59e0b' },
  { name: 'Geometry', value: 4, color: '#ec4899' },
  { name: 'GeoCode', value: 2, color: '#14b8a6' },
  { name: 'Others', value: 1, color: '#6366f1' },
];

interface ConsumerInsightsProps {
  theme?: 'dark' | 'light';
  onConsumerClick?: (consumerName: string) => void;
  onViewAllConsumers?: () => void;
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

export function ConsumerInsights({ theme = 'dark', onConsumerClick, onViewAllConsumers }: ConsumerInsightsProps) {
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConsumer, setSelectedConsumer] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState('30days');
  const [dateRange, setDateRange] = useState('Last 30 Days');
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const dateDropdownRef = useRef<HTMLDivElement>(null);
  
  // Expanded chart state
  const [expandedChart, setExpandedChart] = useState<'consumerUsage' | null>(null);
  
  // Metric states
  const [metrics, setMetrics] = useState({
    totalConsumers: '847',
    avgRequests: '64.2K',
    highUsage: '2',
    lowUsage: '2',
    totalRequests: '12.4M',
    topConsumer: '10',
    leastConsumer: '09'
  });
  
  // Function to update metrics based on date filter
  const updateMetrics = (filter: string) => {
    const multiplier = filter === '7days' ? 0.23 : filter === '30days' ? 1 : filter === '90days' ? 3 : 12;
    const avgReqs = Math.floor(64200 * multiplier);
    const avgReqsDisplay = avgReqs >= 1000000 
      ? `${(avgReqs / 1000000).toFixed(1)}M` 
      : `${(avgReqs / 1000).toFixed(1)}K`;
    
    setMetrics({
      totalConsumers: '847',
      avgRequests: avgReqsDisplay,
      highUsage: '2',
      lowUsage: '2',
      totalRequests: '12.4M',
      topConsumer: '10',
      leastConsumer: '09'
    });
  };
  
  // Initialize metrics on mount
  useEffect(() => {
    updateMetrics(dateFilter);
  }, []);

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

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setLastUpdated(new Date());
      updateMetrics(dateFilter);
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

  // Filter consumers based on search query
  const filteredConsumers = allConsumersData.filter(consumer =>
    consumer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    consumer.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredConsumers.length / itemsPerPage);
  const paginatedConsumers = filteredConsumers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate high and low usage consumers
  const highUsageCount = Math.ceil(allConsumersData.length * 0.1);
  const lowUsageCount = Math.ceil(allConsumersData.length * 0.1);

  return (
    <>
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
                  Consumer Usage Trend Analysis
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  Overall consumer usage patterns over time
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
              <LineChart data={generateUsageTrendAnalysisData(getDaysFromRange(dateRange))}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#334155' : '#E5E7EB'} />
                <XAxis dataKey="day" stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '12px' }} />
                <YAxis yAxisId="left" stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'} style={{ fontSize: '12px' }} tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                    borderColor: theme === 'dark' ? '#334155' : '#e5e7eb',
                    color: theme === 'dark' ? '#f1f5f9' : '#1f2937'
                  }}
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="totalRequests" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 4 }}
                  name="Total Requests"
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="activeConsumers" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 4 }}
                  name="Active Consumers"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {/* Header with Export and Refresh */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mt-[0px] mr-[0px] mb-[32px] ml-[0px] mx-[0px] my-[32px]">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl tracking-tight mb-[8px] font-bold mt-[0px] mr-[0px] ml-[0px]">Consumer Insights</h1>
          <p className={`text-xs sm:text-sm md:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Comprehensive analysis of consumer behavior and service usage patterns
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
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

          {/* Date Range Selector */}
          <div className="relative" ref={dateDropdownRef}>
            <button
              className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg border cursor-pointer transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setShowDateDropdown(!showDateDropdown)}
            >
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">{dateRange}</span>
              <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${showDateDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {showDateDropdown && (
              <div
                className={`absolute z-[99999] mt-1 right-0 sm:left-0 w-full min-w-[140px] sm:min-w-[160px] rounded-lg border overflow-hidden shadow-xl ${ 
                  theme === 'dark' ? 'bg-slate-800 border-slate-700 shadow-black/50' : 'bg-white border-gray-200 shadow-gray-300/50'
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
                  onClick={() => {
                    setDateRange('Last 7 Days');
                    setDateFilter('7days');
                    updateMetrics('7days');
                    setShowDateDropdown(false);
                  }}
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
                  onClick={() => {
                    setDateRange('Last 30 Days');
                    setDateFilter('30days');
                    updateMetrics('30days');
                    setShowDateDropdown(false);
                  }}
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
                  onClick={() => {
                    setDateRange('Last 90 Days');
                    setDateFilter('90days');
                    updateMetrics('90days');
                    setShowDateDropdown(false);
                  }}
                >
                  Last 90 Days
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

      {/* Consumer KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <MetricCard
          title="Total Consumers"
          value={metrics.totalConsumers}
          icon={Users}
          trend={{ value: '12.5%', positive: true }}
          gradient="from-blue-600 to-cyan-600"
          subtitle="Active entities"
          theme={theme}
          borderColor="#048AC3"
        />
        <MetricCard
          title="Average Requests Per Consumers"
          value={metrics.avgRequests}
          icon={Activity}
          trend={{ value: '8.3%', positive: true }}
          gradient="from-indigo-600 to-purple-600"
          subtitle={dateFilter === '7days' ? 'Last 7 days' : dateFilter === '30days' ? 'Last 30 days' : dateFilter === '90days' ? 'Last 90 days' : 'Custom range'}
          theme={theme}
          borderColor="#8B5CF6"
        />
        <MetricCard
          title="Total Requests by Consumers"
          value={metrics.totalRequests}
          icon={Database}
          trend={{ value: '15.2%', positive: true }}
          gradient="from-violet-600 to-purple-600"
          subtitle="Across all consumers"
          theme={theme}
          borderColor="#7C3AED"
        />
        <MetricCard
          title="Top Consumer Utilising Services"
          value={metrics.topConsumer}
          icon={TrendingUp}
          gradient="from-green-600 to-emerald-600"
          subtitle="Highest service usage"
          theme={theme}
          borderColor="#10B981"
        />
        <MetricCard
          title="Least Consumers Utilising Services"
          value={metrics.leastConsumer}
          icon={TrendingDown}
          gradient="from-red-600 to-rose-600"
          subtitle="Lowest service usage"
          theme={theme}
          borderColor="#EF4444"
        />
      </div>

      {/* Top 15 Consumers Table */}
      <div 
        style={getPremiumCardStyle(theme)}
        className="p-6"
      >
        <div className="flex items-center justify-between mb-6 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-1">Top 15 Consumers</h3>
            <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>
              Top 15 consumers by usage and activity
            </p>
          </div>
          <button
            onClick={onViewAllConsumers}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:text-slate-100'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="text-sm">View All Consumers</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${theme === 'dark' ? 'border-slate-800' : 'border-gray-200'}`}>
                <th className={`text-left py-3 px-6 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  #
                </th>
                <th className={`text-left py-3 px-6 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Consumer Name
                </th>
                <th className={`text-left py-3 px-6 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Total Requests
                </th>
                <th className={`text-left py-3 px-6 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Success Rate
                </th>
                <th className={`text-left py-3 px-6 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Last Access
                </th>
              </tr>
            </thead>
            <tbody>
              {allConsumersData.slice(0, 15).map((consumer, index) => (
                <tr 
                  key={consumer.name}
                  className={`border-b transition-colors ${
                    theme === 'dark' 
                      ? 'border-slate-800/50 hover:bg-slate-800/30' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <td className={`py-4 px-6 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    {index + 1}
                  </td>
                  <td className="py-4 px-6">
                    <span className={theme === 'dark' ? 'text-slate-200' : 'text-gray-700'}>
                      {consumer.name}
                    </span>
                  </td>
                  <td className={`py-4 px-6 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    {consumer.requests.toLocaleString()}
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-emerald-500 font-medium">
                      {consumer.successRate}%
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`} />
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                        {consumer.lastAccess}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6">
        {/* Consumer Usage Trend Analysis */}
        <div 
          style={getPremiumCardStyle(theme)}
          className="p-4 sm:p-6"
        >
          <div className="flex items-start justify-between mb-4 sm:mb-6 gap-4">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold mb-1">
                Consumer Usage Trend Analysis
              </h3>
              <p className={`text-xs sm:text-[14px] leading-[18px] sm:leading-[20px] mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>
                Overall consumer usage patterns over time
              </p>
            </div>
            <button
              onClick={() => setExpandedChart('consumerUsage')}
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

          <ResponsiveContainer width="100%" height={300} className="sm:hidden">
            <LineChart data={generateUsageTrendAnalysisData(getDaysFromRange(dateRange))} margin={{ top: 10, right: 5, left: -25, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} opacity={0.3} />
              <XAxis 
                dataKey="day" 
                stroke={chartColors.axis} 
                style={{ fontSize: '12px' }}
                angle={-45}
                textAnchor="end"
                height={60}
                interval="preserveStartEnd"
              />
              <YAxis 
                yAxisId="left" 
                stroke={chartColors.axis} 
                style={{ fontSize: '12px' }} 
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                width={40}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: chartColors.tooltipBg, 
                  border: `1px solid ${chartColors.tooltipBorder}`,
                  borderRadius: '8px',
                  color: chartColors.tooltipText,
                  fontSize: '14px'
                }}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="totalRequests" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: '#3b82f6', r: 2 }}
                activeDot={{ r: 4 }}
                name="Total Requests"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="activeConsumers" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={{ fill: '#10b981', r: 2 }}
                activeDot={{ r: 4 }}
                name="Active Consumers"
              />
            </LineChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height={350} className="hidden sm:block">
            <LineChart data={generateUsageTrendAnalysisData(getDaysFromRange(dateRange))} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} opacity={0.3} />
              <XAxis dataKey="day" stroke={chartColors.axis} style={{ fontSize: '11px' }} />
              <YAxis yAxisId="left" stroke={chartColors.axis} style={{ fontSize: '11px' }} tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: chartColors.tooltipBg, 
                  border: `1px solid ${chartColors.tooltipBorder}`,
                  borderRadius: '8px',
                  color: chartColors.tooltipText
                }}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="totalRequests" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 5 }}
                activeDot={{ r: 7 }}
                name="Total Requests"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="activeConsumers" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
                activeDot={{ r: 7 }}
                name="Active Consumers"
              />
            </LineChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-3 sm:mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#3b82f6]" />
              <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Total Requests</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981]" />
              <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Active Consumers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Consumer Source Breakdown (Platform) */}
        <div 
          style={getPremiumCardStyle(theme)}
          className="p-4 sm:p-6"
        >
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold mb-1">
              Consumer Source Breakdown (Platform)
            </h3>
            <p className={`text-xs sm:text-[14px] leading-[18px] sm:leading-[20px] mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>
              Distribution of consumer access by platform
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {/* Pie Chart */}
            <div className="flex items-center justify-center sm:flex-1">
              <ResponsiveContainer width="100%" height={220} className="sm:hidden">
                <RechartsPie>
                  <Pie
                    data={platformBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {platformBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: chartColors.tooltipBg, 
                      border: `1px solid ${chartColors.tooltipBorder}`,
                      borderRadius: '8px',
                      color: chartColors.tooltipText,
                      fontSize: '11px'
                    }} 
                  />
                </RechartsPie>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height={264} className="hidden sm:block">
                <RechartsPie>
                  <Pie
                    data={platformBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {platformBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: chartColors.tooltipBg, 
                      border: `1px solid ${chartColors.tooltipBorder}`,
                      borderRadius: '8px',
                      color: chartColors.tooltipText
                    }} 
                  />
                </RechartsPie>
              </ResponsiveContainer>
            </div>

            {/* Legend Box */}
            <div className={`rounded-xl px-4 sm:px-6 py-3 sm:py-4 sm:flex-1 ${theme === 'dark' ? 'bg-slate-800/30' : 'bg-white'}`}>
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
                {platformBreakdownData.map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                    <div 
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className={`text-[10px] sm:text-[12px] leading-[14px] sm:leading-[16px] ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                      {item.name}
                    </span>
                    <span className={`text-xs sm:text-[14px] leading-[16px] sm:leading-[20px] ml-auto ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`} style={{ fontWeight: 700 }}>
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Consumer Source Distribution (Device) */}
        <div 
          style={getPremiumCardStyle(theme)}
          className="p-4 sm:p-6"
        >
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold mb-1">
              Consumer Source Distribution(Device)
            </h3>
            <p className={`text-xs sm:text-[14px] leading-[18px] sm:leading-[20px] mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>
              Device-based consumer access distribution
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {/* Pie Chart */}
            <div className="flex items-center justify-center sm:flex-1">
              <ResponsiveContainer width="100%" height={220} className="sm:hidden">
                <RechartsPie>
                  <Pie
                    data={deviceDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {deviceDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: chartColors.tooltipBg, 
                      border: `1px solid ${chartColors.tooltipBorder}`,
                      borderRadius: '8px',
                      color: chartColors.tooltipText,
                      fontSize: '11px'
                    }} 
                  />
                </RechartsPie>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height={264} className="hidden sm:block">
                <RechartsPie>
                  <Pie
                    data={deviceDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {deviceDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: chartColors.tooltipBg, 
                      border: `1px solid ${chartColors.tooltipBorder}`,
                      borderRadius: '8px',
                      color: chartColors.tooltipText
                    }} 
                  />
                </RechartsPie>
              </ResponsiveContainer>
            </div>

            {/* Legend Box */}
            <div className={`rounded-xl px-4 sm:px-6 py-3 sm:py-4 sm:flex-1 ${theme === 'dark' ? 'bg-slate-800/30' : 'bg-white'}`}>
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
                {deviceDistributionData.map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                    <div 
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className={`text-[10px] sm:text-[12px] leading-[14px] sm:leading-[16px] ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                      {item.name}
                    </span>
                    <span className={`text-xs sm:text-[14px] leading-[16px] sm:leading-[20px] ml-auto ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`} style={{ fontWeight: 700 }}>
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consumer Detail Panel */}
      {selectedConsumer && (
        <div 
          style={getPremiumCardStyle(theme)}
          className="p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Consumer Detail: {selectedConsumer}</h3>
              <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Detailed activity and usage metrics
              </p>
            </div>
            <button
              onClick={() => setSelectedConsumer(null)}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              ✕
            </button>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={activityOverTimeData}>
              <defs>
                <linearGradient id="activityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} opacity={0.3} />
              <XAxis dataKey="day" stroke={chartColors.axis} style={{ fontSize: '11px' }} />
              <YAxis stroke={chartColors.axis} style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: chartColors.tooltipBg, 
                  border: `1px solid ${chartColors.tooltipBorder}`,
                  borderRadius: '8px',
                  color: chartColors.tooltipText
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="requests" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      </div>
    </>
  );
}