import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  HeroContainer,
  HeroContent,
  Headline,
  Subheadline,
  HeroButton,
  OfferBadge
} from './HeroStyles';

export const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <OfferBadge>New customers get 20% off!</OfferBadge>
        <Headline>
          Authentic Italian Pizza <br />
          Delivered to Your Door
        </Headline>
        <Subheadline>
          Fresh ingredients, traditional recipes, and fast delivery
        </Subheadline>
        <HeroButton to="/#pizza-section">
          View Our Menu <ArrowRight size={18} />
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};