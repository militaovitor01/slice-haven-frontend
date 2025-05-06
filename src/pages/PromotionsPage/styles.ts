import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  color: ${theme.colors.textPrimary};
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Montserrat', sans-serif;
`;

export const PromotionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PromotionCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardHeader = styled.div`
  padding: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: ${theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;

export const CardDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
  font-family: 'Montserrat', sans-serif;
`;

export const PromotionImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PromotionDetails = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TermsLink = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 6px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${theme.colors.primary};
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background-color: transparent;
    color: ${theme.colors.primary};
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const OriginalPrice = styled.span`
  color: ${theme.colors.textSecondary};
  text-decoration: line-through;
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
`;

export const DiscountedPrice = styled.span`
  color: ${theme.colors.primary};
  font-size: 1.25rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`;