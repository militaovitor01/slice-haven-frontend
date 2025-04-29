import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PromotionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PromotionCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const PromotionImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PromotionDetails = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const CardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const CouponCode = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.md} 0;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  span {
    font-family: ${({ theme }) => theme.fonts.headline};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    letter-spacing: 1px;
  }
`;

export const CopyButton = styled.button`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export const ExpiryDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const TermsLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  z-index: 1;
`;