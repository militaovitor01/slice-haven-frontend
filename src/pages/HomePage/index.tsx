import React, { useState, useEffect } from 'react';
import { FeaturedSection } from './components/FeaturedSection';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import { ReviewOrderModal } from '../../components/ReviewOrderModal';
import { Container } from './styles';
import { PromotionBanner } from './components/PromotionBanner';
import { CartItem } from '../../contexts/CartContext';

const HomePage: React.FC = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);

  const [pizzas, setPizzas] = useState<CartItem[]>([]);
  const [drinks, setDrinks] = useState<CartItem[]>([]);
  const [desserts, setDesserts] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pizzasRes, drinksRes, dessertsRes] = await Promise.all([
          fetch('http://localhost:3001/api/pizzas'),
          fetch('http://localhost:3001/api/drinks'),
          fetch('http://localhost:3001/api/desserts'),
        ]);

        const [pizzasData, drinksData, dessertsData] = await Promise.all([
          pizzasRes.json(),
          drinksRes.json(),
          dessertsRes.json(),
        ]);

        setPizzas(pizzasData);
        setDrinks(drinksData);
        setDesserts(dessertsData);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const handleOpenReviewModal = (item: CartItem) => {
    setSelectedItem(item);
    setIsReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  if (pizzas.length === 0 && drinks.length === 0 && desserts.length === 0) {
    return <p>Carregando...</p>;
  }

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
