import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowLeft, Users, MapPin, Phone, Filter, TrendingUp, Search } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';

interface MarketHubProps {
  onBack: () => void;
}

const fpoData = [
  {
    id: 1,
    name: 'Adani Wilmar FPO',
    location: 'Alwar, Rajasthan / अलवर, राजस्थान',
    crop: 'Mustard / सरसों',
    rate: '₹5,800',
    distance: '12 km',
    verified: true
  },
  {
    id: 2,
    name: 'Rajasthan Oilseeds Cooperative',
    location: 'Jaipur, Rajasthan / जयपुर, राजस्थान',
    crop: 'Soybean / सोयाबीन',
    rate: '₹4,350',
    distance: '8 km',
    verified: true
  },
  {
    id: 3,
    name: 'Kisan Mandi FPO',
    location: 'Sikar, Rajasthan / सीकर, राजस्थान',
    crop: 'Groundnut / मूंगफली',
    rate: '₹6,200',
    distance: '25 km',
    verified: true
  },
  {
    id: 4,
    name: 'Patanjali Organic FPO',
    location: 'Bhilwara, Rajasthan / भीलवाड़ा, राजस्थान',
    crop: 'Mustard / सरसों',
    rate: '₹5,750',
    distance: '45 km',
    verified: true
  },
  {
    id: 5,
    name: 'Mahindra Agri FPO',
    location: 'Ajmer, Rajasthan / अजमेर, राजस्थान',
    crop: 'Sunflower / सूरजमुखी',
    rate: '₹5,500',
    distance: '32 km',
    verified: true
  },
];

export function MarketHub({ onBack }: MarketHubProps) {
  const [loading, setLoading] = useState(true);
  const [filterCrop, setFilterCrop] = useState('all');
  const [sortBy, setSortBy] = useState('distance');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredData = fpoData
    .filter(fpo => filterCrop === 'all' || fpo.crop === filterCrop)
    .filter(fpo => fpo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                   fpo.location.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'distance') {
        return parseInt(a.distance) - parseInt(b.distance);
      } else if (sortBy === 'rate') {
        return parseInt(b.rate.replace(/[₹,]/g, '')) - parseInt(a.rate.replace(/[₹,]/g, ''));
      }
      return 0;
    });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-y-auto pb-24"
    >
      <div className="max-w-md mx-auto min-h-full pb-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 pt-12 pb-6 px-6 rounded-b-3xl mb-6 shadow-lg">
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
              <Users className="w-6 h-6 text-white mr-2" />
              <h1 className="text-white text-2xl">Assured Market Hub</h1>
            </div>
            <p className="text-green-100">Find FPO Buyers - Guaranteed Sales</p>
          </motion.div>
        </div>

        <div className="px-6">
          {/* Stats Banner */}
          {!loading && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-4"
            >
              <Card className="bg-gradient-to-r from-green-500 to-green-600 border-0 shadow-lg">
                <div className="p-4 flex items-center justify-between text-white">
                  <div>
                    <div className="text-green-100 text-sm mb-0.5">Registered FPO Buyers</div>
                    <div className="text-2xl">{fpoData.length}+ Organizations</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Search and Filters */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 mb-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 h-12 border-2 bg-white"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <div className="flex-1">
                <Select value={filterCrop} onValueChange={setFilterCrop}>
                  <SelectTrigger className="h-11 border-2 bg-white">
                    <div className="flex items-center">
                      <Filter className="w-4 h-4 mr-2 text-gray-500" />
                      <SelectValue placeholder="Select crop" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Crops</SelectItem>
                    <SelectItem value="Mustard / सरसों">Mustard / सरसों</SelectItem>
                    <SelectItem value="Soybean / सोयाबीन">Soybean / सोयाबीन</SelectItem>
                    <SelectItem value="Groundnut / मूंगफली">Groundnut / मूंगफली</SelectItem>
                    <SelectItem value="Sunflower / सूरजमुखी">Sunflower / सूरजमुखी</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-11 border-2 bg-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distance">By Distance</SelectItem>
                    <SelectItem value="rate">By Rate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          {!loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 px-1"
            >
              <p className="text-gray-600">
                {filteredData.length} buyers found
              </p>
            </motion.div>
          )}

          {/* Loading Skeletons */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="bg-white p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <Skeleton className="h-5 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                      <Skeleton className="h-6 w-16" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </Card>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* FPO Listings */}
          <AnimatePresence>
            {!loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {filteredData.map((fpo, index) => (
                  <motion.div
                    key={fpo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all">
                      <div className="p-5">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <h3 className="text-gray-900 mr-2">{fpo.name}</h3>
                              {fpo.verified && (
                                <Badge className="bg-green-100 text-green-700 border-0 text-xs">
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                              <MapPin className="w-3.5 h-3.5 mr-1" />
                              <span>{fpo.location}</span>
                              <span className="mx-2">•</span>
                              <span>{fpo.distance}</span>
                            </div>
                          </div>
                        </div>

                        {/* Crop and Rate */}
                        <div className="bg-green-50 rounded-xl p-3 mb-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-gray-600 text-sm mb-0.5">Crop</div>
                              <div className="text-gray-900">{fpo.crop}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-gray-600 text-sm mb-0.5">Purchase Rate</div>
                              <div className="text-green-700 text-xl flex items-center">
                                {fpo.rate}
                                <span className="text-sm text-gray-600 ml-1">/qtl</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <motion.div className="flex-1" whileTap={{ scale: 0.97 }}>
                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-11 rounded-xl shadow-md hover:shadow-lg transition-all">
                              <Phone className="w-4 h-4 mr-2" />
                              Contact
                            </Button>
                          </motion.div>
                          <motion.div whileTap={{ scale: 0.97 }}>
                            <Button variant="outline" className="px-6 border-2 h-11 rounded-xl hover:bg-gray-50">
                              Details
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}

                {filteredData.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No buyers found</p>
                    <p className="text-gray-400 text-sm">Try changing your filters</p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info Banner */}
          {!loading && filteredData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <Card className="bg-blue-50 border-2 border-blue-200 p-5">
                <div className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="mb-1">
                      <strong>Assured Market:</strong> All these buyers are government-registered
                    </p>
                    <p className="text-blue-700">
                      Guaranteed crop sales and timely payment
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
