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

// Estilo do cartão de crédito
const CreditCardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 2rem auto;
  perspective: 1000px;
`;

const CreditCard = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #3a7bd5, #00d2ff);
  border-radius: 16px;
  padding: 20px;
  color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const CardChip = styled.div`
  width: 50px;
  height: 40px;
  background: linear-gradient(45deg, #ccc, #eee);
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 8px;
    background: rgba(0, 0, 0, 0.1);
    left: 10%;
  }
  
  &::before {
    top: 10px;
  }
  
  &::after {
    bottom: 10px;
  }
`;

const CardNumber = styled.div`
  font-size: 1.4rem;
  letter-spacing: 3px;
  margin-bottom: 20px;
  text-align: center;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
`;

const CardName = styled.div`
  text-transform: uppercase;
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardExpiry = styled.div``;

const CardLogo = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  font-style: italic;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #3a7bd5;
  }
`;

const CardInfoRow = styled.div`
  display: flex;
  gap: 1rem;
  
  & > div {
    flex: 1;
  }
`;

const CardElement = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0.75rem 1rem;
  background-color: white;
  height: 40px;
  display: flex;
  align-items: center;
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
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onError }) => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Formata o número do cartão em grupos de 4 dígitos
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Formata a data de expiração como MM/AA
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardNumber(formatCardNumber(value));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setExpiryDate(formatExpiryDate(value));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validação básica
    if (!cardholderName.trim()) {
      setError('Nome do titular é obrigatório');
      return;
    }
    
    if (cardNumber.replace(/\s/g, '').length < 16) {
      setError('Número do cartão deve ter 16 dígitos');
      return;
    }
    
    if (expiryDate.length < 5) {
      setError('Data de validade inválida');
      return;
    }
    
    if (cvv.length < 3) {
      setError('CVV inválido');
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Simula um processamento de pagamento
      setTimeout(() => {
        onSuccess();
        setIsProcessing(false);
      }, 1500);
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Falha no processamento do pagamento');
      setIsProcessing(false);
    }
  };

  // Exibe os últimos 4 dígitos do cartão se for preenchido, ou placeholder
  const displayCardNumber = cardNumber 
    ? cardNumber.replace(/\d(?=\d{4})/g, '*')
    : '**** **** **** ****';

  return (
    <FormContainer>
      <CreditCardContainer>
        <CreditCard>
          <CardChip />
          <CardNumber>{displayCardNumber}</CardNumber>
          <CardDetails>
            <CardName>
              {cardholderName || 'NOME DO TITULAR'}
            </CardName>
            <CardExpiry>
              {expiryDate || 'MM/AA'}
            </CardExpiry>
          </CardDetails>
          <CardLogo>
            VISA
          </CardLogo>
        </CreditCard>
      </CreditCardContainer>
      
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="cardholderName">Nome do Titular</Label>
          <Input
            id="cardholderName"
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            placeholder="Nome como aparece no cartão"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="cardNumber">Número do Cartão</Label>
          <Input
            id="cardNumber"
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            required
          />
        </InputGroup>

        <CardInfoRow>
          <InputGroup>
            <Label htmlFor="expiryDate">Validade</Label>
            <Input
              id="expiryDate"
              type="text"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/AA"
              maxLength={5}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              type="text"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="123"
              maxLength={3}
              required
            />
          </InputGroup>
        </CardInfoRow>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <PayButton type="submit" disabled={isProcessing}>
          {isProcessing ? 'Processando...' : `Pagar R$${amount.toFixed(2)}`}
        </PayButton>
      </form>
    </FormContainer>
  );
};

export default PaymentForm; 