import { LayoutDashboard, Activity, Users, LogOut, Sun, Moon, UserCog, Home, Info, Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import expandedLogo from 'figma:asset/963acebd463df57ea547082719ca5d18f798d0ce.png';
import emblemLogo from 'figma:asset/e7427f43803a10e9bcef0961d8e09b265944af27.png';
import { useState } from 'react';

interface TopNavbarProps {
  activeView: 'home' | 'overview' | 'service' | 'consumer' | 'allServices' | 'userManagement' | 'aboutUs';
  onViewChange: (view: 'home' | 'overview' | 'service' | 'consumer' | 'allServices' | 'userManagement' | 'aboutUs') => void;
  onLogout: () => void;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

export function TopNavbar({ activeView, onViewChange, onLogout, theme, onThemeToggle }: TopNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'service' as const, label: 'Service Usage', icon: Activity },
    { id: 'consumer' as const, label: 'Consumer Usage', icon: Users },
    { id: 'aboutUs' as const, label: 'About Us', icon: Info },
  ];

  const handleMenuItemClick = (id: typeof menuItems[number]['id']) => {
    onViewChange(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className="border-b backdrop-blur-xl"
      style={{ 
        backgroundColor: theme === 'dark' ? '#131A2D' : '#063360',
        borderColor: theme === 'dark' ? 'rgba(148, 163, 184, 0.1)' : 'rgba(148, 163, 184, 0.2)'
      }}
    >
      <div className="px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between lg:justify-center relative gap-2">
          {/* Left section: Emblem Logo */}
          <div className="flex-shrink-0 w-[70px] xs:w-[90px] sm:w-[140px] lg:w-[230px] h-[24px] xs:h-[28px] sm:h-[35px] lg:h-[40px] lg:absolute lg:left-0">
            <ImageWithFallback src={emblemLogo} alt="SDI Analytics Emblem Logo" className="w-full h-full object-contain" />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-white hover:bg-slate-800/50 transition-colors flex-shrink-0"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop Menu Items - Hidden on mobile/tablet */}
          <ul className="hidden lg:flex items-center gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onViewChange(item.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg
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
                    <span className={`text-sm font-medium ${isActive ? 'relative z-10' : ''}`}>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right section: Logo - Now visible on mobile too */}
          <div className="flex-shrink-0 w-[60px] xs:w-[70px] sm:w-[100px] lg:w-[120px] h-[24px] xs:h-[28px] sm:h-[35px] lg:h-[40px] lg:absolute lg:right-0">
            <ImageWithFallback src={expandedLogo} alt="SDI Analytics Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-2 border-t border-slate-700/50">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuItemClick(item.id)}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-lg
                        transition-all duration-200
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
                      } : undefined}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}