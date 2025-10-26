import { motion } from 'motion/react';
import { Sprout, Phone, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (phone.length !== 10) {
      setError('Please enter a 10-digit mobile number');
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 1500);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (otp.length !== 6) {
      setError('Please enter a 6-digit OTP');
      return;
    }
    
    if (otp !== '123456') {
      setError('Incorrect OTP. Please try again');
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      onLogin();
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 flex flex-col"
    >
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-green-600 rounded-2xl p-4 mb-4">
              <Sprout className="w-12 h-12 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-green-800 text-3xl mb-2">Seedify</h1>
            <p className="text-gray-600">From Seed to Market / बीज से बाज़ार तक</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            {step === 'phone' ? (
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handlePhoneSubmit}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-gray-800 text-2xl mb-1">Welcome!</h2>
                  <p className="text-gray-500">Enter your mobile number</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    Mobile Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="pl-11 h-12 border-2"
                      maxLength={10}
                    />
                  </div>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl"
                  >
                    {error}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Send OTP
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  )}
                </Button>
              </motion.form>
            ) : (
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleOtpSubmit}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-gray-800 text-2xl mb-1">Enter OTP</h2>
                  <p className="text-gray-500">
                    Sent to +91 {phone}
                    <button
                      type="button"
                      onClick={() => setStep('phone')}
                      className="text-green-600 ml-2 underline"
                    >
                      Change
                    </button>
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700">6-Digit OTP</Label>
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                  >
                    <InputOTPGroup className="gap-2">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className="w-12 h-14 border-2 rounded-xl"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                  <p className="text-sm text-gray-500 mt-2">
                    For demo: <span className="font-mono text-green-600">123456</span>
                  </p>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl"
                  >
                    {error}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Verifying...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Login
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  )}
                </Button>

                <button
                  type="button"
                  className="w-full text-green-600 text-center underline"
                  onClick={() => {
                    setStep('otp');
                    setOtp('');
                  }}
                >
                  Resend OTP
                </button>
              </motion.form>
            )}
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm">
            By logging in, you agree to our Terms & Conditions
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
