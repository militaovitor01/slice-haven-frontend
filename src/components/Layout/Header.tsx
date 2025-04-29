import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Pizza, Menu, X, Clock } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import {
  HeaderContainer,
  NavContainer,
  Logo,
  LogoText,
  NavLinks,
  NavLink,
  CartButton,
  CartCounter,
  MobileMenuButton,
  MobileMenu
} from './HeaderStyles';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <HeaderContainer scrolled={isScrolled}>
      <NavContainer>
        <Link to="/">
          <Logo>
            <Pizza size={32} />
            <LogoText>Slice Haven</LogoText>
          </Logo>
        </Link>

        <NavLinks>
          <NavLink to="/" active={location.pathname === '/'}>Menu</NavLink>
          <NavLink to="/orders" active={location.pathname === '/orders'}>
            <Clock size={18} />
            Orders
          </NavLink>
          <NavLink to="/promotions" active={location.pathname === '/promotions'}>Promotions</NavLink>
          <NavLink to="/locations" active={location.pathname === '/locations'}>Locations</NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>About Us</NavLink>
        </NavLinks>

        <Link to="/cart">
          <CartButton>
            <ShoppingCart size={24} />
            {totalItems > 0 && <CartCounter>{totalItems}</CartCounter>}
          </CartButton>
        </Link>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>

        {isMobileMenuOpen && (
          <MobileMenu>
            <NavLink to="/" active={location.pathname === '/'}>Menu</NavLink>
            <NavLink to="/orders" active={location.pathname === '/orders'}>Orders</NavLink>
            <NavLink to="/promotions" active={location.pathname === '/promotions'}>Promotions</NavLink>
            <NavLink to="/locations" active={location.pathname === '/locations'}>Locations</NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>About Us</NavLink>
            <NavLink to="/cart" active={location.pathname === '/cart'}>
              Cart ({totalItems})
            </NavLink>
          </MobileMenu>
        )}
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header