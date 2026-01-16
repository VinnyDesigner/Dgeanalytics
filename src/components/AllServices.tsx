import { useState } from 'react';
import { ChevronDown, ChevronRight, Search, ArrowLeft } from 'lucide-react';
import React from 'react';

const allServicesData = [
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
  { 
    name: 'Building Permits Service', 
    type: 'FeatureServer', 
    accessType: 'Secure', 
    criticality: 'Mission-Critical', 
    lifecycle: 'Active', 
    department: 'Municipality', 
    requests: '620K/month',
    dataSensitivity: 'Confidential',
    serviceOwner: 'Permits Division',
    lastReview: 'Nov 8, 2024',
    businessPurpose: 'Track and manage building permit applications and approvals'
  },
  { 
    name: 'Traffic Flow Monitor', 
    type: 'MapServer', 
    accessType: 'Public', 
    criticality: 'High', 
    lifecycle: 'Active', 
    department: 'Transport Authority', 
    requests: '540K/month',
    dataSensitivity: 'Public',
    serviceOwner: 'Smart City Operations',
    lastReview: 'Dec 5, 2024',
    businessPurpose: 'Real-time traffic monitoring and congestion management'
  },
  { 
    name: 'Environmental Monitoring', 
    type: 'FeatureServer', 
    accessType: 'Public', 
    criticality: 'High', 
    lifecycle: 'Active', 
    department: 'Environment Agency', 
    requests: '480K/month',
    dataSensitivity: 'Public',
    serviceOwner: 'Environmental Data Team',
    lastReview: 'Oct 20, 2024',
    businessPurpose: 'Monitor air quality, water quality, and environmental indicators'
  },
  { 
    name: 'Public Transport Routes', 
    type: 'MapServer', 
    accessType: 'Public', 
    criticality: 'Medium', 
    lifecycle: 'Active', 
    department: 'Transport Authority', 
    requests: '410K/month',
    dataSensitivity: 'Public',
    serviceOwner: 'Public Transport Division',
    lastReview: 'Nov 18, 2024',
    businessPurpose: 'Display bus and metro routes for public transportation planning'
  },
  { 
    name: 'Emergency Services Locations', 
    type: 'FeatureServer', 
    accessType: 'Restricted', 
    criticality: 'Mission-Critical', 
    lifecycle: 'Active', 
    department: 'Emergency Services', 
    requests: '380K/month',
    dataSensitivity: 'Restricted',
    serviceOwner: 'Emergency Operations Center',
    lastReview: 'Dec 2, 2024',
    businessPurpose: 'Locate fire stations, police stations, and hospitals for emergency response'
  },
  { 
    name: 'School District Boundaries', 
    type: 'MapServer', 
    accessType: 'Public', 
    criticality: 'Medium', 
    lifecycle: 'Active', 
    department: 'Education Department', 
    requests: '320K/month',
    dataSensitivity: 'Public',
    serviceOwner: 'Education Planning Team',
    lastReview: 'Sep 25, 2024',
    businessPurpose: 'Define school catchment areas and enrollment boundaries'
  },
  { 
    name: 'Waste Collection Routes', 
    type: 'MapServer', 
    accessType: 'Secure', 
    criticality: 'Medium', 
    lifecycle: 'Active', 
    department: 'Public Works', 
    requests: '280K/month',
    dataSensitivity: 'Internal',
    serviceOwner: 'Sanitation Services',
    lastReview: 'Oct 10, 2024',
    businessPurpose: 'Optimize waste collection routes and schedules'
  },
  { 
    name: 'Historical Sites Registry', 
    type: 'FeatureServer', 
    accessType: 'Public', 
    criticality: 'Low', 
    lifecycle: 'Active', 
    department: 'Culture & Heritage', 
    requests: '180K/month',
    dataSensitivity: 'Public',
    serviceOwner: 'Heritage Preservation Team',
    lastReview: 'Aug 15, 2024',
    businessPurpose: 'Document and preserve information about historical landmarks'
  },
  { 
    name: 'Park Facilities Locator', 
    type: 'MapServer', 
    accessType: 'Public', 
    criticality: 'Low', 
    lifecycle: 'Active', 
    department: 'Parks & Recreation', 
    requests: '150K/month',
    dataSensitivity: 'Public',
    serviceOwner: 'Recreation Services',
    lastReview: 'Sep 5, 2024',
    businessPurpose: 'Help residents locate parks, playgrounds, and recreational facilities'
  },
  { 
    name: 'Street Lighting Network', 
    type: 'FeatureServer', 
    accessType: 'Secure', 
    criticality: 'Medium', 
    lifecycle: 'Active', 
    department: 'Public Works', 
    requests: '95K/month',
    dataSensitivity: 'Internal',
    serviceOwner: 'Infrastructure Maintenance',
    lastReview: 'Nov 1, 2024',
    businessPurpose: 'Manage street light maintenance and energy consumption'
  },
];

interface AllServicesProps {
  theme?: 'dark' | 'light';
  onBack: () => void;
}

export function AllServices({ theme = 'dark', onBack }: AllServicesProps) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toggleRowExpansion = (serviceName: string) => {
    setExpandedRow(expandedRow === serviceName ? null : serviceName);
  };

  const handleViewAnalytics = (serviceName: string) => {
    alert(`Opening analytics dashboard for: ${serviceName}`);
  };

  const handleEditClassification = (serviceName: string) => {
    alert(`Opening classification editor for: ${serviceName}`);
  };

  // Filter services based on search query
  const filteredServices = allServicesData.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-[0px] mr-[0px] mb-[16px] sm:mb-[24px] ml-[0px] gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onBack}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl tracking-tight mb-1 sm:mb-2 font-bold">All Services</h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Complete registry of all available services
            </p>
          </div>
        </div>
      </div>

      {/* Search and Table */}
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
        className="p-4 sm:p-6"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold">Service Registry</h3>
            <p className={`text-xs sm:text-sm mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              {filteredServices.length} services found
            </p>
          </div>
          <div className="relative w-full sm:w-64 md:w-80">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${theme === 'dark' ? 'text-slate-500' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm transition-all ${
                theme === 'dark'
                  ? 'bg-slate-800/60 border-slate-700/50 text-slate-200 placeholder-slate-500 focus:border-[#063360] focus:ring-2 focus:ring-[#063360]/20'
                  : 'bg-white border-gray-300 text-gray-700 placeholder-gray-400 focus:border-[#063360] focus:ring-2 focus:ring-[#063360]/20'
              } focus:outline-none`}
            />
          </div>
        </div>

        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className={`border-b ${theme === 'dark' ? 'border-slate-800' : 'border-gray-200'}`}>
                <th className={`text-left py-2 sm:py-3 px-3 sm:px-6 text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Service Name</th>
                <th className={`text-left py-2 sm:py-3 px-3 sm:px-6 text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Type</th>
                <th className={`text-left py-2 sm:py-3 px-3 sm:px-6 text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Last Review</th>
                <th className={`text-left py-3 px-6 text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>Requests</th>
              </tr>
            </thead>
            <tbody>
              {paginatedServices.map((service, index) => (
                <tr 
                  key={service.name}
                  className={`border-b transition-colors ${
                    theme === 'dark' 
                      ? 'border-slate-800/50 hover:bg-slate-800/30' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <td className="py-4 px-6">
                    <span className={theme === 'dark' ? 'text-slate-200' : 'text-gray-700'}>{service.name}</span>
                  </td>
                  <td className={`py-4 px-6 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    {service.type}
                  </td>
                  <td className={`py-4 px-6 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    {service.lastReview}
                  </td>
                  <td className={`py-4 px-6 ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`}>
                    {service.requests}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredServices.length === 0 && (
          <div className={`text-center py-12 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            <p>No services found matching your search criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredServices.length > 0 && (
          <div className={`flex items-center justify-between mt-6 pt-6 border-t ${
            theme === 'dark' ? 'border-slate-800' : 'border-gray-200'
          }`}>
            <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredServices.length)} of {filteredServices.length} services
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                  currentPage === 1
                    ? theme === 'dark'
                      ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                      : 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : theme === 'dark'
                      ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Previous
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-2 rounded-lg text-sm transition-all ${
                        currentPage === pageNum
                          ? 'bg-[#063360] text-white'
                          : theme === 'dark'
                            ? 'text-slate-300 hover:bg-slate-800'
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                  currentPage === totalPages
                    ? theme === 'dark'
                      ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                      : 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : theme === 'dark'
                      ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
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