import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const ConfirmationHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  animation: slideDown 0.5s ease;
  
  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ConfirmationIcon = styled.div`
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ConfirmationTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ConfirmationNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.headline};
`;

export const OrderDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const OrderSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.lg};
  animation: slideIn 0.5s ease;
  
  @keyframes slideIn {
    from {
      transform: translateX(-20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid #e0e0e0;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SectionContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

const mapAnimation = keyframes`
  0% {
    opacity: 0.3;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const DeliveryMap = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.lg};
  animation: ${mapAnimation} 0.8s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  
  .map-container {
    position: relative;
    height: 250px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    overflow: hidden;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  .map-image {
    width: 100%;
    height: 100%;
    background-color: #E0EDFF;
    background-image: 
      linear-gradient(
        rgba(255, 255, 255, 0.4) 1px, 
        transparent 1px
      ),
      linear-gradient(
        90deg, 
        rgba(255, 255, 255, 0.4) 1px, 
        transparent 1px
      );
    background-size: 20px 20px;
  }
`;

export const DeliveryBadge = styled.div<{ status: string }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts.headline};
  background-color: ${({ status, theme }) => 
    status === 'delivered' 
      ? theme.colors.success 
      : status === 'on-the-way' 
        ? theme.colors.primary 
        : theme.colors.accent};
  color: ${({ status, theme }) => 
    status === 'preparing' ? theme.colors.textPrimary : theme.colors.textLight};
  z-index: 10;
`;

export const MapPin = styled.div<{ type: 'restaurant' | 'destination' }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${({ type }) => type === 'restaurant' ? `
    top: 30%;
    left: 20%;
  ` : `
    bottom: 30%;
    right: 20%;
  `}
  
  svg {
    background-color: ${({ type, theme }) => 
      type === 'restaurant' ? theme.colors.primary : theme.colors.success};
    color: white;
    padding: 4px;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  span {
    background-color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-top: 4px;
    white-space: nowrap;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const DeliveryRoute = styled.div<{ progress: number }>`
  position: absolute;
  top: 30%;
  left: 20%;
  width: ${({ progress }) => (progress * 0.6)}%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  transform: rotate(45deg);
  transform-origin: top left;
  
  &:before {
    content: '';
    position: absolute;
    top: -3px;
    right: -6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    display: ${({ progress }) => progress > 0 ? 'block' : 'none'};
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
  }
`;

export const RouteDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  max-height: 200px;
  overflow-y: auto;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.xs};
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #d1d1d1;
    border-radius: 10px;
  }
`;

export const RouteStep = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  .step-indicator {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${({ completed, theme }) => 
      completed ? theme.colors.success : theme.colors.backgroundLight};
    color: ${({ completed, theme }) => 
      completed ? theme.colors.textLight : theme.colors.textSecondary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    flex-shrink: 0;
    border: 1px solid ${({ completed, theme }) => 
      completed ? theme.colors.success : '#e0e0e0'};
  }
  
  .step-content {
    flex: 1;
  }
  
  .step-title {
    font-weight: ${({ completed, theme }) => 
      completed ? theme.fontWeights.medium : theme.fontWeights.normal};
    color: ${({ completed, theme }) => 
      completed ? theme.colors.textPrimary : theme.colors.textSecondary};
  }
  
  .step-time {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const DriverInfo = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  animation: fadeIn 0.5s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const DriverAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const DriverName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const DriverRating = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.accent};
`;

export const DriverStatus = styled.div`
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts.headline};
`;

export const TimeEstimate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  span:first-child {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  span:last-child {
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;

export const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  border-bottom: 1px dashed #e0e0e0;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const ItemName = styled.div`
  flex: 2;
`;

export const ItemQuantity = styled.div`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ItemPrice = styled.div`
  flex: 1;
  text-align: right;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 2px solid #e0e0e0;
`;

export const HomeButton = styled(Link)`
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-family: ${({ theme }) => theme.fonts.headline};
  margin: ${({ theme }) => theme.spacing.xl} auto;
  max-width: 200px;
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    transform: translateY(-2px);
  }
`;