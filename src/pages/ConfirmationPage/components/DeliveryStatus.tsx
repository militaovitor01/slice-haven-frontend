import React from 'react';
import styled from 'styled-components';

interface DeliveryStatusProps {
  progress: number;
  status: 'preparing' | 'on-the-way' | 'delivered';
}

const StatusContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
`;

const Progress = styled.div<{ width: number; status: string }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background-color: ${({ status, theme }) => 
    status === 'delivered' 
      ? theme.colors.success 
      : status === 'on-the-way' 
        ? theme.colors.primary 
        : theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: width 0.5s ease-in-out;
`;

const StatusLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const StatusMessage = styled.div<{ status: string }>`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ status, theme }) => 
    status === 'delivered' 
      ? theme.colors.success 
      : status === 'on-the-way' 
        ? theme.colors.primary 
        : theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ progress, status }) => {
  const getMessage = () => {
    switch(status) {
      case 'preparing':
        return 'Your order is being prepared';
      case 'on-the-way':
        return 'Your order is on the way';
      case 'delivered':
        return 'Your order has been delivered';
      default:
        return 'Tracking your order';
    }
  };

  return (
    <StatusContainer>
      <ProgressBar>
        <Progress width={progress} status={status} />
      </ProgressBar>
      
      <StatusLabels>
        <span>Order Received</span>
        <span>Preparing</span>
        <span>On the Way</span>
        <span>Delivered</span>
      </StatusLabels>
      
      <StatusMessage status={status}>
        {getMessage()}
      </StatusMessage>
    </StatusContainer>
  );
};