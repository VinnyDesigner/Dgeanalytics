import { LayoutDashboard, Activity, Users, LogOut, Sun, Moon, ChevronLeft, ChevronRight, UserCog } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tooltip } from './Tooltip';
import DepartmentOfGovernmentEnablement from '../imports/DepartmentOfGovernmentEnablement11';
import compactLogo from 'figma:asset/86e24625edc544d61f0dd2557eec5c1c1384510f.png';
import newCompactLogo from 'figma:asset/f420ca07a80ef1226d639d558f7ff6fb36acae0e.png';
import expandedLogo from 'figma:asset/963acebd463df57ea547082719ca5d18f798d0ce.png';

interface SidebarProps {
  activeView: 'overview' | 'service' | 'consumer' | 'allServices' | 'userManagement';
  onViewChange: (view: 'overview' | 'service' | 'consumer' | 'allServices' | 'userManagement') => void;
  onLogout: () => void;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({ activeView, onViewChange, onLogout, theme, onThemeToggle, collapsed, onToggleCollapse }: SidebarProps) {
  const menuItems = [
    { id: 'overview' as const, label: 'Overview', icon: LayoutDashboard },
    { id: 'service' as const, label: 'Service Usage', icon: Activity },
    { id: 'consumer' as const, label: 'Consumer Usage', icon: Users },
  ];

  return (
    <aside className={`${collapsed ? 'w-20' : 'w-64'} backdrop-blur-xl border-r flex flex-col transition-all duration-300 relative z-50 ${
      theme === 'dark' 
        ? 'border-slate-800/50' 
        : 'border-slate-700/50'
    }`}
    style={{ backgroundColor: theme === 'dark' ? '#131A2D' : '#063360' }}
    >
      <div className={`${collapsed ? 'p-4' : 'p-6'} border-b flex items-center justify-center transition-all duration-300 ${
        theme === 'dark' ? 'border-slate-800/50' : 'border-slate-700/50'
      }`}>
        {collapsed ? (
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <ImageWithFallback src={newCompactLogo} alt="Compact Logo" />
          </div>
        ) : (
          <div className="w-full" style={{ height: '40px' }}>
            <ImageWithFallback src={expandedLogo} alt="SDI Analytics Logo" className="w-full h-full object-contain" />
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <div className={`px-4 py-5 border-b ${theme === 'dark' ? 'border-slate-800/30' : 'border-gray-200/40'}`}>
        <button
          type="button"
          onClick={onToggleCollapse}
          className={`w-full flex items-center ${collapsed ? 'justify-center' : 'justify-end'} px-2 py-2 rounded-lg transition-all duration-200 ${
            theme === 'dark'
              ? 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
              : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
          }`}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-4 pt-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <li key={item.id}>
                <Tooltip content={item.label} show={collapsed}>
                  <button
                    onClick={() => onViewChange(item.id)}
                    className={`
                      w-full flex items-center ${collapsed ? 'justify-center px-4' : 'gap-3 px-4'} py-3 rounded-lg
                      transition-all duration-200 relative overflow-hidden
                      ${isActive 
                        ? 'text-white shadow-lg' 
                        : theme === 'dark'
                          ? 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                      }
                    `}
                    style={isActive ? {
                      background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(14, 165, 233, 0.3) 100%)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      backdropFilter: 'blur(10px)',
                    } : undefined}
                  >
                    {isActive && (
                      <div 
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        style={{
                          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)',
                        }}
                      />
                    )}
                    <Icon className={`w-5 h-5 ${isActive ? 'relative z-10' : ''}`} />
                    {!collapsed && <span className={isActive ? 'relative z-10' : ''}>{item.label}</span>}
                  </button>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={`p-4 border-t space-y-4 ${
        theme === 'dark' ? 'border-slate-800/50' : 'border-slate-700/50'
      }`}>
        <Tooltip content={theme === 'dark' ? 'Light Mode' : 'Dark Mode'} show={collapsed}>
          <button
            onClick={onThemeToggle}
            className={`w-full flex items-center ${collapsed ? 'justify-center px-4' : 'gap-3 px-4'} py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#063360]/30 ${
              theme === 'dark'
                ? 'text-slate-300 hover:text-white hover:bg-[#063360]'
                : 'text-gray-300 hover:text-white hover:bg-[#063360]'
            }`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {!collapsed && <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>
        </Tooltip>
        
        <Tooltip content="User Management" show={collapsed}>
          <button
            onClick={() => onViewChange('userManagement')}
            className={`
              w-full flex items-center ${collapsed ? 'justify-center px-4' : 'gap-3 px-4'} py-3 rounded-lg
              transition-all duration-200 relative overflow-hidden
              ${activeView === 'userManagement'
                ? 'text-white shadow-lg' 
                : theme === 'dark'
                  ? 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
                  : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
              }
            `}
            style={activeView === 'userManagement' ? {
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(14, 165, 233, 0.3) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              backdropFilter: 'blur(10px)',
            } : undefined}
          >
            {activeView === 'userManagement' && (
              <div 
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)',
                }}
              />
            )}
            <UserCog className={`w-5 h-5 ${activeView === 'userManagement' ? 'relative z-10' : ''}`} />
            {!collapsed && <span className={activeView === 'userManagement' ? 'relative z-10' : ''}>User Management</span>}
          </button>
        </Tooltip>
        
        <Tooltip content="Logout" show={collapsed}>
          <button
            onClick={onLogout}
            className={`w-full flex items-center ${collapsed ? 'justify-center px-4' : 'gap-3 px-4'} py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#063360]/30 ${
              theme === 'dark'
                ? 'text-slate-300 hover:text-white hover:bg-[#063360]'
                : 'text-gray-300 hover:text-white hover:bg-[#063360]'
            }`}
          >
            <LogOut className="w-5 h-5" />
            {!collapsed && <span>Logout</span>}
          </button>
        </Tooltip>
      </div>
    </aside>
  );
}