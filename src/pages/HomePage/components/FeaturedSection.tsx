import React from 'react';
import { ProductCard } from '../../../components/ProductCard';
import { CartItem } from '../../../contexts/CartContext';
import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  ProductGrid
} from './FeaturedSectionStyles';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'pizza' | 'drink' | 'dessert';
  featured?: boolean;
}

interface FeaturedSectionProps {
  title: string;
  description: string;
  items: Product[];
  onOrderClick: (item: CartItem) => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ 
  title, 
  description, 
  items,
  onOrderClick 
}) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
      </SectionHeader>
      
      <ProductGrid>
        {items.map(item => (
          <ProductCard 
            key={item.id}
            product={item}
            onOrderClick={onOrderClick}
          />
        ))}
      </ProductGrid>
    </SectionContainer>
  );
};