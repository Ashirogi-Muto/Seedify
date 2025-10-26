import { motion } from 'motion/react';
import { 
  TrendingUp, 
  CloudRain, 
  Users, 
  FileText, 
  ArrowRight,
  Sparkles,
  MapPin,
  Sun,
  Calculator
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ui/ImageWithFallback';

interface DashboardProps {
  onNavigate: (screen: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-y-auto"
    >
      <div className="max-w-md mx-auto min-h-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 pt-12 pb-8 px-6 rounded-b-3xl">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-green-100 mb-1">Namaste / नमस्ते,</p>
            <h1 className="text-white text-3xl mb-4">Rajesh Kumar</h1>
            <div className="flex items-center text-white/90">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Jaipur, Rajasthan / जयपुर, राजस्थान</span>
            </div>
          </motion.div>
        </div>

        <div className="px-6 -mt-6">
          {/* Main Action Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 shadow-xl cursor-pointer overflow-hidden relative"
              onClick={() => onNavigate('simulator')}
            >
              <div className="absolute inset-0 opacity-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1715352476743-cd5758cf764f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtJTIwbXVzdGFyZCUyMGZpZWxkfGVufDF8fHx8MTc2MTQ2MzA0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Farm field"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <Badge className="bg-yellow-300 text-orange-900 border-0">AI-Powered</Badge>
                </div>
                <h2 className="text-white text-2xl mb-2">
                  Compare Crop Profits!
                </h2>
                <p className="text-white/90 mb-4">
                  Discover how much more you can earn with oilseeds
                </p>
                <div className="flex items-center text-white">
                  <span className="mr-2">Try Now</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Weather Widget */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg">
              <div className="p-5">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm text-blue-100">Jaipur / जयपुर</span>
                    </div>
                    <div className="flex items-center">
                      <Sun className="w-10 h-10 mr-3" />
                      <div>
                        <div className="text-4xl">32°C</div>
                        <div className="text-sm text-blue-100">Clear Sky</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-blue-100">
                    <div>Humidity: 45%</div>
                    <div>Wind: 12 km/h</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Market Price Ticker */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6"
          >
            <h3 className="text-gray-700 mb-3 px-1">Today's Market Prices</h3>
            <div className="space-y-3">
              {[
                { name: 'Mustard / सरसों', location: 'Jaipur / जयपुर', price: '₹5,850', change: '+2.3%', up: true },
                { name: 'Soybean / सोयाबीन', location: 'Indore / इंदौर', price: '₹4,320', change: '+1.8%', up: true },
                { name: 'Groundnut / मूंगफली', location: 'Junagadh / जूनागढ़', price: '₹6,150', change: '-0.5%', up: false },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <div className="text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-900">{item.price}/qtl</div>
                        <div className={`text-sm flex items-center justify-end ${item.up ? 'text-green-600' : 'text-red-600'}`}>
                          <TrendingUp className={`w-3 h-3 mr-1 ${!item.up && 'rotate-180'}`} />
                          {item.change}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <h3 className="text-gray-700 mb-3 px-1">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Card 
                  className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  onClick={() => onNavigate('market')}
                >
                  <div className="p-5 text-center">
                    <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                      <Users className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="text-gray-900">Find Buyers</div>
                  </div>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Card 
                  className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  onClick={() => onNavigate('schemes')}
                >
                  <div className="p-5 text-center">
                    <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="text-gray-900">View Schemes</div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Logout Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-8 mb-24"
          >
            <motion.button
              className="w-full h-12 bg-gray-100 text-gray-800 font-medium rounded-2xl shadow-lg flex items-center justify-center"
              initial={{ backgroundColor: "#f3f4f6", color: "#1f2937" }}
              whileHover={{ 
                backgroundColor: "#ef4444",
                color: "#ffffff",
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onHoverEnd={(e) => {
                e.target.style.backgroundColor = "#f3f4f6";
                e.target.style.color = "#1f2937";
              }}
              onClick={() => onNavigate('login')}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Logout
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}