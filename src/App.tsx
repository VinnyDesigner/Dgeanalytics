import { useState } from 'react';
import { TopNavbar } from './components/TopNavbar';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { Overview } from './components/Overview';
import { ServiceUsage } from './components/ServiceUsage';
import { ConsumerInsights } from './components/ConsumerInsights';
import { ConsumerDetail } from './components/ConsumerDetail';
import { AllConsumers } from './components/AllConsumers';
import { AllServices } from './components/AllServices';
import { UserManagement } from './components/UserManagement';
import { HighUsageConsumers } from './components/HighUsageConsumers';

type DashboardView = 'home' | 'aboutUs' | 'overview' | 'service' | 'consumer' | 'consumerDetail' | 'allConsumers' | 'allServices' | 'userManagement' | 'highUsageConsumers';

// SDI Analytics Dashboard - v1.0.2 - Build: 2024-12-22T12:20:15Z
export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeView, setActiveView] = useState<'home' | 'aboutUs' | 'overview' | 'service' | 'consumer' | 'consumerDetail' | 'allConsumers' | 'allServices' | 'userManagement' | 'highUsageConsumers'>('home');
  const [selectedConsumerName, setSelectedConsumerName] = useState<string>('');

  const handleConsumerClick = (consumerName: string) => {
    setSelectedConsumerName(consumerName);
    setActiveView('consumerDetail');
  };

  const handleBackToConsumers = () => {
    setActiveView('consumer');
  };

  return (
    <div className={`h-screen flex flex-col ${theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <TopNavbar 
        theme={theme} 
        onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
        activeView={activeView} 
        onViewChange={setActiveView}
        onLogout={() => {/* Handle logout */}}
      />
      <main className="flex-1 overflow-auto">
        <div className={activeView === 'aboutUs' || activeView === 'home' ? '' : 'p-2 sm:p-4 md:p-6 lg:p-8 px-2 sm:px-4 md:px-6 lg:px-[32px] py-0'}>
          {activeView === 'home' && <Home theme={theme} onNavigate={setActiveView} />}
          {activeView === 'aboutUs' && <AboutUs theme={theme} onNavigate={setActiveView} />}
          {activeView === 'overview' && <Overview onNavigate={setActiveView} theme={theme} />}
          {activeView === 'service' && <ServiceUsage theme={theme} onViewAllServices={() => setActiveView('allServices')} />}
          {activeView === 'consumer' && <ConsumerInsights theme={theme} onConsumerClick={handleConsumerClick} onViewAllConsumers={() => setActiveView('allConsumers')} />}
          {activeView === 'consumerDetail' && <ConsumerDetail consumerName={selectedConsumerName} onBack={handleBackToConsumers} theme={theme} />}
          {activeView === 'allConsumers' && <AllConsumers theme={theme} onBack={() => setActiveView('consumer')} onConsumerClick={handleConsumerClick} />}
          {activeView === 'allServices' && <AllServices theme={theme} onBack={() => setActiveView('service')} />}
          {activeView === 'userManagement' && <UserManagement theme={theme} />}
          {activeView === 'highUsageConsumers' && <HighUsageConsumers theme={theme} onBack={() => setActiveView('consumer')} />}
        </div>
      </main>
    </div>
  );
}