import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.headline};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto auto;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 80px 1fr auto;
    grid-template-rows: auto auto;
  }
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80px;
    height: 80px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const ItemName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const ItemOptions = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const QuantityButton = styled.button<{ disabled?: boolean }>`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ disabled, theme }) => 
    disabled ? '#f5f5f5' : theme.colors.backgroundLight};
  border: 1px solid #e0e0e0;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const QuantityValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  width: 30px;
  text-align: center;
`;

export const ItemPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-column: 2;
    grid-row: 2;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.error};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
`;

export const CartSummary = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.lg};
  height: fit-content;
  position: sticky;
  top: 100px;
`;

export const SummaryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid #e0e0e0;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 2px solid #e0e0e0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const CheckoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  width: 100%;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  font-family: ${({ theme }) => theme.fonts.headline};
  display: block;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
  
  svg {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  ${CheckoutButton} {
    max-width: 200px;
    margin: 0 auto;
  }
`;

export const EmptyCartMessage = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const PromoCode = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const PromoInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid #e0e0e0;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const PromoButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.headline};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
  }
`;