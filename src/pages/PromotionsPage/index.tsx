import React from 'react';
import { Sparkles, Scissors, Clock, Tag } from 'lucide-react';
import {
  Container,
  PageTitle,
  PromotionsGrid,
  PromotionCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CouponCode,
  CopyButton,
  ExpiryDate,
  PromotionImage,
  PromotionDetails,
  TermsLink,
  FeaturedBadge
} from './styles';

const promotions = [
  {
    id: 1,
    title: "New Customer Special",
    description: "Get 20% off on your first order",
    code: "WELCOME20",
    expiryDate: "2024-03-31",
    image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
    featured: true
  },
  {
    id: 2,
    title: "Family Feast Deal",
    description: "Save 25% on orders over $50",
    code: "FAMILY25",
    expiryDate: "2024-03-15",
    image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg",
    featured: false
  },
  {
    id: 3,
    title: "Weekend Special",
    description: "Free delivery on weekend orders",
    code: "WEEKEND",
    expiryDate: "2024-03-31",
    image: "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg",
    featured: true
  }
];

const PromotionsPage: React.FC = () => {
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert('Coupon code copied to clipboard!');
  };

  return (
    <Container>
      <PageTitle>
        <Sparkles size={32} />
        Current Promotions
      </PageTitle>

      <PromotionsGrid>
        {promotions.map(promo => (
          <PromotionCard key={promo.id}>
            {promo.featured && (
              <FeaturedBadge>
                <Sparkles size={16} />
                Featured
              </FeaturedBadge>
            )}
            
            <PromotionImage src={promo.image} alt={promo.title} />
            
            <PromotionDetails>
              <CardHeader>
                <CardTitle>{promo.title}</CardTitle>
                <CardDescription>{promo.description}</CardDescription>
              </CardHeader>

              <CouponCode>
                <Tag size={18} />
                <span>{promo.code}</span>
                <CopyButton onClick={() => handleCopyCode(promo.code)}>
                  <Scissors size={18} />
                  Copy Code
                </CopyButton>
              </CouponCode>

              <ExpiryDate>
                <Clock size={16} />
                Expires: {new Date(promo.expiryDate).toLocaleDateString()}
              </ExpiryDate>

              <TermsLink href="#">View Terms & Conditions</TermsLink>
            </PromotionDetails>
          </PromotionCard>
        ))}
      </PromotionsGrid>
    </Container>
  );
};

export default PromotionsPage;