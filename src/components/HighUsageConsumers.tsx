import { ArrowLeft, TrendingUp, Search, Calendar, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, Fragment } from 'react';

interface HighUsageConsumersProps {
  onBack: () => void;
  theme?: 'dark' | 'light';
}

interface Consumer {
  name: string;
  type: 'Public' | 'Commercial' | 'Academic';
  requests: number;
  successRate: number;
  lastAccess: string;
  email: string;
  phone: string;
  department: string;
  apiKey: string;
}

const consumersData: Consumer[] = [
  { name: 'Abu Dhabi Airports Company', type: 'Public', requests: 304825, successRate: 99.5, lastAccess: '2025-12-23', email: 'contact@adac.ae', phone: '+971-2-123-4567', department: 'Airport Operations', apiKey: 'adac_prod_8x9y2z3a4b5c6d7e' },
  { name: 'Abu Dhabi Agriculture and Food Safety Authority', type: 'Public', requests: 352893, successRate: 98.8, lastAccess: '2025-12-24', email: 'info@adafsa.ae', phone: '+971-4-555-1234', department: 'Food Safety', apiKey: 'adafsa_prod_1a2b3c4d5e6f7g8h' },
  { name: 'Abu Dhabi Municipality', type: 'Public', requests: 388379, successRate: 99.2, lastAccess: '2025-12-25', email: 'support@adm.ae', phone: '+971-2-777-8899', department: 'Municipal Services', apiKey: 'adm_prod_9h8g7f6e5d4c3b2a' },
  { name: 'TAQA Water Solution Company', type: 'Public', requests: 304995, successRate: 97.6, lastAccess: '2025-12-25', email: 'info@taqa.ae', phone: '+971-3-888-9900', department: 'Water Services', apiKey: 'taqa_prod_5k4j3h2g1f0e9d8c' },
  { name: 'TAQA Distribution', type: 'Public', requests: 162441, successRate: 98.3, lastAccess: '2025-12-22', email: 'distribution@taqa.ae', phone: '+971-2-333-4455', department: 'Distribution Network', apiKey: 'taqad_prod_7b6n5m4k3j2h1g0f' },
  { name: 'Abu Dhabi Ports Company', type: 'Public', requests: 205313, successRate: 99.1, lastAccess: '2025-12-25', email: 'info@adports.ae', phone: '+971-4-222-3333', department: 'Port Operations', apiKey: 'adports_prod_3x4y5z6a7b8c9d0e' },
  { name: 'Emirates Integrated Telecommunication Company', type: 'Public', requests: 142807, successRate: 98.9, lastAccess: '2025-12-25', email: 'contact@eitc.ae', phone: '+971-4-111-2222', department: 'Telecommunications', apiKey: 'eitc_prod_2w3x4y5z6a7b8c9d' },
  { name: 'Department of Municipalities and Transport', type: 'Public', requests: 114687, successRate: 97.8, lastAccess: '2025-12-24', email: 'info@dmt.ae', phone: '+971-4-999-8888', department: 'Transport Division', apiKey: 'dmt_prod_8v9w0x1y2z3a4b5c' },
  { name: 'Environment Agency Abu Dhabi', type: 'Public', requests: 155377, successRate: 98.5, lastAccess: '2025-12-25', email: 'contact@ead.ae', phone: '+971-2-444-5555', department: 'Environmental Protection', apiKey: 'ead_prod_6u7v8w9x0y1z2a3b' },
  { name: 'Emirates Telecommunication Corporation', type: 'Public', requests: 85179, successRate: 96.9, lastAccess: '2025-12-25', email: 'info@etc.ae', phone: '+971-3-666-7777', department: 'Network Operations', apiKey: 'etc_prod_4t5u6v7w8x9y0z1a' },
  { name: 'Ministry of Interior', type: 'Public', requests: 298541, successRate: 99.3, lastAccess: '2025-12-25', email: 'info@moi.gov.ae', phone: '+971-2-441-5555', department: 'National Security', apiKey: 'moi_prod_1x2y3z4a5b6c7d8e' },
  { name: 'Statistics Center Abu Dhabi', type: 'Public', requests: 189234, successRate: 98.7, lastAccess: '2025-12-24', email: 'contact@scad.ae', phone: '+971-2-810-9999', department: 'Data Analytics', apiKey: 'scad_prod_2a3b4c5d6e7f8g9h' },
  { name: 'Department of Community Development', type: 'Public', requests: 176890, successRate: 97.9, lastAccess: '2025-12-25', email: 'info@dcd.gov.ae', phone: '+971-2-699-9999', department: 'Community Services', apiKey: 'dcd_prod_3b4c5d6e7f8g9h0i' },
  { name: 'TAMM', type: 'Public', requests: 421567, successRate: 99.6, lastAccess: '2025-12-25', email: 'support@tamm.ae', phone: '+971-600-535-555', department: 'Digital Government', apiKey: 'tamm_prod_4c5d6e7f8g9h0i1j' },
  { name: 'Family Development Foundation', type: 'Public', requests: 143298, successRate: 98.2, lastAccess: '2025-12-24', email: 'info@fdf.gov.ae', phone: '+971-2-441-9444', department: 'Family Services', apiKey: 'fdf_prod_5d6e7f8g9h0i1j2k' },
  { name: 'General Directorate of Abu Dhabi Police', type: 'Public', requests: 267890, successRate: 99.4, lastAccess: '2025-12-25', email: 'contact@adpolice.gov.ae', phone: '+971-2-446-1461', department: 'Law Enforcement', apiKey: 'adp_prod_6e7f8g9h0i1j2k3l' },
  { name: 'Abu Dhabi Chamber of Commerce and Industry', type: 'Commercial', requests: 198765, successRate: 98.6, lastAccess: '2025-12-25', email: 'info@adcci.gov.ae', phone: '+971-2-621-4000', department: 'Business Development', apiKey: 'adcci_prod_7f8g9h0i1j2k3l4m' },
  { name: 'Abu Dhabi Department of Education and Knowledge', type: 'Public', requests: 234567, successRate: 99.1, lastAccess: '2025-12-25', email: 'contact@adek.ae', phone: '+971-2-501-5555', department: 'Education Services', apiKey: 'adek_prod_8g9h0i1j2k3l4m5n' },
  { name: 'Integrated Transportation Center', type: 'Public', requests: 156789, successRate: 98.4, lastAccess: '2025-12-24', email: 'info@itc.gov.ae', phone: '+971-2-418-3333', department: 'Transport Planning', apiKey: 'itc_prod_9h0i1j2k3l4m5n6o' },
  { name: 'Department of Economic Development', type: 'Public', requests: 289432, successRate: 99.0, lastAccess: '2025-12-25', email: 'info@added.gov.ae', phone: '+971-2-666-2888', department: 'Economic Planning', apiKey: 'ded_prod_0i1j2k3l4m5n6o7p' },
  { name: 'Abu Dhabi National Oil Company', type: 'Commercial', requests: 445678, successRate: 99.7, lastAccess: '2025-12-25', email: 'contact@adnoc.ae', phone: '+971-2-602-9000', department: 'Operations', apiKey: 'adnoc_prod_1j2k3l4m5n6o7p8q' },
  { name: 'Abu Dhabi Investment Office', type: 'Public', requests: 178934, successRate: 98.8, lastAccess: '2025-12-25', email: 'info@adio.gov.ae', phone: '+971-2-333-6333', department: 'Investment Promotion', apiKey: 'adio_prod_2k3l4m5n6o7p8q9r' },
  { name: 'Emirates Nuclear Energy Corporation', type: 'Commercial', requests: 167543, successRate: 99.5, lastAccess: '2025-12-24', email: 'info@enec.gov.ae', phone: '+971-2-666-9400', department: 'Nuclear Operations', apiKey: 'enec_prod_3l4m5n6o7p8q9r0s' },
  { name: 'Etihad Rail', type: 'Commercial', requests: 134567, successRate: 98.3, lastAccess: '2025-12-25', email: 'contact@etihadrail.ae', phone: '+971-2-418-2020', department: 'Rail Operations', apiKey: 'er_prod_4m5n6o7p8q9r0s1t' },
  { name: 'Department of Health', type: 'Public', requests: 312456, successRate: 99.2, lastAccess: '2025-12-25', email: 'info@doh.gov.ae', phone: '+971-2-449-3333', department: 'Healthcare Services', apiKey: 'doh_prod_5n6o7p8q9r0s1t2u' },
  { name: 'National Crises & Emergency Management Authority', type: 'Public', requests: 198765, successRate: 99.6, lastAccess: '2025-12-25', email: 'info@ncema.gov.ae', phone: '+971-2-403-2220', department: 'Emergency Response', apiKey: 'ncema_prod_6o7p8q9r0s1t2u3v' },
  { name: 'National Center of Meteorology & Seismology', type: 'Public', requests: 145678, successRate: 98.9, lastAccess: '2025-12-24', email: 'info@ncms.ae', phone: '+971-2-445-4433', department: 'Weather Services', apiKey: 'ncms_prod_7p8q9r0s1t2u3v4w' },
  { name: 'ALDAR', type: 'Commercial', requests: 223456, successRate: 98.7, lastAccess: '2025-12-25', email: 'contact@aldar.com', phone: '+971-2-810-5555', department: 'Property Development', apiKey: 'aldar_prod_8q9r0s1t2u3v4w5x' },
  { name: 'Zayed Higher Organization', type: 'Public', requests: 112345, successRate: 98.1, lastAccess: '2025-12-24', email: 'info@zho.gov.ae', phone: '+971-2-444-7800', department: 'Special Needs Services', apiKey: 'zho_prod_9r0s1t2u3v4w5x6y' },
  { name: 'Department of Culture and Tourism', type: 'Public', requests: 256789, successRate: 99.0, lastAccess: '2025-12-25', email: 'info@dct.gov.ae', phone: '+971-2-444-0444', department: 'Tourism Services', apiKey: 'dct_prod_0s1t2u3v4w5x6y7z' },
  { name: 'Al Ain Wildlife Park & Resort', type: 'Public', requests: 98765, successRate: 97.8, lastAccess: '2025-12-24', email: 'info@awpr.ae', phone: '+971-3-799-2000', department: 'Wildlife Management', apiKey: 'awpr_prod_1t2u3v4w5x6y7z8a' },
  { name: 'General Authority of Islamic Affairs and Endowment', type: 'Public', requests: 134567, successRate: 98.5, lastAccess: '2025-12-25', email: 'info@awqaf.gov.ae', phone: '+971-2-446-4444', department: 'Islamic Services', apiKey: 'awqaf_prod_2u3v4w5x6y7z8a9b' },
  { name: 'The Center of Waste Management Abu Dhabi', type: 'Public', requests: 187654, successRate: 98.6, lastAccess: '2025-12-25', email: 'info@tadweer.ae', phone: '+971-2-555-9999', department: 'Waste Operations', apiKey: 'tadweer_prod_3v4w5x6y7z8a9b0c' },
  { name: 'Abu Dhabi Monitoring and Control Centre', type: 'Public', requests: 276543, successRate: 99.3, lastAccess: '2025-12-25', email: 'contact@admcc.ae', phone: '+971-2-417-8888', department: 'Monitoring Services', apiKey: 'admcc_prod_4w5x6y7z8a9b0c1d' },
];

export function HighUsageConsumers({ onBack, theme = 'dark' }: HighUsageConsumersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const itemsPerPage = 10;

  // Calculate totals
  const totalConsumers = consumersData.length;
  const totalRequests = consumersData.reduce((sum, consumer) => sum + consumer.requests, 0);
  const avgSuccessRate = (consumersData.reduce((sum, consumer) => sum + consumer.successRate, 0) / totalConsumers).toFixed(1);

  // Filter and paginate
  const filteredConsumers = consumersData.filter(consumer =>
    consumer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    consumer.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredConsumers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedConsumers = filteredConsumers.slice(startIndex, startIndex + itemsPerPage);

  const formatNumber = (num: number) => num.toLocaleString();

  const getTypeBadgeColors = (type: string) => {
    switch (type) {
      case 'Public':
        return theme === 'dark' 
          ? 'bg-yellow-900/30 text-yellow-300 border-yellow-700/30' 
          : 'bg-yellow-50 text-yellow-800 border-yellow-200';
      case 'Commercial':
        return theme === 'dark' 
          ? 'bg-cyan-900/30 text-cyan-300 border-cyan-700/30' 
          : 'bg-cyan-50 text-cyan-800 border-cyan-200';
      case 'Academic':
        return theme === 'dark' 
          ? 'bg-purple-900/30 text-purple-300 border-purple-700/30' 
          : 'bg-purple-50 text-purple-800 border-purple-200';
      default:
        return theme === 'dark' 
          ? 'bg-gray-800 text-gray-300 border-gray-700' 
          : 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const toggleRow = (index: number) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(index)) {
      newExpandedRows.delete(index);
    } else {
      newExpandedRows.add(index);
    }
    setExpandedRows(newExpandedRows);
  };

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className={`p-2 rounded-lg transition-colors ${
            theme === 'dark'
              ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
              : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className={`text-3xl tracking-tight mb-2 ${
            theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
          }`}>
            High-Usage Consumers
          </h1>
          <p className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
            Top performing consumers with highest request volumes and activity levels
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Consumers */}
        <div
          className="p-6 rounded-xl"
          style={theme === 'light' ? {
            borderRadius: '14px',
            border: '4px solid #FFF',
            background: '#F8F8F8',
            boxShadow: '0 10px 15px -3px rgba(229, 231, 235, 0.50), 0 4px 6px -4px rgba(229, 231, 235, 0.50)'
          } : {
            background: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            borderRadius: '14px'
          }}
        >
          <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Total Consumers
          </p>
          <p className={`text-3xl ${theme === 'dark' ? 'text-slate-100' : 'text-gray-900'}`}>
            {totalConsumers}
          </p>
        </div>

        {/* Total Requests */}
        <div
          className="p-6 rounded-xl"
          style={theme === 'light' ? {
            borderRadius: '14px',
            border: '4px solid #FFF',
            background: '#F8F8F8',
            boxShadow: '0 10px 15px -3px rgba(229, 231, 235, 0.50), 0 4px 6px -4px rgba(229, 231, 235, 0.50)'
          } : {
            background: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            borderRadius: '14px'
          }}
        >
          <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Total Requests
          </p>
          <p className={`text-3xl ${theme === 'dark' ? 'text-slate-100' : 'text-gray-900'}`}>
            {formatNumber(totalRequests)}
          </p>
        </div>

        {/* Avg Success Rate */}
        <div
          className="p-6 rounded-xl"
          style={theme === 'light' ? {
            borderRadius: '14px',
            border: '4px solid #FFF',
            background: '#F8F8F8',
            boxShadow: '0 10px 15px -3px rgba(229, 231, 235, 0.50), 0 4px 6px -4px rgba(229, 231, 235, 0.50)'
          } : {
            background: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            borderRadius: '14px'
          }}
        >
          <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Avg Success Rate
          </p>
          <p className={`text-3xl ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
            {avgSuccessRate}%
          </p>
        </div>
      </div>

      {/* Main Table Container */}
      <div
        className="p-6 rounded-xl"
        style={theme === 'light' ? {
          borderRadius: '14px',
          border: '4px solid #FFF',
          background: '#F8F8F8',
          boxShadow: '0 10px 15px -3px rgba(229, 231, 235, 0.50), 0 4px 6px -4px rgba(229, 231, 235, 0.50)'
        } : {
          background: 'rgba(15, 23, 42, 0.4)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          borderRadius: '14px'
        }}
      >
        {/* Table Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-lg ${theme === 'dark' ? 'text-slate-100' : 'text-gray-900'}`}>
            High-Usage Consumer Details
          </h3>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              theme === 'dark' ? 'text-slate-500' : 'text-gray-400'
            }`} />
            <input
              type="text"
              placeholder="Search consumers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`pl-10 pr-4 py-2 rounded-lg border outline-none transition-all w-80 ${
                theme === 'dark'
                  ? 'bg-slate-800/50 border-slate-700/50 text-slate-200 placeholder-slate-500 focus:border-slate-600'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-400'
              }`}
              style={theme === 'light' ? {
                boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)'
              } : {}}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${theme === 'dark' ? 'border-slate-700/50' : 'border-gray-200'}`}>
                <th className="w-8"></th>
                <th className={`text-left py-3 px-6 text-xs uppercase tracking-wider ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  Consumer Name
                </th>
                <th className={`text-left py-3 px-6 text-xs uppercase tracking-wider ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  Type
                </th>
                <th className={`text-left py-3 px-6 text-xs uppercase tracking-wider ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  Total Requests
                </th>
                <th className={`text-left py-3 px-6 text-xs uppercase tracking-wider ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  Success Rate
                </th>
                <th className={`text-left py-3 px-6 text-xs uppercase tracking-wider ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  Last Access
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedConsumers.map((consumer, index) => [
                <tr 
                  key={`row-${index}`}
                  className={`transition-colors border-b ${
                    theme === 'dark' 
                      ? 'border-slate-700/30 hover:bg-slate-800/30' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <td className="py-4 px-4">
                    <button
                      onClick={() => toggleRow(index)}
                      className={`transition-transform ${expandedRows.has(index) ? 'rotate-0' : '-rotate-90'}`}
                    >
                      <ChevronDown className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`} />
                    </button>
                  </td>
                  <td className={`py-4 px-6 ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`}>
                    {consumer.name}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${getTypeBadgeColors(consumer.type)}`}>
                      {consumer.type}
                    </span>
                  </td>
                  <td className={`py-4 px-6 ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`}>
                    {formatNumber(consumer.requests)}
                  </td>
                  <td className={`py-4 px-6 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    {consumer.successRate}%
                  </td>
                  <td className={`py-4 px-6 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {consumer.lastAccess}
                    </div>
                  </td>
                </tr>,
                expandedRows.has(index) && (
                  <tr key={`expanded-${index}`} className={theme === 'dark' ? 'bg-slate-800/20' : 'bg-gray-50'}>
                    <td colSpan={6} className="py-6 px-4">
                      <div 
                        className={`mx-4 p-6 rounded-lg ${
                          theme === 'dark' 
                            ? 'bg-slate-900/50 border border-slate-700/50' 
                            : 'bg-white border border-gray-200'
                        }`}
                        style={theme === 'light' ? {
                          boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)'
                        } : {}}
                      >
                        <h4 className={`text-sm mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-900'}`}>
                          Consumer Details
                        </h4>
                        <div className="grid grid-cols-3 gap-6">
                          <div>
                            <p className={`text-xs mb-1 ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>
                              Email
                            </p>
                            <p className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-900'}`}>
                              {consumer.email}
                            </p>
                          </div>
                          <div>
                            <p className={`text-xs mb-1 ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>
                              Phone
                            </p>
                            <p className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-900'}`}>
                              {consumer.phone}
                            </p>
                          </div>
                          <div>
                            <p className={`text-xs mb-1 ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>
                              Department
                            </p>
                            <p className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-900'}`}>
                              {consumer.department}
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              ].filter(Boolean))}
            </tbody>
          </table>
        </div>

        {/* No Results Message */}
        {filteredConsumers.length === 0 && (
          <div className="text-center py-12">
            <p className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
              No consumers found matching your search.
            </p>
          </div>
        )}

        {/* Pagination Footer */}
        {filteredConsumers.length > 0 && (
          <div className={`flex items-center justify-between mt-6 pt-4 border-t ${
            theme === 'dark' ? 'border-slate-700/50' : 'border-gray-200'
          }`}>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredConsumers.length)} of {filteredConsumers.length} consumers
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  theme === 'dark'
                    ? 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg text-sm transition-all ${
                      currentPage === page
                        ? theme === 'dark'
                          ? 'bg-[#063360] text-white'
                          : 'bg-[#063360] text-white'
                        : theme === 'dark'
                          ? 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  theme === 'dark'
                    ? 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}