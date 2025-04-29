import styled from 'styled-components';
import { SectionContainer, SectionHeader, SectionTitle, SectionDescription, ProductGrid } from './FeaturedSectionStyles';

export { SectionContainer, SectionHeader, SectionTitle, SectionDescription, ProductGrid };

export const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const CategoryTab = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => 
    active ? theme.colors.textLight : theme.colors.textPrimary};
  border: 1px solid ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.headline};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.primary : 'rgba(0, 0, 0, 0.05)'};
    transform: translateY(-2px);
  }
`;