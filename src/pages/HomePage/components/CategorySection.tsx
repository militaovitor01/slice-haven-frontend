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
  // Extract unique subcategories
  const subCategories = ['All', ...new Set(items.map(item => item.subCategory || 'Classic'))];
  const [activeSubCategory, setActiveSubCategory] = useState('All');
  
  // Filter items by subcategory
  const filteredItems = activeSubCategory === 'All' 
    ? items 
    : items.filter(item => item.subCategory === activeSubCategory || (!item.subCategory && activeSubCategory === 'Classic'));

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
              active={activeSubCategory === subCategory}
              onClick={() => setActiveSubCategory(subCategory)}
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