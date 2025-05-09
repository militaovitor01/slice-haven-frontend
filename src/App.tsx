import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import PromotionsPage from './pages/PromotionsPage';
import LocationsPage from './pages/LocationsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/about" element={<AboutPage />} />
              
              {/* Protected Routes */}
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              <Route path="/cart" element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              } />
              <Route path="/checkout" element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              } />
              <Route path="/confirmation" element={
                <ProtectedRoute>
                  <ConfirmationPage />
                </ProtectedRoute>
              } />
              <Route path="/orders" element={
                <ProtectedRoute>
                  <OrderHistoryPage />
                </ProtectedRoute>
              } />
            </Routes>
          </Layout>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;