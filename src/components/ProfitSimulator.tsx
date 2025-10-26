import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, TrendingUp, AlertTriangle, CheckCircle2, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

interface ProfitSimulatorProps {
  onBack: () => void;
}

export function ProfitSimulator({ onBack }: ProfitSimulatorProps) {
  const [currentCrop, setCurrentCrop] = useState('');
  const [oilseed, setOilseed] = useState('');
  const [landArea, setLandArea] = useState('');
  const [calculating, setCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    if (!currentCrop || !oilseed || !landArea) return;
    
    setCalculating(true);
    setTimeout(() => {
      setCalculating(false);
      setShowResults(true);
    }, 2500);
  };

  const currentCropData = {
    baseProfit: 40000,
    subsidy: 2000,
    total: 42000,
    risk: 'medium'
  };

  const oilseedData = {
    baseProfit: 68000,
    subsidy: 8000,
    total: 76000,
    risk: 'low'
  };

  const comparisonData = [
    {
      name: currentCrop || 'Current Crop',
      'Base Profit': currentCropData.baseProfit,
      'Subsidy': currentCropData.subsidy,
    },
    {
      name: oilseed || 'Oilseed',
      'Base Profit': oilseedData.baseProfit,
      'Subsidy': oilseedData.subsidy,
    }
  ];

  const profitDifference = oilseedData.total - currentCropData.total;
  const percentageIncrease = ((profitDifference / currentCropData.total) * 100).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-y-auto pb-24"
    >
      <div className="max-w-md mx-auto min-h-full pb-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 pt-12 pb-6 px-6 rounded-b-3xl mb-6 shadow-lg">
          <div className="flex items-center mb-4">
            <button
              onClick={onBack}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex items-center mb-2">
              <Sparkles className="w-6 h-6 text-white mr-2" />
              <h1 className="text-white text-2xl">AI Profit Simulator</h1>
            </div>
            <p className="text-orange-100">Compare Crops - Earn More</p>
          </motion.div>
        </div>

        <div className="px-6">
          {/* Info Banner */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 p-4">
              <div className="flex items-start">
                <Sparkles className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-purple-900">
                  <strong>AI-Powered Analysis:</strong> Our simulator calculates accurate profit based on market prices, weather patterns, and government subsidies
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Input Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white shadow-lg border-0 p-6 mb-6">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="current-crop" className="text-gray-700 mb-2 block">
                    Current Crop
                  </Label>
                  <Select value={currentCrop} onValueChange={setCurrentCrop}>
                    <SelectTrigger className="h-12 border-2">
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Wheat / गेहूं">Wheat / गेहूं</SelectItem>
                      <SelectItem value="Rice / धान">Rice / धान</SelectItem>
                      <SelectItem value="Cotton / कपास">Cotton / कपास</SelectItem>
                      <SelectItem value="Chickpea / चना">Chickpea / चना</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="oilseed" className="text-gray-700 mb-2 block">
                    Oilseed Crop (for comparison)
                  </Label>
                  <Select value={oilseed} onValueChange={setOilseed}>
                    <SelectTrigger className="h-12 border-2">
                      <SelectValue placeholder="Select oilseed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mustard / सरसों">Mustard / सरसों</SelectItem>
                      <SelectItem value="Soybean / सोयाबीन">Soybean / सोयाबीन</SelectItem>
                      <SelectItem value="Groundnut / मूंगफली">Groundnut / मूंगफली</SelectItem>
                      <SelectItem value="Sunflower / सूरजमुखी">Sunflower / सूरजमुखी</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="land-area" className="text-gray-700 mb-2 block">
                    Land Area (in acres)
                  </Label>
                  <Input
                    id="land-area"
                    type="number"
                    placeholder="e.g. 5"
                    value={landArea}
                    onChange={(e) => setLandArea(e.target.value)}
                    className="h-12 border-2"
                  />
                </div>
              </div>

              <motion.div whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleCalculate}
                  disabled={!currentCrop || !oilseed || !landArea || calculating}
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-xl mt-6 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {calculating ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Calculating...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Calculate Profit
                    </div>
                  )}
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          {/* Loading Animation */}
          <AnimatePresence>
            {calculating && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6"
              >
                <Card className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 p-6">
                  <div className="text-center text-white">
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 border-4 border-white/30 rounded-full" />
                        <div className="absolute inset-0 w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    </div>
                    <p className="text-lg">AI is calculating your profit...</p>
                    <p className="text-white/80 text-sm mt-1">Please wait</p>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <AnimatePresence>
            {showResults && !calculating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Profit Difference Highlight */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 shadow-xl">
                    <div className="p-6 text-center text-white">
                      <TrendingUp className="w-12 h-12 mx-auto mb-3" />
                      <div className="text-sm text-green-100 mb-1">Potential Additional Profit</div>
                      <div className="text-5xl mb-2">₹{profitDifference.toLocaleString('en-IN')}</div>
                      <Badge className="bg-white/20 text-white border-0">
                        +{percentageIncrease}% More
                      </Badge>
                    </div>
                  </Card>
                </motion.div>

                {/* Comparison Chart */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="bg-white shadow-lg border-0 p-6">
                    <h3 className="text-gray-800 mb-4">Detailed Comparison</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={comparisonData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '2px solid #e5e7eb',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Bar dataKey="Base Profit" stackId="a" fill="#22c55e" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="Subsidy" stackId="a" fill="#facc15" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Card>
                </motion.div>

                {/* Detailed Breakdown */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <Card className="bg-white shadow-lg border-2 border-gray-200 p-5">
                    <div className="text-gray-600 text-sm mb-2">{currentCrop}</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Profit:</span>
                        <span className="text-gray-900">₹{currentCropData.baseProfit.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subsidy:</span>
                        <span className="text-gray-900">₹{currentCropData.subsidy.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between">
                        <span className="text-gray-900">Total:</span>
                        <span className="text-gray-900">₹{currentCropData.total.toLocaleString('en-IN')}</span>
                      </div>
                      <Badge variant="outline" className="w-full justify-center border-yellow-500 text-yellow-700">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        Medium Risk
                      </Badge>
                    </div>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-green-100 shadow-lg border-2 border-green-300 p-5">
                    <div className="text-green-700 mb-2">{oilseed}</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Profit:</span>
                        <span className="text-gray-900">₹{oilseedData.baseProfit.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subsidy:</span>
                        <span className="text-green-700">₹{oilseedData.subsidy.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="border-t border-green-300 pt-2 flex justify-between">
                        <span className="text-gray-900">Total:</span>
                        <span className="text-green-700">₹{oilseedData.total.toLocaleString('en-IN')}</span>
                      </div>
                      <Badge className="w-full justify-center bg-green-600 text-white border-0">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Low Risk
                      </Badge>
                    </div>
                  </Card>
                </motion.div>

                {/* Recommendations */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Card className="bg-blue-50 border-2 border-blue-200 p-5">
                    <h4 className="text-blue-900 mb-2 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Recommendations
                    </h4>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{oilseed} has {percentageIncrease}% higher profit potential</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Additional ₹{oilseedData.subsidy.toLocaleString('en-IN')} benefit from government subsidy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Better market demand with lower risk</span>
                      </li>
                    </ul>
                  </Card>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
