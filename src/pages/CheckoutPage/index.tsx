import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import PaymentForm from '../../components/PaymentForm';
import StripeProvider from '../../components/StripeProvider';
import {
    Container,
    BackButton,
    PageTitle,
    CheckoutContainer,
    OrderSummary,
    SummaryTitle,
    SummaryRow,
    SummaryTotal,
    PaymentSection,
    SectionTitle,
    DeliverySection,
    DeliveryAddress,
    AddressInput,
    AddressRow,
    SubmitButton
} from './styles';

const CheckoutPage: React.FC = () => {
    const { items, totalPrice } = useCart();
    const navigate = useNavigate();

    const handlePaymentSuccess = () => {
        navigate('/confirmation');
    };

    const handlePaymentError = (error: string) => {
        console.error('Payment error:', error);
        // You might want to show an error message to the user here
    };

    return (
        <Container>
            <BackButton onClick={() => navigate(-1)}>
                <ArrowLeft size={20} />
                Back to Cart
            </BackButton>

            <PageTitle>Checkout</PageTitle>

            <CheckoutContainer>
                <OrderSummary>
                    <SummaryTitle>Order Summary</SummaryTitle>

                    {items.map((item, index) => (
                        <SummaryRow key={index}>
                            <span>{item.name} x {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </SummaryRow>
                    ))}

                    <SummaryTotal>
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </SummaryTotal>
                </OrderSummary>

                <DeliverySection>
                    <SectionTitle>Delivery Address</SectionTitle>
                    <DeliveryAddress>
                        <AddressRow>
                            <AddressInput type="text" placeholder="Street Address" />
                        </AddressRow>
                        <AddressRow>
                            <AddressInput type="text" placeholder="City" />
                            <AddressInput type="text" placeholder="State" />
                            <AddressInput type="text" placeholder="ZIP Code" />
                        </AddressRow>
                    </DeliveryAddress>
                </DeliverySection>

                <PaymentSection>
                    <SectionTitle>Payment Method</SectionTitle>
                    <StripeProvider>
                        <PaymentForm
                            amount={totalPrice}
                            onSuccess={handlePaymentSuccess}
                            onError={handlePaymentError}
                        />
                    </StripeProvider>
                </PaymentSection>
            </CheckoutContainer>
        </Container>
    );
};

export default CheckoutPage; 