import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const ProfileCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
`;

export const ProfileHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const ProfileTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;
`;

export const ProfileInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const InfoLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const InfoValue = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  margin: ${({ theme }) => theme.spacing.lg};
  width: calc(100% - ${({ theme }) => theme.spacing.lg} * 2);

  &:hover {
    background-color: ${({ theme }) => theme.colors.errorDark};
    transform: translateY(-2px);
  }
`; 