import React, { useState, useEffect } from 'react';
import { FeaturedSection } from './components/FeaturedSection';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import { ReviewOrderModal } from '../../components/ReviewOrderModal';
import { Container } from './styles';
import { PromotionBanner } from './components/PromotionBanner';
import { CartItem } from '../../contexts/CartContext';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'pizza' | 'drink' | 'dessert';
  subCategory?: string;
  featured?: boolean;
  rating?: number;
  discount?: number;
}

interface ApiProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  subCategory?: string;
  featured?: boolean;
  rating?: number;
  discount?: number;
}

interface ApiResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

const HomePage: React.FC = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [pizzas, setPizzas] = useState<Product[]>([]);
  const [drinks, setDrinks] = useState<Product[]>([]);
  const [desserts, setDesserts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [pizzasRes, drinksRes, dessertsRes] = await Promise.all([
          fetch('http://localhost:8080/pizzas'),
          fetch('http://localhost:8080/drinks'),
          fetch('http://localhost:8080/desserts'),
        ]);

        if (!pizzasRes.ok || !drinksRes.ok || !dessertsRes.ok) {
          throw new Error('Erro ao buscar dados da API');
        }

        const [pizzasData, drinksData, dessertsData] = await Promise.all([
          pizzasRes.json() as Promise<ApiResponse<ApiProduct>>,
          drinksRes.json() as Promise<ApiResponse<ApiProduct>>,
          dessertsRes.json() as Promise<ApiResponse<ApiProduct>>,
        ]);

        // Mapear os dados da API para o formato esperado pelo frontend
        const mapApiDataToProduct = (data: ApiProduct): Product => ({
          id: data.id,
          name: data.name,
          description: data.description,
          price: Number(data.price),
          image: data.imageUrl,
          category: data.category as 'pizza' | 'drink' | 'dessert',
          subCategory: data.subCategory,
          featured: data.featured,
          rating: data.rating ? Number(data.rating) : undefined,
          discount: data.discount
        });

        // Garantir que os dados são mapeados corretamente
        console.log('Dados da API:', {
          pizzas: pizzasData.content,
          drinks: drinksData.content,
          desserts: dessertsData.content
        });

        const mappedPizzas = pizzasData.content.map(mapApiDataToProduct);
        const mappedDrinks = drinksData.content.map(mapApiDataToProduct);
        const mappedDesserts = dessertsData.content.map(mapApiDataToProduct);

        console.log('Dados mapeados:', {
          pizzas: mappedPizzas,
          drinks: mappedDrinks,
          desserts: mappedDesserts
        });

        setPizzas(mappedPizzas);
        setDrinks(mappedDrinks);
        setDesserts(mappedDesserts);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        setError('Não foi possível carregar os dados. Por favor, tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
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

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <HeroSection />
      
      <PromotionBanner />
      
      <FeaturedSection
        title="Most Popular Pizzas"
        description="Discover our most loved pizza selections, crafted with premium ingredients and baked to perfection."
        items={pizzas.filter(pizza => pizza.featured).slice(0, 3)}
        onOrderClick={handleOpenReviewModal}
        isPopular={true}
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
        items={drinks.slice(0, 15)}
        onOrderClick={handleOpenReviewModal}
      />
      
      <FeaturedSection
        title="Sweet Desserts"
        description="Complete your meal with our delicious dessert options."
        items={desserts.slice(0, 15)}
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
