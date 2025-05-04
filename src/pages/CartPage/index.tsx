import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import {
  Container,
  PageTitle,
  CartContainer,
  CartItems,
  CartItem,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemOptions,
  QuantityControl,
  QuantityButton,
  QuantityValue,
  ItemPrice,
  RemoveButton,
  CartSummary,
  SummaryTitle,
  SummaryRow,
  SummaryTotal,
  CheckoutButton,
  EmptyCart,
  EmptyCartMessage,
  BackButton,
  PromoCode,
  PromoInput,
  PromoButton
} from './styles';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const handleUpdateQuantity = (id: number, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const handleRemoveItem = (id: number) => {
    removeItem(id);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'pizza20') {
      setDiscount(20);
    } else if (promoCode.toLowerCase() === 'welcome10') {
      setDiscount(10);
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

  const subtotal = totalPrice;
  const deliveryFee = subtotal > 30 ? 0 : 5.99;
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal + deliveryFee - discountAmount;

  if (items.length === 0) {
    return (
      <Container>
        <BackButton to="/">
          <ArrowLeft size={18} /> Back to Menu
        </BackButton>

        <EmptyCart>
          <ShoppingBag size={64} />
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <CheckoutButton as="a" href="/">Browse Menu</CheckoutButton>
        </EmptyCart>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton to="/">
        <ArrowLeft size={18} /> Back to Menu
      </BackButton>

      <PageTitle>Your Cart</PageTitle>

      <CartContainer>
        <CartItems>
          {items.map(item => (
            <CartItem key={item.id}>
              <ItemImage src={item.image} alt={item.name} />

              <ItemDetails>
                <ItemName>{item.name}</ItemName>

                {item.options && item.options.size && (
                  <ItemOptions>
                    Size: {item.options.size.charAt(0).toUpperCase() + item.options.size.slice(1)}

                    {item.options.toppings && item.options.toppings.length > 0 && (
                      <>
                        <br />
                        Extra toppings: {item.options.toppings.join(', ')}
                      </>
                    )}
                  </ItemOptions>
                )}

                <QuantityControl>
                  <QuantityButton
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </QuantityButton>
                  <QuantityValue>{item.quantity}</QuantityValue>
                  <QuantityButton
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </QuantityButton>
                </QuantityControl>
              </ItemDetails>

              <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>

              <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                <Trash2 size={20} />
              </RemoveButton>
            </CartItem>
          ))}
        </CartItems>

        <CartSummary>
          <SummaryTitle>Order Summary</SummaryTitle>

          <SummaryRow>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </SummaryRow>

          <SummaryRow>
            <span>Delivery Fee</span>
            <span>{deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span>
          </SummaryRow>

          {discount > 0 && (
            <SummaryRow>
              <span>Discount ({discount}%)</span>
              <span>-${discountAmount.toFixed(2)}</span>
            </SummaryRow>
          )}

          <PromoCode>
            <PromoInput
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <PromoButton onClick={handleApplyPromo}>Apply</PromoButton>
          </PromoCode>

          <SummaryTotal>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </SummaryTotal>

          <CheckoutButton onClick={handleCheckout}>
            Proceed to Checkout
          </CheckoutButton>
        </CartSummary>
      </CartContainer>
    </Container>
  );
};

export default CartPage;