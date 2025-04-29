import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const ContentContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const ProductPrice = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  .original-price {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: line-through;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }
`;

export const AddButton = styled.button<{ isHovered: boolean }>`
  background-color: ${({ theme, isHovered }) => 
    isHovered ? theme.colors.primary : 'transparent'};
  color: ${({ theme, isHovered }) => 
    isHovered ? theme.colors.textLight : theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts.headline};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
    transform: translateY(-2px);
  }
`;

export const RatingBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  background-color: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  left: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;