import React, { useState } from 'react';
import styled from 'styled-components';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

const CardElement = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1rem;
  background-color: white;
  height: 40px;
  display: flex;
  align-items: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  width: 100%;
`;

const PayButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
  }
`;

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onError }) => {
  const [cardholderName, setCardholderName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cardholderName.trim()) {
      onError('Please enter the cardholder name');
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // In a real implementation, this would communicate with a payment API
      // For now, we'll just simulate a successful payment
      setTimeout(() => {
        onSuccess();
        setIsProcessing(false);
      }, 1500);
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Payment processing failed');
      setIsProcessing(false);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="cardholderName">Cardholder Name</Label>
          <Input
            id="cardholderName"
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            placeholder="Name on card"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Card Information</Label>
          <CardElement>
            {/* In a real implementation, this would be replaced with Stripe's CardElement */}
            **** **** **** 4242 (Simulated card input)
          </CardElement>
        </InputGroup>

        <PayButton type="submit" disabled={isProcessing}>
          {isProcessing ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
        </PayButton>
      </form>
    </FormContainer>
  );
};

export default PaymentForm; 