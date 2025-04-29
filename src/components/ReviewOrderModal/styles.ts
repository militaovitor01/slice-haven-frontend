import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.md};
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow: auto;
  position: relative;
  animation: slideUp 0.4s ease;
  
  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #d1d1d1;
    border-radius: 8px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  z-index: 10;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 45% 55%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: ${({ theme }) => theme.borderRadius.lg} 0 0 ${({ theme }) => theme.borderRadius.lg};
    aspect-ratio: auto;
    height: 100%;
  }
`;

export const ProductInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ProductName = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ProductPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const OptionsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const OptionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const OptionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const OptionItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  input {
    accent-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CheckboxOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  input {
    accent-color: ${({ theme }) => theme.colors.primary};
    width: 16px;
    height: 16px;
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
`;

export const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SizeOption = styled.div<{ selected: boolean }>`
  border: 2px solid ${({ selected, theme }) => 
    selected ? theme.colors.primary : theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.fast};
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: ${({ selected, theme }) => 
    selected ? 'rgba(217, 47, 47, 0.1)' : 'transparent'};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
  
  .size-name {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  
  .size-price {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  max-width: 150px;
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`;

export const QuantityButton = styled.button<{ disabled?: boolean }>`
  background-color: #f5f5f5;
  border: none;
  color: ${({ disabled, theme }) => 
    disabled ? theme.colors.textSecondary : theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover:not(:disabled) {
    background-color: #e5e5e5;
  }
`;

export const QuantityValue = styled.div`
  flex: 1;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid #e5e5e5;
`;

export const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-top: ${({ theme }) => theme.spacing.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  font-family: ${({ theme }) => theme.fonts.headline};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
`;