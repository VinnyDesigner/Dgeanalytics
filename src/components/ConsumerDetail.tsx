import { ArrowLeft, Mail, Phone, Building2, Key, Calendar, Activity, TrendingUp, CheckCircle } from 'lucide-react';
import { MetricCard } from './MetricCard';

interface Consumer {
  name: string;
  type: string;
  requests: number;
  successRate: number;
  lastAccess: string;
  status: string;
  email: string;
  phone: string;
  department: string;
  apiKey: string;
}

interface ConsumerDetailProps {
  consumerName: string;
  onBack: () => void;
  theme?: 'dark' | 'light';
}

// All Consumers Data (same as in ConsumerInsights)
const allConsumersData: Consumer[] = [
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

export function ConsumerDetail({ consumerName, onBack, theme = 'dark' }: ConsumerDetailProps) {
  // Find the consumer data
  const consumer = allConsumersData.find(c => c.name === consumerName);

  if (!consumer) {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Consumers</span>
          </button>
        </div>
        <p className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>Consumer not found</p>
      </div>
    );
  }

  // Format requests number
  const formatRequests = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <div className="space-y-8">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
            theme === 'dark'
              ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Consumers</span>
        </button>
      </div>

      {/* Consumer Header */}
      <div>
        <h1 className="text-3xl tracking-tight mb-2">{consumer.name}</h1>
        <p className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
          Detailed information and metrics for this consumer
        </p>
      </div>

      {/* Metric Cards - Same design as All Consumers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Requests"
          value={formatRequests(consumer.requests)}
          icon={Activity}
          trend={{ value: '15.3%', positive: true }}
          gradient="from-blue-600 to-cyan-600"
          subtitle="Last 30 days"
          theme={theme}
        />
        <MetricCard
          title="Success Rate"
          value={`${consumer.successRate}%`}
          icon={CheckCircle}
          trend={{ value: '2.1%', positive: true }}
          gradient="from-emerald-600 to-teal-600"
          subtitle="Request success"
          theme={theme}
        />
        <MetricCard
          title="Consumer Type"
          value={consumer.type}
          icon={Building2}
          gradient="from-indigo-600 to-purple-600"
          subtitle={consumer.department}
          theme={theme}
        />
        <MetricCard
          title="Last Access"
          value={consumer.lastAccess.split(',')[0]}
          icon={Calendar}
          gradient="from-amber-600 to-orange-600"
          subtitle={consumer.lastAccess.split(',')[1]?.trim() || '2024'}
          theme={theme}
        />
      </div>

      {/* Consumer Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Email Address"
          value={consumer.email}
          icon={Mail}
          gradient="from-emerald-600 to-teal-600"
          subtitle="Primary contact"
          theme={theme}
        />
        <MetricCard
          title="Phone Number"
          value={consumer.phone}
          icon={Phone}
          gradient="from-violet-600 to-purple-600"
          subtitle="Contact"
          theme={theme}
        />
        <MetricCard
          title="Department"
          value={consumer.department}
          icon={Building2}
          gradient="from-sky-600 to-blue-600"
          subtitle={consumer.type}
          theme={theme}
        />
      </div>

      {/* Usage Status */}
      <div 
        style={theme === 'light' ? {
          borderRadius: '14px',
          border: '4px solid #FFF',
          background: '#F8F8F8',
          boxShadow: '0 10px 15px -3px rgba(229, 231, 235, 0.50), 0 4px 6px -4px rgba(229, 231, 235, 0.50)'
        } : {
          borderRadius: '10px',
          border: '1px solid rgba(44, 44, 44, 0.59)',
          background: '#19191A'
        }}
        className={`p-6 ${theme === 'dark' ? 'rounded-xl' : ''}`}
      >
        <h3 className="text-xl mb-4">Usage Status</h3>
        <div className="flex items-center gap-3">
          <div className={`px-4 py-2 rounded-full ${
            consumer.status === 'high' 
              ? 'bg-emerald-500/20 text-emerald-400' 
              : consumer.status === 'medium'
              ? 'bg-blue-500/20 text-blue-400'
              : 'bg-amber-500/20 text-amber-400'
          }`}>
            {consumer.status === 'high' ? 'High Usage' : consumer.status === 'medium' ? 'Medium Usage' : 'Low Usage'}
          </div>
          <TrendingUp className={`w-5 h-5 ${
            consumer.status === 'high' ? 'text-emerald-400' : 'text-blue-400'
          }`} />
        </div>
      </div>
    </div>
  );
}