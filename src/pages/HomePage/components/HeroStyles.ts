import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.section`
  height: 80vh;
  max-height: 700px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), 
    url('https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: -2rem;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.5rem;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 4rem;
  }
`;

export const Subheadline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
`;

export const HeroButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-family: ${({ theme }) => theme.fonts.headline};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: all ${({ theme }) => theme.transitions.normal};
  text-decoration: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const OfferBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-family: ${({ theme }) => theme.fonts.headline};
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;