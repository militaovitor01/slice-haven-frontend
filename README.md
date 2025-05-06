# Slice Haven - Pizza Ordering Application

Slice Haven is a modern web application for ordering pizzas online, built with React, TypeScript, and Vite. The application provides a seamless experience for users to browse, order, and track their pizza deliveries.

## 🚀 Features

- 🍕 Browse and order pizzas
- 🛒 Shopping cart functionality
- 💳 Secure checkout process
- 📱 Responsive design
- 📍 Multiple location support
- 🎉 Promotions and special offers
- 📋 Order history tracking

## 🛠️ Technologies Used

- React 18
- TypeScript
- Vite
- React Router DOM
- Styled Components
- Tailwind CSS
- Stripe (for payments)
- ESLint
- PostCSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd slice-haven-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts (e.g., CartContext)
├── pages/         # Page components
├── styles/        # Global styles and theme
└── App.tsx        # Main application component
```

## 📦 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Runs ESLint to check code quality

## 🔧 Configuration

The project uses several configuration files:
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration

## 🎨 Styling

The project uses a combination of:
- Styled Components for component-specific styling
- Tailwind CSS for utility classes
- Global styles defined in `src/styles/GlobalStyles.ts`

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:
```
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## 📱 Available Routes

- `/` - Home page
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/confirmation` - Order confirmation
- `/orders` - Order history
- `/promotions` - Current promotions
- `/locations` - Store locations
- `/about` - About page

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- All contributors who have helped shape this project 
