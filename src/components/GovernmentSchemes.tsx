import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowLeft, FileText, IndianRupee, CheckCircle2, ExternalLink, Sparkles, Sprout, Shield, Wallet, CreditCard } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';
import { ImageWithFallback } from './ui/ImageWithFallback';

interface GovernmentSchemesProps {
  onBack: () => void;
}

const schemes = [
  {
    id: 1,
    name: 'National Mission on Edible Oils - Oil Seeds (NMEO-OS)',
    nameHindi: 'राष्ट्रीय तिलहन और ऑयल पाम मिशन',
    benefit: 'Up to ₹8,000 subsidy per acre',
    description: 'Subsidy on seeds, fertilizers, and farm equipment',
    eligibility: 'Farmers with land > 2 acres',
    crops: ['Mustard / सरसों', 'Soybean / सोयाबीन', 'Groundnut / मूंगफली', 'Sunflower / सूरजमुखी'],
    status: 'eligible',
    color: 'green',
    icon: Sprout
  },
  {
    id: 2,
    name: 'PM Kisan Samman Nidhi (PM-KISAN)',
    nameHindi: 'प्रधानमंत्री किसान सम्मान निधि',
    benefit: '₹6,000 per year (in 3 installments)',
    description: 'Direct income support for all farmers',
    eligibility: 'All land-owning farmers',
    crops: ['All crops / सभी फसलें'],
    status: 'enrolled',
    color: 'blue',
    icon: Wallet
  },
  {
    id: 3,
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    nameHindi: 'प्रधानमंत्री फसल बीमा योजना',
    benefit: 'Up to 90% compensation for crop loss',
    description: 'Crop protection against natural disasters',
    eligibility: 'All farmers (very low premium)',
    crops: ['All notified crops / सभी अधिसूचित फसलें'],
    status: 'eligible',
    color: 'orange',
    icon: Shield
  },
  {
    id: 4,
    name: 'Kisan Credit Card (KCC)',
    nameHindi: 'किसान क्रेडिट कार्ड',
    benefit: 'Loan up to ₹3 lakh at 4% interest',
    description: 'Low-interest agricultural credit',
    eligibility: 'All farmers',
    crops: ['All crops / सभी फसलें'],
    status: 'eligible',
    color: 'purple',
    icon: CreditCard
  },
];

export function GovernmentSchemes({ onBack }: GovernmentSchemesProps) {
  const [loading, setLoading] = useState(true);
  const [selectedScheme, setSelectedScheme] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-y-auto pb-24"
    >
      <div className="max-w-md mx-auto min-h-full pb-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 pt-12 pb-6 px-6 rounded-b-3xl mb-6 shadow-lg">
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
              <FileText className="w-6 h-6 text-white mr-2" />
              <h1 className="text-white text-2xl">Government Schemes</h1>
            </div>
            <p className="text-blue-100">Discover Benefits & Apply Instantly</p>
          </motion.div>
        </div>

        <div className="px-6">
          {/* Stats Card */}
          {!loading && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 shadow-lg">
                <div className="p-5">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <div className="text-green-100 text-sm mb-1">Available for You</div>
                      <div className="text-3xl">4 Schemes</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-green-100 text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    <span>Estimated Benefits: ₹20,000+ per year</span>
                  </div>
                </div>
              </Card>
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
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-white p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                      <Skeleton className="h-6 w-20" />
                    </div>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-10 w-full mt-4" />
                  </Card>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scheme Cards */}
          <AnimatePresence>
            {!loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {schemes.map((scheme, index) => {
                  const SchemeIcon = scheme.icon;
                  return (
                    <motion.div
                      key={scheme.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <Card className={`bg-white border-2 ${
                        scheme.status === 'enrolled' 
                          ? 'border-blue-300 bg-blue-50' 
                          : 'border-gray-200'
                      } shadow-lg hover:shadow-xl transition-all`}>
                        <div className="p-5">
                          {/* Header with Icon */}
                          <div className="flex items-start gap-3 mb-3">
                            <div className={`rounded-2xl p-3 ${
                              scheme.color === 'green' ? 'bg-green-100' :
                              scheme.color === 'blue' ? 'bg-blue-100' :
                              scheme.color === 'orange' ? 'bg-orange-100' :
                              'bg-purple-100'
                            }`}>
                              <SchemeIcon className={`w-7 h-7 ${
                                scheme.color === 'green' ? 'text-green-600' :
                                scheme.color === 'blue' ? 'text-blue-600' :
                                scheme.color === 'orange' ? 'text-orange-600' :
                                'text-purple-600'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h3 className="text-gray-900 leading-snug mb-1">{scheme.name}</h3>
                                  <p className="text-gray-500 text-sm">[{scheme.nameHindi}]</p>
                                </div>
                                {scheme.status === 'enrolled' ? (
                                  <Badge className="bg-blue-600 text-white border-0 flex-shrink-0">
                                    Enrolled
                                  </Badge>
                                ) : (
                                  <Badge className="bg-green-100 text-green-700 border-0 flex-shrink-0">
                                    Eligible
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>

                        {/* Benefit Highlight */}
                        <div className={`rounded-xl p-4 mb-4 ${
                          scheme.color === 'green' ? 'bg-green-50 border-2 border-green-200' :
                          scheme.color === 'blue' ? 'bg-blue-50 border-2 border-blue-200' :
                          scheme.color === 'orange' ? 'bg-orange-50 border-2 border-orange-200' :
                          'bg-purple-50 border-2 border-purple-200'
                        }`}>
                          <div className="flex items-center mb-2">
                            <IndianRupee className={`w-5 h-5 mr-2 ${
                              scheme.color === 'green' ? 'text-green-600' :
                              scheme.color === 'blue' ? 'text-blue-600' :
                              scheme.color === 'orange' ? 'text-orange-600' :
                              'text-purple-600'
                            }`} />
                            <span className={`${
                              scheme.color === 'green' ? 'text-green-900' :
                              scheme.color === 'blue' ? 'text-blue-900' :
                              scheme.color === 'orange' ? 'text-orange-900' :
                              'text-purple-900'
                            }`}>
                              {scheme.benefit}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm">{scheme.description}</p>
                        </div>

                        {/* Details */}
                        <div className="space-y-2 mb-4 text-sm">
                          <div className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-600">Eligibility: </span>
                              <span className="text-gray-900">{scheme.eligibility}</span>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-600">Crops: </span>
                              <span className="text-gray-900">{scheme.crops.join(', ')}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          {scheme.status === 'enrolled' ? (
                            <Button 
                              variant="outline" 
                              className="flex-1 border-2 border-blue-300 text-blue-700 h-11 rounded-xl"
                            >
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              View Status
                            </Button>
                          ) : (
                            <Button 
                              className={`flex-1 h-11 rounded-xl ${
                                scheme.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                                scheme.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                                scheme.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' :
                                'bg-purple-600 hover:bg-purple-700'
                              } text-white`}
                              onClick={() => setSelectedScheme(scheme.id)}
                            >
                              <Sparkles className="w-4 h-4 mr-2" />
                              Check Eligibility
                            </Button>
                          )}
                          <Button 
                            variant="outline" 
                            className="px-5 border-2 h-11 rounded-xl"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info Banner */}
          {!loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <Card className="bg-yellow-50 border-2 border-yellow-200 p-5">
                <div className="flex items-start">
                  <Sparkles className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-900">
                    <p className="mb-1">
                      <strong>Need Help?</strong>
                    </p>
                    <p className="text-yellow-800">
                      Our agricultural advisors will help you with the application process. 
                      Helpline: 1800-123-4567 (Toll Free)
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>

      {/* Eligibility Check Modal */}
      <AnimatePresence>
        {selectedScheme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedScheme(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl"
            >
              <div className="text-center mb-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-gray-900 text-xl mb-2">You are Eligible!</h3>
                <p className="text-gray-600">
                  You can apply for this scheme
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600 mb-1">Estimated Benefit</div>
                  <div className="text-2xl text-green-600">₹8,000 - ₹12,000</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-sm">
                  <div className="text-gray-600 mb-2">Required Documents:</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Aadhaar Card</li>
                    <li>• Land Documents</li>
                    <li>• Bank Account Details</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setSelectedScheme(null)}
                  variant="outline"
                  className="flex-1 h-12 border-2 rounded-xl"
                >
                  Close
                </Button>
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white h-12 rounded-xl"
                >
                  Apply Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
