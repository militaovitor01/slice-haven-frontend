import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import {
  Container,
  PageTitle,
  PromotionsGrid,
  PromotionCard,
  CardHeader,
  CardTitle,
  CardDescription,
  PromotionImage,
  PromotionDetails,
  TermsLink,
  PriceContainer,
  OriginalPrice,
  DiscountedPrice,
  DiscountBadge
} from './styles';
import { CartItem } from '../../contexts/CartContext';
import { ReviewOrderModal } from '../../components/ReviewOrderModal';

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

const PromotionsPage: React.FC = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pizzas, setPizzas] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:8080/pizzas');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }

        const data = await response.json() as ApiResponse<ApiProduct>;

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

        const mappedPizzas = data.content.map(mapApiDataToProduct);
        setPizzas(mappedPizzas);
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

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return price - (price * (discount / 100));
  };

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const discountedPizzas = pizzas.filter(pizza => pizza.discount && pizza.discount > 0);

  return (
    <Container>
      <PageTitle>
        <Sparkles size={32} />
        Promoções Especiais
      </PageTitle>

      <PromotionsGrid>
        {discountedPizzas.map(pizza => (
          <PromotionCard key={pizza.id}>
            <DiscountBadge>
              <Sparkles size={16} />
              {pizza.discount}% OFF
            </DiscountBadge>
            
            <PromotionImage src={pizza.image} alt={pizza.name} />
            
            <PromotionDetails>
              <CardHeader>
                <CardTitle>{pizza.name}</CardTitle>
                <CardDescription>{pizza.description}</CardDescription>
              </CardHeader>

              <PriceContainer>
                <OriginalPrice>
                  R$ {pizza.price.toFixed(2)}
                </OriginalPrice>
                <DiscountedPrice>
                  R$ {calculateDiscountedPrice(pizza.price, pizza.discount!).toFixed(2)}
                </DiscountedPrice>
              </PriceContainer>

              <TermsLink href="#" onClick={() => handleOpenReviewModal({
                id: pizza.id,
                name: pizza.name,
                price: calculateDiscountedPrice(pizza.price, pizza.discount!),
                quantity: 1,
                image: pizza.image,
                category: 'pizza'
              })}>
                Adicionar ao Carrinho
              </TermsLink>
            </PromotionDetails>
          </PromotionCard>
        ))}
      </PromotionsGrid>

      {isReviewModalOpen && selectedItem && (
        <ReviewOrderModal 
          item={selectedItem}
          onClose={handleCloseReviewModal}
        />
      )}
    </Container>
  );
};

export default PromotionsPage;