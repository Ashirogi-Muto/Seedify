import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { SplashScreen } from './components/SplashScreen';
import { LoginScreen } from './components/LoginScreen';
import { Dashboard } from './components/Dashboard';
import { ProfitSimulator } from './components/ProfitSimulator';
import { MarketHub } from './components/MarketHub';
import { GovernmentSchemes } from './components/GovernmentSchemes';
import { BottomNav } from './components/BottomNav';
import { Toaster } from './components/ui/sonner';

type Screen = 'splash' | 'login' | 'dashboard' | 'simulator' | 'market' | 'schemes';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');

  const handleSplashComplete = () => {
    setCurrentScreen('login');
  };

  const handleLogin = () => {
    setCurrentScreen('dashboard');
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleBack = () => {
    setCurrentScreen('dashboard');
  };

  const showBottomNav = ['dashboard', 'simulator', 'market', 'schemes'].includes(currentScreen);

  return (
    <div className="w-full h-screen overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        {currentScreen === 'splash' && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
        {currentScreen === 'login' && (
          <LoginScreen key="login" onLogin={handleLogin} />
        )}
        {currentScreen === 'dashboard' && (
          <Dashboard key="dashboard" onNavigate={handleNavigate} />
        )}
        {currentScreen === 'simulator' && (
          <ProfitSimulator key="simulator" onBack={handleBack} />
        )}
        {currentScreen === 'market' && (
          <MarketHub key="market" onBack={handleBack} />
        )}
        {currentScreen === 'schemes' && (
          <GovernmentSchemes key="schemes" onBack={handleBack} />
        )}
      </AnimatePresence>
      
      {showBottomNav && (
        <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
      )}
      
      <Toaster />
    </div>
  );
}