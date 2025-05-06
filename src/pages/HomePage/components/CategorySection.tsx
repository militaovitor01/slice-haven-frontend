import React, { useState } from 'react';
import { ProductCard } from '../../../components/ProductCard';
import { CartItem } from '../../../contexts/CartContext';
import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  ProductGrid,
  CategoryTabs,
  CategoryTab
} from './CategorySectionStyles';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'pizza' | 'drink' | 'dessert';
  subCategory?: string;
  featured?: boolean;
  discount?: number;
}

interface CategorySectionProps {
  category: string;
  title: string;
  items: Product[];
  onOrderClick: (item: CartItem) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ 
  category,
  title,
  items,
  onOrderClick 
}) => {
  // Define the subcategories based on the database
  const subCategories = [
    'All',
    'Classic',
    'Special',
    'Vegetarian'
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filter items based on selected subcategory
  const filteredItems = items.filter(item => {
    if (activeCategory === 'All') return true;
    return item.subCategory === activeCategory;
  });

  return (
    <SectionContainer id={`${category}-section`}>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>
          Choose from our wide selection of handcrafted pizzas made with fresh ingredients.
        </SectionDescription>
        
        <CategoryTabs>
          {subCategories.map(subCategory => (
            <CategoryTab
              key={subCategory}
              active={activeCategory === subCategory}
              onClick={() => setActiveCategory(subCategory)}
            >
              {subCategory}
            </CategoryTab>
          ))}
        </CategoryTabs>
      </SectionHeader>
      
      <ProductGrid>
        {filteredItems.map(item => (
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