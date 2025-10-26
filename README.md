# Seedify Mobile App Design

This is a mobile application for farmers and agricultural businesses, designed to help them optimize crop profits, access government schemes, and connect with buyers.

## Features

- **Dashboard**: Personalized overview with weather information and market prices
- **Profit Simulator**: Compare potential profits from different crops
- **Market Hub**: Find buyers and check current market prices
- **Government Schemes**: Access information about agricultural subsidies and programs
- **Mobile-First Design**: Optimized for mobile devices with intuitive navigation

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React hooks
- **Form Handling**: React Hook Form

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
│   ├── figma/           # Figma-related utilities
│   └── *.tsx            # Feature components
├── styles/              # Global styles
└── *.tsx                # Main application files
```

## Deployment

1. Build the project: `npm run build`
2. Deploy the contents of the `build` directory to your preferred hosting platform

## Figma Design

The original design is available at [Seedify Mobile App Design](https://www.figma.com/design/NScIuILfAKpI4yTUo47cKK/Seedify-Mobile-App-Design)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is proprietary and confidential. All rights reserved.