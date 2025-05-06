import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ scrolled, theme }) => 
    scrolled ? theme.colors.background : 'rgba(255, 255, 255, 0.95)'};
  box-shadow: ${({ scrolled, theme }) => 
    scrolled ? theme.shadows.md : 'none'};
  transition: all ${({ theme }) => theme.transitions.normal};
  backdrop-filter: blur(10px);
`;

export const NavContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  
  svg {
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover svg {
    transform: rotate(20deg);
  }
`;

export const LogoText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const NavLinks = styled.div`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    gap: 2rem;
  }
`;

export const NavLink = styled(Link)<{ active: boolean }>`
  font-family: ${({ theme }) => theme.fonts.headline};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.textPrimary};
  position: relative;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.normal};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

export const CartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: rgba(217, 47, 47, 0.1);
    transform: scale(1.05);
  }
`;

export const CartCounter = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 0.1rem 0.4rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  min-width: 20px;
  text-align: center;
`;

export const MobileMenuButton = styled.button`
  display: flex;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md};
  animation: slideDown 0.3s ease;
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;