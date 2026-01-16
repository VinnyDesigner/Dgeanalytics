import { useState } from 'react';
import { Search, UserPlus, Edit2, Trash2, X, ChevronDown } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'User';
  status: 'Active' | 'Inactive';
  lastLogin: string;
}

interface LoginAudit {
  id: string;
  user: string;
  ipAddress: string;
  timestamp: string;
  status: 'Success' | 'Failed';
}

interface UserManagementProps {
  theme?: 'dark' | 'light';
}

export function UserManagement({ theme = 'light' }: UserManagementProps) {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'Ahmed Al-Mansouri',
      email: 'ahmed.mansouri@gov.ae',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-12-24 07:45 AM'
    },
    {
      id: '2',
      name: 'Fatima Hassan',
      email: 'fatima.hassan@gov.ae',
      role: 'User',
      status: 'Active',
      lastLogin: '2024-12-24 03:20 PM'
    },
    {
      id: '3',
      name: 'Mohammed Ali',
      email: 'mohammed.ali@gov.ae',
      role: 'User',
      status: 'Active',
      lastLogin: '2024-12-23 11:15 AM'
    },
    {
      id: '4',
      name: 'Sara Abdullah',
      email: 'sara.abdullah@gov.ae',
      role: 'User',
      status: 'Inactive',
      lastLogin: '2024-12-20 09:45 AM'
    },
    {
      id: '5',
      name: 'Khalid Ibrahim',
      email: 'khalid.ibrahim@gov.ae',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-12-24 02:30 PM'
    }
  ]);

  const [loginAudits] = useState<LoginAudit[]>([
    { id: '1', user: 'Ahmed Al-Mansouri', ipAddress: '192.168.1.101', timestamp: '2024-12-24 07:45 AM', status: 'Success' },
    { id: '2', user: 'Fatima Hassan', ipAddress: '192.168.1.102', timestamp: '2024-12-24 03:20 PM', status: 'Success' },
    { id: '3', user: 'Mohammed Ali', ipAddress: '192.168.1.103', timestamp: '2024-12-23 11:15 AM', status: 'Success' },
    { id: '4', user: 'Sara Abdullah', ipAddress: '192.168.1.104', timestamp: '2024-12-20 09:45 AM', status: 'Failed' },
    { id: '5', user: 'Khalid Ibrahim', ipAddress: '192.168.1.105', timestamp: '2024-12-24 02:30 PM', status: 'Success' },
    { id: '6', user: 'Ahmed Al-Mansouri', ipAddress: '192.168.1.101', timestamp: '2024-12-23 08:00 AM', status: 'Success' },
    { id: '7', user: 'Fatima Hassan', ipAddress: '192.168.1.102', timestamp: '2024-12-22 01:30 PM', status: 'Success' },
    { id: '8', user: 'Mohammed Ali', ipAddress: '192.168.1.103', timestamp: '2024-12-22 10:20 AM', status: 'Success' },
    { id: '9', user: 'Khalid Ibrahim', ipAddress: '192.168.1.105', timestamp: '2024-12-21 04:15 PM', status: 'Success' },
    { id: '10', user: 'Sara Abdullah', ipAddress: '192.168.1.104', timestamp: '2024-12-19 02:50 PM', status: 'Failed' }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  
  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User' as 'Admin' | 'User'
  });

  const handleAddUser = () => {
    const newUser: User = {
      id: String(users.length + 1),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      status: 'Active',
      lastLogin: new Date().toLocaleString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      })
    };
    setUsers([...users, newUser]);
    setShowAddModal(false);
    setFormData({ name: '', email: '', role: 'User' });
  };

  const handleEditUser = () => {
    if (selectedUser) {
      setUsers(users.map(user => 
        user.id === selectedUser.id 
          ? { ...user, name: formData.name, email: formData.email, role: formData.role }
          : user
      ));
      setShowEditModal(false);
      setSelectedUser(null);
      setFormData({ name: '', email: '', role: 'User' });
    }
  };

  const handleDeleteUser = () => {
    if (selectedUser) {
      setUsers(users.filter(user => user.id !== selectedUser.id));
      setShowDeleteModal(false);
      setSelectedUser(null);
    }
  };

  const openEditModal = (user: User) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role
    });
    setShowEditModal(true);
  };

  const openDeleteModal = (user: User) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'All Roles' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'All Status' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-2xl tracking-tight mb-1 ${
            theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
          }`}>
            User Management
          </h1>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Manage system users and access control
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors shadow-sm ${
            theme === 'dark'
              ? 'bg-slate-800/80 border border-slate-700/50 text-slate-200 hover:bg-slate-700/80'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <UserPlus className="w-4 h-4" />
          <span className="text-sm font-medium">Add New User</span>
        </button>
      </div>

      {/* User Listing Card */}
      <div 
        className={`rounded-lg shadow-sm overflow-hidden ${
          theme === 'dark'
            ? 'bg-slate-800/50 border border-slate-700/50 backdrop-blur-xl'
            : ''
        }`}
        style={theme === 'light' ? {
          borderRadius: '14px',
          border: '4px solid #FFF',
          background: '#F8F8F8',
          boxShadow: '0 10px 15px -3px rgba(229, 231, 235, 0.50), 0 4px 6px -4px rgba(229, 231, 235, 0.50)'
        } : undefined}
      >
        <div className={`px-6 py-4 border-b ${
          theme === 'dark' ? 'border-slate-700/50' : 'border-gray-200'
        }`}>
          <h3 className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
          }`}>
            User Listing
          </h3>
        </div>

        {/* Search and Filters */}
        <div className={`px-6 py-4 border-b ${
          theme === 'dark' 
            ? 'bg-slate-800/30 border-slate-700/50' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                theme === 'dark' ? 'text-slate-500' : 'text-gray-400'
              }`} />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:border-[#063360] focus:ring-1 focus:ring-[#063360] ${
                  theme === 'dark'
                    ? 'bg-slate-900/50 border border-slate-700/50 text-slate-200 placeholder-slate-500'
                    : 'bg-white border border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            {/* Role Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowRoleDropdown(!showRoleDropdown);
                  setShowStatusDropdown(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm min-w-[140px] justify-between ${
                  theme === 'dark'
                    ? 'bg-slate-900/50 border border-slate-700/50 text-slate-200 hover:bg-slate-800/50'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{roleFilter}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showRoleDropdown && (
                <div className={`absolute mt-1 w-full rounded-lg shadow-lg overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-slate-800 border border-slate-700/50'
                    : 'bg-white border border-gray-200'
                }`}
                style={{ zIndex: 9999 }}
                >
                  {['All Roles', 'Admin', 'User'].map((role) => (
                    <div
                      key={role}
                      onClick={() => {
                        setRoleFilter(role);
                        setShowRoleDropdown(false);
                      }}
                      className={`px-4 py-2 text-sm cursor-pointer ${
                        theme === 'dark'
                          ? 'text-slate-200 hover:bg-slate-700/50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {role}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Status Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowStatusDropdown(!showStatusDropdown);
                  setShowRoleDropdown(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm min-w-[140px] justify-between ${
                  theme === 'dark'
                    ? 'bg-slate-900/50 border border-slate-700/50 text-slate-200 hover:bg-slate-800/50'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{statusFilter}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showStatusDropdown && (
                <div className={`absolute mt-1 w-full rounded-lg shadow-lg overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-slate-800 border border-slate-700/50'
                    : 'bg-white border border-gray-200'
                }`}
                style={{ zIndex: 9999 }}
                >
                  {['All Status', 'Active', 'Inactive'].map((status) => (
                    <div
                      key={status}
                      onClick={() => {
                        setStatusFilter(status);
                        setShowStatusDropdown(false);
                      }}
                      className={`px-4 py-2 text-sm cursor-pointer ${
                        theme === 'dark'
                          ? 'text-slate-200 hover:bg-slate-700/50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {status}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={theme === 'dark' ? 'bg-slate-800/30 border-b border-slate-700/50' : 'bg-gray-50 border-b border-gray-200'}>
                <th className={`text-left py-3 px-6 text-xs font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-sky-400' : 'text-[#063360]'
                }`}>Name</th>
                <th className={`text-left py-3 px-6 text-xs font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-sky-400' : 'text-[#063360]'
                }`}>Email</th>
                <th className={`text-left py-3 px-6 text-xs font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-sky-400' : 'text-[#063360]'
                }`}>Role</th>
                <th className={`text-left py-3 px-6 text-xs font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-sky-400' : 'text-[#063360]'
                }`}>Status</th>
                <th className={`text-left py-3 px-6 text-xs font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-sky-400' : 'text-[#063360]'
                }`}>Last Login</th>
                <th className={`text-left py-3 px-6 text-xs font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-sky-400' : 'text-[#063360]'
                }`}>Actions</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${theme === 'dark' ? 'divide-slate-700/30' : 'divide-gray-100'}`}>
              {filteredUsers.map((user) => (
                <tr key={user.id} className={`transition-colors ${
                  theme === 'dark' ? 'hover:bg-slate-700/20' : 'hover:bg-gray-50/50'
                }`}>
                  <td className={`py-4 px-6 text-sm font-semibold ${
                    theme === 'dark' ? 'text-slate-200' : 'text-gray-900'
                  }`}>{user.name}</td>
                  <td className={`py-4 px-6 text-sm ${
                    theme === 'dark' ? 'text-sky-300' : 'text-[#063360]'
                  }`}>{user.email}</td>
                  <td className="py-4 px-6">
                    <select
                      value={user.role}
                      onChange={(e) => {
                        const newRole = e.target.value as 'Admin' | 'User';
                        setUsers(users.map(u => u.id === user.id ? { ...u, role: newRole } : u));
                      }}
                      className={`px-3 py-1.5 rounded-md text-sm focus:outline-none focus:border-[#063360] focus:ring-1 focus:ring-[#063360] cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-slate-900/50 border border-slate-700/50 text-slate-200'
                          : 'bg-white border border-gray-300 text-gray-700'
                      }`}
                    >
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className={`py-4 px-6 text-sm ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                  }`}>{user.lastLogin}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(user)}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openDeleteModal(user)}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Login & Access Audit Card */}
      <div 
        className={`rounded-lg shadow-sm overflow-hidden ${
          theme === 'dark'
            ? 'bg-slate-800/50 border border-slate-700/50 backdrop-blur-xl'
            : ''
        }`}
        style={theme === 'light' ? {
          borderRadius: '14px',
          border: '4px solid #FFF',
          background: '#F8F8F8',
          boxShadow: '0 10px 15px -3px rgba(229, 231, 235, 0.50), 0 4px 6px -4px rgba(229, 231, 235, 0.50)'
        } : undefined}
      >
        <div className={`px-6 py-4 border-b ${
          theme === 'dark' ? 'border-slate-700/50' : 'border-gray-200'
        }`}>
          <h3 className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
          }`}>
            Login & Access Audit
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={theme === 'dark' ? 'bg-slate-800/30 border-b border-slate-700/50' : 'bg-gray-50 border-b border-gray-200'}>
                <th className={`text-left py-3 px-6 text-xs font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-sky-400' : 'text-[#063360]'
                }`}>User</th>
                <th className={`text-left py-3 px-6 text-xs font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-sky-400' : 'text-[#063360]'
                }`}>IP Address</th>
                <th className={`text-left py-3 px-6 text-xs font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-sky-400' : 'text-[#063360]'
                }`}>Timestamp</th>
                <th className={`text-left py-3 px-6 text-xs font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-sky-400' : 'text-[#063360]'
                }`}>Status</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${theme === 'dark' ? 'divide-slate-700/30' : 'divide-gray-100'}`}>
              {loginAudits.map((audit) => (
                <tr key={audit.id} className={`transition-colors ${
                  theme === 'dark' ? 'hover:bg-slate-700/20' : 'hover:bg-gray-50/50'
                }`}>
                  <td className={`py-4 px-6 text-sm font-semibold ${
                    theme === 'dark' ? 'text-slate-200' : 'text-gray-900'
                  }`}>{audit.user}</td>
                  <td className={`py-4 px-6 text-sm ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                  }`}>{audit.ipAddress}</td>
                  <td className={`py-4 px-6 text-sm ${
                    theme === 'dark' ? 'text-sky-300' : 'text-[#063360]'
                  }`}>{audit.timestamp}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      audit.status === 'Success' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {audit.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className={`rounded-xl p-6 w-full max-w-md shadow-2xl ${
            theme === 'dark'
              ? 'bg-slate-800 border border-slate-700/50'
              : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-xl font-bold ${
                theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
              }`}>Add New User</h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setFormData({ name: '', email: '', role: 'User' });
                }}
                className={`p-1 rounded ${
                  theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                }`}
              >
                <X className={`w-5 h-5 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                }`} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                }`}>Email</label>
                <div className="relative">
                  <select
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-[#063360] focus:ring-1 focus:ring-[#063360] appearance-none ${
                      theme === 'dark'
                        ? 'bg-slate-900/50 border border-slate-700/50 text-slate-200'
                        : 'bg-white border border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="">Select email address</option>
                    <option value="ahmed.mansouri@gov.ae">ahmed.mansouri@gov.ae</option>
                    <option value="fatima.hassan@gov.ae">fatima.hassan@gov.ae</option>
                    <option value="mohammed.ali@gov.ae">mohammed.ali@gov.ae</option>
                    <option value="sara.abdullah@gov.ae">sara.abdullah@gov.ae</option>
                    <option value="khalid.ibrahim@gov.ae">khalid.ibrahim@gov.ae</option>
                    <option value="layla.mahmoud@gov.ae">layla.mahmoud@gov.ae</option>
                    <option value="omar.rashid@gov.ae">omar.rashid@gov.ae</option>
                    <option value="aisha.salem@gov.ae">aisha.salem@gov.ae</option>
                    <option value="hamza.yousef@gov.ae">hamza.yousef@gov.ae</option>
                    <option value="mariam.khalifa@gov.ae">mariam.khalifa@gov.ae</option>
                  </select>
                  <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-400'
                  }`} />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                }`}>Role</label>
                <div className="relative">
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as 'Admin' | 'User' })}
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-[#063360] focus:ring-1 focus:ring-[#063360] appearance-none ${
                      theme === 'dark'
                        ? 'bg-slate-900/50 border border-slate-700/50 text-slate-200'
                        : 'bg-white border border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="">Select role</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                  <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-400'
                  }`} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setFormData({ name: '', email: '', role: 'User' });
                }}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors font-medium ${
                  theme === 'dark'
                    ? 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cancel
              </button>
              <button
                onClick={handleAddUser}
                className="flex-1 px-4 py-3 bg-[#063360] text-white rounded-lg hover:bg-[#052954] transition-colors font-medium"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className={`rounded-xl p-6 w-full max-w-md shadow-2xl ${
            theme === 'dark'
              ? 'bg-slate-800 border border-slate-700/50'
              : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-xl font-bold ${
                theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
              }`}>Edit User</h3>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedUser(null);
                  setFormData({ name: '', email: '', role: 'User' });
                }}
                className={`p-1 rounded ${
                  theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                }`}
              >
                <X className={`w-5 h-5 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                }`} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                }`}>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:border-[#063360] focus:ring-1 focus:ring-[#063360] ${
                    theme === 'dark'
                      ? 'bg-slate-900/50 border border-slate-700/50 text-slate-200'
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                }`}>Email ID</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:border-[#063360] focus:ring-1 focus:ring-[#063360] ${
                    theme === 'dark'
                      ? 'bg-slate-900/50 border border-slate-700/50 text-slate-200'
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                }`}>Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as 'Admin' | 'User' })}
                  className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:border-[#063360] focus:ring-1 focus:ring-[#063360] ${
                    theme === 'dark'
                      ? 'bg-slate-900/50 border border-slate-700/50 text-slate-200'
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={handleEditUser}
                className="flex-1 px-4 py-2 bg-[#063360] text-white rounded-lg hover:bg-[#052954] transition-colors font-medium"
              >
                Update User
              </button>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedUser(null);
                  setFormData({ name: '', email: '', role: 'User' });
                }}
                className={`flex-1 px-4 py-2 rounded-lg transition-colors font-medium ${
                  theme === 'dark'
                    ? 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className={`rounded-xl p-6 w-full max-w-md shadow-2xl ${
            theme === 'dark'
              ? 'bg-slate-800 border border-slate-700/50'
              : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-bold ${
                theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
              }`}>Confirm Delete</h3>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedUser(null);
                }}
                className={`p-1 rounded ${
                  theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                }`}
              >
                <X className={`w-5 h-5 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                }`} />
              </button>
            </div>

            <p className={`mb-6 ${
              theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Are you sure you want to delete <span className={`font-semibold ${
                theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
              }`}>{selectedUser.name}</span>? This action cannot be undone.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDeleteUser}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedUser(null);
                }}
                className={`flex-1 px-4 py-2 rounded-lg transition-colors font-medium ${
                  theme === 'dark'
                    ? 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}