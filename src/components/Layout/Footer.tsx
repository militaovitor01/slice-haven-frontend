import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterHeading,
  FooterLink,
  SocialLinks,
  SocialLink,
  ContactItem,
  Logo,
  Copyright,
  FooterBottom
} from './FooterStyles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            <Pizza size={28} />
            <FooterHeading>Slice Haven</FooterHeading>
          </Logo>
          <p>Authentic pizzas made with fresh ingredients, delivered to your doorstep with love.</p>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink as={Link} to="/">Menu</FooterLink>
          <FooterLink as={Link} to="/promotions">Promotions</FooterLink>
          <FooterLink as={Link} to="/locations">Locations</FooterLink>
          <FooterLink as={Link} to="/about">About Us</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Help</FooterHeading>
          <FooterLink as={Link} to="/contact">Contact Us</FooterLink>
          <FooterLink as={Link} to="/faq">FAQ</FooterLink>
          <FooterLink as={Link} to="/privacy">Privacy Policy</FooterLink>
          <FooterLink as={Link} to="/terms">Terms & Conditions</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Contact</FooterHeading>
          <ContactItem>
            <MapPin size={18} />
            <span>123 Pizza Street, New York, NY 10001</span>
          </ContactItem>
          <ContactItem>
            <Phone size={18} />
            <span>(123) 456-7890</span>
          </ContactItem>
          <ContactItem>
            <Mail size={18} />
            <span>info@slicehaven.com</span>
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>&copy; {new Date().getFullYear()} Slice Haven. All rights reserved.</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;