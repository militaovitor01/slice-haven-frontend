import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './contexts/CartContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ConfirmationPage from './pages/ConfirmationPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import PromotionsPage from './pages/PromotionsPage';
import LocationsPage from './pages/LocationsPage';
import AboutPage from './pages/AboutPage';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;