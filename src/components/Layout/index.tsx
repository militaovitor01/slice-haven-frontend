import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Main } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;