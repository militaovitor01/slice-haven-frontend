import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.md};
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  
  p {
    margin-top: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.6;
  }
`;

export const FooterHeading = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterLink = styled.a`
  color: #CCCCCC;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: color ${({ theme }) => theme.transitions.fast};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  background-color: rgba(255, 255, 255, 0.1);
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md} 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: #999999;
`;