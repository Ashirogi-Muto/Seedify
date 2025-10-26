# Seedify - Interactive Demo Guide

## 🌾 About Seedify
Seedify is a comprehensive mobile application designed to empower Indian farmers to cultivate oilseeds by providing AI-driven insights, market linkages, and government scheme access.

## 🎯 Application Flow

### 1. Splash Screen (Auto-transitions after 2.5 seconds)
- Animated Seedify logo with loading indicator
- Tagline: "बीज से बाज़ार तक" (From Seed to Market)

### 2. Login/Signup Screen
- **OTP-based authentication**
- Enter any 10-digit mobile number
- **Demo OTP: `123456`** (Use this to login)
- Includes error state handling for incorrect OTP

### 3. Dashboard (Home Screen)
- **Personalized Greeting**: "नमस्ते, राजेश कुमार"
- **Location**: Jaipur, Rajasthan
- **Main Action Card**: "Compare Crop Profits Now!" (Click to go to Simulator)
- **Weather Widget**: Live weather display (32°C, Clear Sky)
- **Market Price Ticker**: Real-time oilseed prices with trend indicators
  - Mustard (Jaipur): ₹5,850/qtl ▲ +2.3%
  - Soybean (Indore): ₹4,320/qtl ▲ +1.8%
  - Groundnut (Junagadh): ₹6,150/qtl ▼ -0.5%
- **Quick Actions**: 
  - "Find Buyers" (Navigate to Market Hub)
  - "View Schemes" (Navigate to Government Schemes)

### 4. AI Profit Simulator
- **Input Section**:
  - Current Crop: Wheat, Rice, Cotton, Chickpea
  - Oilseed to Compare: Mustard, Soybean, Groundnut, Sunflower
  - Land Area: Enter in acres
- **Calculate Button**: Triggers AI analysis with loading animation
- **Results Display**:
  - **Profit Difference Highlight**: Shows additional profit (₹34,000, +81% more)
  - **Animated Bar Chart**: Side-by-side comparison with stacked bars (Base Profit + Subsidy)
  - **Detailed Breakdown**: 
    - Current Crop: ₹42,000 total (Medium Risk)
    - Oilseed: ₹76,000 total (Low Risk, ₹8,000 subsidy)
  - **AI Recommendations**: Personalized suggestions based on data

### 5. Assured Market Hub (FPO Listings)
- **Stats**: Shows total registered FPO buyers
- **Search Bar**: Search by name or location
- **Filters**:
  - Filter by Crop: All, Mustard, Soybean, Groundnut, Sunflower
  - Sort by: Distance, Rate
- **Loading State**: Skeleton cards (1.5 seconds)
- **FPO Cards** (5 realistic examples):
  1. **Adani Wilmar FPO** (Alwar) - Mustard @ ₹5,800/qtl - 12km
  2. **Rajasthan Oilseeds Cooperative** (Jaipur) - Soybean @ ₹4,350/qtl - 8km
  3. **Kisan Mandi FPO** (Sikar) - Groundnut @ ₹6,200/qtl - 25km
  4. **Patanjali Organic FPO** (Bhilwara) - Mustard @ ₹5,750/qtl - 45km
  5. **Mahindra Agri FPO** (Ajmer) - Sunflower @ ₹5,500/qtl - 32km
- Each card has:
  - Verified badge
  - Location with distance
  - Procurement rate
  - **"Contact" button** (Active, clickable)
  - **"Details" button**

### 6. Government Schemes Gateway
- **Stats Card**: 4 schemes available, ₹20,000+ estimated benefits
- **Loading State**: Skeleton cards (1.2 seconds)
- **Scheme Cards** (4 major schemes):

  **1. NMEO-OS (National Mission on Edible Oils - Oil Seeds)**
  - Icon: Sprout (Green)
  - Benefit: Up to ₹8,000/acre subsidy
  - Crops: Mustard, Soybean, Groundnut, Sunflower
  - Status: Eligible
  - **"Check Eligibility" button** → Opens eligibility modal

  **2. PM-KISAN (PM Kisan Samman Nidhi)**
  - Icon: Wallet (Blue)
  - Benefit: ₹6,000/year (3 installments)
  - Status: Already Enrolled
  - **"View Status" button**

  **3. PMFBY (Pradhan Mantri Fasal Bima Yojana)**
  - Icon: Shield (Orange)
  - Benefit: Up to 90% crop loss compensation
  - Crops: All notified crops
  - Status: Eligible
  - **"Check Eligibility" button**

  **4. KCC (Kisan Credit Card)**
  - Icon: Credit Card (Purple)
  - Benefit: Up to ₹3 lakh loan at 4% interest
  - Status: Eligible
  - **"Check Eligibility" button**

- **Eligibility Modal**: 
  - Shows eligibility confirmation
  - Estimated benefits: ₹8,000 - ₹12,000
  - Required documents listed
  - **"Apply" button**

### 7. Bottom Navigation (Always Visible)
- **होम (Home)**: Dashboard
- **सिम्युलेटर (Simulate)**: AI Profit Simulator
- **खरीदार (Buyers)**: Market Hub
- **योजनाएं (Schemes)**: Government Schemes
- Active tab highlighted with green background
- Smooth animations on tab switch

## 🎨 Design Features

### Color Palette
- **Primary Green**: #22c55e, #16a34a (Agriculture, Growth)
- **Accent Yellow**: #facc15, #eab308 (Mustard fields, Optimism)
- **Accent Orange**: #f97316 (Call-to-action)
- **Blue**: #3b82f6 (Trust, Government)
- **Background**: Light grey/white with gradient overlays

### Typography
- Bilingual: Hindi (Devanagari) and English
- Clean, legible fonts
- Clear hierarchy

### Animations
- Smooth page transitions (Motion/React)
- Loading states with spinners and skeleton loaders
- Button press feedback (scale animations)
- Tab switching animations
- Chart animations (Recharts)
- Modal slide-ins

### Interactive Elements
- All buttons have hover and active states
- Forms with real-time validation
- Error states with clear messaging
- Success states with visual feedback
- Clickable cards with shadow effects

## 📱 User Experience

### Target Audience
- Indian farmers with varying digital literacy
- Focus on simplicity and clarity
- Trust-building through verified badges and government integration

### Key Interactions
1. **Easy Navigation**: Bottom nav always accessible
2. **Clear CTAs**: Large, prominent action buttons
3. **Visual Feedback**: Loading states, animations, success messages
4. **Data Transparency**: Realistic sample data, clear breakdowns
5. **Multilingual**: Hindi primary with English support

### Accessibility
- High contrast colors
- Large touch targets
- Clear icons with labels
- Error messages in local language

## 🚀 Technical Features

### Built With
- React (TypeScript)
- Tailwind CSS
- Motion (Framer Motion) for animations
- Recharts for data visualization
- Shadcn/ui components
- Lucide React icons

### State Management
- React useState for screen navigation
- Form state management
- Loading state handling
- Error state management

### Responsive Design
- Mobile-first approach
- Max-width container (448px)
- Optimized for Android/iOS

## 💡 Demo Tips

1. **Start from Splash**: Watch the full onboarding experience
2. **Use Demo OTP**: Enter `123456` when prompted
3. **Explore All Tabs**: Use bottom navigation to switch between sections
4. **Try the Simulator**: 
   - Select "Wheat" as current crop
   - Select "Mustard" as oilseed
   - Enter "5" acres
   - Click "Calculate" and watch the animation
5. **Browse FPO Listings**: Use filters to find specific crops
6. **Check Eligibility**: Click on NMEO-OS scheme to see eligibility modal

## 🎯 Key Differentiators

1. **AI-Powered**: Real-time profit calculations based on market data
2. **Assured Markets**: Verified FPO buyers with guaranteed procurement
3. **Government Integration**: Direct access to schemes and subsidies
4. **Visual Clarity**: Charts and graphs for easy understanding
5. **Complete Experience**: Fully working prototype with realistic data
6. **Farmer-Centric**: Designed for ease of use with local language support

---

**Note**: This is a high-fidelity interactive prototype. All data is realistic placeholder content for demonstration purposes. In production, this would connect to live APIs for real-time market prices, weather data, and government scheme databases.
