import React, { useState } from 'react';
import { PlusCircle, Star } from 'lucide-react';
import { useCart, CartItem } from '../../contexts/CartContext';
import {
  Card,
  ImageContainer,
  ProductImage,
  ContentContainer,
  ProductName,
  ProductDescription,
  PriceContainer,
  ProductPrice,
  AddButton,
  RatingBadge,
  DiscountBadge
} from './styles';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'pizza' | 'drink' | 'dessert';
  rating?: number;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  onOrderClick: (item: CartItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOrderClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.discount 
        ? product.price * (1 - product.discount / 100) 
        : product.price,
      quantity: 1,
      image: product.image,
      options: product.category === 'pizza' ? { size: 'medium' } : {}
    };
    
    onOrderClick(cartItem);
  };

  return (
    <Card 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageContainer>
        <ProductImage src={product.image} alt={product.name} />
        {product.rating && (
          <RatingBadge>
            <Star size={14} fill="currentColor" /> {product.rating.toFixed(1)}
          </RatingBadge>
        )}
        {product.discount && (
          <DiscountBadge>-{product.discount}%</DiscountBadge>
        )}
      </ImageContainer>
      
      <ContentContainer>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        
        <PriceContainer>
          <ProductPrice>
            ${product.discount 
              ? (product.price * (1 - product.discount / 100)).toFixed(2) 
              : product.price.toFixed(2)}
            
            {product.discount && (
              <span className="original-price">${product.price.toFixed(2)}</span>
            )}
          </ProductPrice>
          
          <AddButton 
            onClick={handleAddToCart}
            isHovered={isHovered}
          >
            <span>Add</span> <PlusCircle size={18} />
          </AddButton>
        </PriceContainer>
      </ContentContainer>
    </Card>
  );
};