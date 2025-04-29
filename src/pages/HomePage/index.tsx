import React, { useState } from 'react';
import { FeaturedSection } from './components/FeaturedSection';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import { ReviewOrderModal } from '../../components/ReviewOrderModal';
import { pizzas, drinks, desserts } from '../../data/products';
import { Container } from './styles';
import { PromotionBanner } from './components/PromotionBanner';
import { CartItem } from '../../contexts/CartContext';

const HomePage: React.FC = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);

  const handleOpenReviewModal = (item: CartItem) => {
    setSelectedItem(item);
    setIsReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  return (
    <Container>
      <HeroSection />
      
      <PromotionBanner />
      
      <FeaturedSection
        title="Most Popular Pizzas"
        description="Our customers' favorite pizza choices, made with fresh ingredients and traditional recipes."
        items={pizzas.filter(pizza => pizza.featured).slice(0, 4)}
        onOrderClick={handleOpenReviewModal}
      />
      
      <CategorySection 
        category="pizza"
        title="Our Pizza Selection"
        items={pizzas}
        onOrderClick={handleOpenReviewModal}
      />
      
      <FeaturedSection
        title="Refreshing Drinks"
        description="Perfect companions for your pizza, from classic sodas to craft beverages."
        items={drinks.filter(drink => drink.featured).slice(0, 4)}
        onOrderClick={handleOpenReviewModal}
      />
      
      <FeaturedSection
        title="Sweet Desserts"
        description="Complete your meal with our delicious dessert options."
        items={desserts.filter(dessert => dessert.featured).slice(0, 4)}
        onOrderClick={handleOpenReviewModal}
      />

      {isReviewModalOpen && selectedItem && (
        <ReviewOrderModal 
          item={selectedItem}
          onClose={handleCloseReviewModal}
        />
      )}
    </Container>
  );
};

export default HomePage;