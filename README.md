# Seedify: Crop Shift Mitigation App for Promoting Oilseed Farming

This is a smart mobile application designed to reduce the shift from oilseeds to other crops by making oilseed farming more attractive and profitable for Indian farmers. The app leverages predictive analytics and market intelligence to enable informed decision-making through real-time data, government support integration, and assured procurement linkages.

## Live Demo

You can view the live demo of the application at: https://seedify-git-main-idkanythinghelps-projects.vercel.app/


## Features

- **Comparative Crop Economics**: Interactive dashboards showing cost-benefit analysis of oilseeds vs alternative crops
- **Real-time Market Intelligence**: Live price alerts, procurement updates, and regional market trends for oilseeds
- **Government Schemes Integration**: Access to NMEO-OS and other subsidies with push notifications
- **Virtual Profitability Simulation**: "What-if" scenarios for crop decisions based on soil, weather, and market trends
- **Weather-based Advisory**: AI-powered weather predictions, pest/disease alerts, and irrigation recommendations
- **FPO and Buyer Linkages**: Platform to connect farmers with FPOs and potential buyers
- **Gamification & Incentives**: Reward points for expanding oilseed acreage and achieving production milestones
- **Mobile-First Design**: Optimized for mobile devices with intuitive navigation
- **Bilingual Support**: Available in both Hindi and English
- **Interactive Prototype**: Fully functional demo with realistic data

## Target Audience

Indian farmers shifting from oilseeds to crops like paddy, sugarcane, and maize due to assured procurement and price stability in those crops.

## Application Flow

1. **Splash Screen**: Welcome screen with branding
2. **Login/Signup**: OTP-based authentication (demo OTP: 123456)
3. **Dashboard**: Home screen with personalized greeting, weather widget, market prices, and quick actions
4. **AI Profit Simulator**: Compare profits between current crops and oilseeds with "what-if" scenarios
5. **Market Hub**: Browse verified FPO buyers for assured procurement
6. **Government Schemes**: Access information about relevant agricultural schemes
7. **Bottom Navigation**: Persistent navigation between main sections

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React hooks
- **Form Handling**: React Hook Form
- **Data Visualization**: Recharts
- **OTP Input**: input-otp
- **Toasts**: Sonner

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server on `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This will create a production-ready build in the `build` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/              # Reusable UI components
│   └── *.tsx            # Feature components
├── styles/              # Global styles
└── *.tsx                # Main application files
```

## Key Components

- **SplashScreen**: Initial loading screen with animated logo
- **LoginScreen**: OTP-based authentication flow
- **Dashboard**: Main home screen with weather, market prices, and quick actions
- **ProfitSimulator**: Virtual profitability simulation with "what-if" scenarios
- **MarketHub**: Verified FPO buyer listings for assured procurement
- **GovernmentSchemes**: Information about NMEO-OS and other agricultural subsidy programs
- **BottomNav**: Persistent navigation between main sections

## Deployment

1. Build the project: `npm run build`
2. Deploy the contents of the `build` directory to your preferred hosting platform
3. The app is optimized for static hosting platforms like Netlify, Vercel, or GitHub Pages

## Demo Instructions

1. Start the development server: `npm run dev`
2. Use any 10-digit mobile number for login
3. Enter the demo OTP: `123456`
4. Explore all sections using the bottom navigation

## Unique Selling Points

1. **AI-Powered Decision Engine**: Uses predictive analytics to suggest the most profitable crop mix
2. **Integrated Risk Mitigation Tools**: Virtual crop insurance options and government procurement scheme links
3. **Gamified Farmer Engagement**: Points, badges, and rewards for oilseed farming adherence
4. **Dynamic Profitability Simulation**: Interactive "what-if" simulations tailored to each farmer
5. **Community-driven Knowledge Sharing**: Social-feed-like interface for sharing experiences

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## Documentation

- [Demo Guide](./src/DEMO_GUIDE.md) - Detailed walkthrough of all features


## License

This project is proprietary and confidential. All rights reserved.