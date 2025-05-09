import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  Container,
  ProfileCard,
  ProfileHeader,
  ProfileTitle,
  ProfileInfo,
  InfoGroup,
  InfoLabel,
  InfoValue,
  LogoutButton
} from './styles';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <Container>
      <ProfileCard>
        <ProfileHeader>
          <ProfileTitle>My Profile</ProfileTitle>
        </ProfileHeader>

        <ProfileInfo>
          <InfoGroup>
            <InfoLabel>Name</InfoLabel>
            <InfoValue>{user.name}</InfoValue>
          </InfoGroup>

          <InfoGroup>
            <InfoLabel>Email</InfoLabel>
            <InfoValue>{user.email}</InfoValue>
          </InfoGroup>

          <InfoGroup>
            <InfoLabel>Address</InfoLabel>
            <InfoValue>{user.address}</InfoValue>
          </InfoGroup>

          <InfoGroup>
            <InfoLabel>Phone</InfoLabel>
            <InfoValue>{user.phone}</InfoValue>
          </InfoGroup>

          <InfoGroup>
            <InfoLabel>Member Since</InfoLabel>
            <InfoValue>{new Date(user.created_at).toLocaleDateString()}</InfoValue>
          </InfoGroup>
        </ProfileInfo>

        <LogoutButton onClick={logout}>
          Logout
        </LogoutButton>
      </ProfileCard>
    </Container>
  );
};

export default ProfilePage; 