import { motion } from 'motion/react';
import { Home, TrendingUp, Users, FileText } from 'lucide-react';

interface BottomNavProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'simulator', label: 'Simulate', icon: TrendingUp },
    { id: 'market', label: 'Buyers', icon: Users },
    { id: 'schemes', label: 'Schemes', icon: FileText },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="bg-white border-t-2 border-gray-200 shadow-2xl rounded-t-3xl"
        >
          <div className="flex items-center justify-around px-4 py-3">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id;
              const Icon = item.icon;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all relative ${
                    isActive ? 'flex-1' : ''
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-green-100 rounded-2xl"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <Icon
                      className={`w-6 h-6 mb-1 transition-colors ${
                        isActive ? 'text-green-600' : 'text-gray-400'
                      }`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span
                      className={`text-xs transition-colors ${
                        isActive ? 'text-green-700' : 'text-gray-500'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
