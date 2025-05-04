import React, { useState, useEffect } from 'react';
import { CheckCircle2, MapPin, Clock, Receipt } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import {
  Container,
  ConfirmationHeader,
  ConfirmationIcon,
  ConfirmationTitle,
  ConfirmationNumber,
  OrderDetails,
  OrderInfo,
  OrderSection,
  SectionTitle,
  SectionContent,
  DeliveryMap,
  DeliveryRoute,
  MapPin as MapPinStyled,
  RouteDescription,
  RouteStep,
  DriverInfo,
  DriverAvatar,
  DriverName,
  DriverRating,
  DriverStatus,
  TimeEstimate,
  OrderItems,
  OrderItem,
  ItemName,
  ItemQuantity,
  ItemPrice,
  TotalPrice,
  HomeButton,
  DeliveryBadge
} from './styles';
import { DeliveryStatus } from './components/DeliveryStatus';

interface RouteStep {
  step: number;
  description: string;
  time: string;
  completed: boolean;
}

const ConfirmationPage: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [orderStatus, setOrderStatus] = useState<'preparing' | 'on-the-way' | 'delivered'>('preparing');
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const orderNumber = `#${Math.floor(10000 + Math.random() * 90000)}`;

  const deliverySteps: RouteStep[] = [
    { step: 1, description: 'Order received', time: '4:30 PM', completed: true },
    { step: 2, description: 'Preparing your food', time: '4:35 PM', completed: currentStep >= 2 },
    { step: 3, description: 'Driver on the way to restaurant', time: '4:45 PM', completed: currentStep >= 3 },
    { step: 4, description: 'Driver picked up your order', time: '4:50 PM', completed: currentStep >= 4 },
    { step: 5, description: 'Your order is on the way', time: '4:55 PM', completed: currentStep >= 5 },
    { step: 6, description: 'Your order has arrived', time: '5:00 PM', completed: currentStep >= 6 }
  ];

  useEffect(() => {
    // Simulate order progress
    const timer = setInterval(() => {
      setCurrentStep(step => {
        if (step < deliverySteps.length) {
          if (step === 1) setOrderStatus('preparing');
          if (step === 4) setOrderStatus('on-the-way');
          if (step === 6) {
            setOrderStatus('delivered');
            clearInterval(timer);
          }
          return step + 1;
        }
        return step;
      });

      setProgress(prog => Math.min(prog + 20, 100));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <ConfirmationHeader>
        <ConfirmationIcon>
          <CheckCircle2 size={40} />
        </ConfirmationIcon>
        <ConfirmationTitle>Order Confirmed!</ConfirmationTitle>
        <ConfirmationNumber>Order Number: {orderNumber}</ConfirmationNumber>
      </ConfirmationHeader>

      <OrderDetails>
        <OrderInfo>
          <OrderSection>
            <SectionTitle>
              <Receipt size={18} />
              <span>Order Summary</span>
            </SectionTitle>
            <SectionContent>
              <OrderItems>
                {items.map((item, index) => (
                  <OrderItem key={index}>
                    <ItemName>
                      {item.name}
                      {item.options?.size && ` (${item.options.size})`}
                    </ItemName>
                    <ItemQuantity>x{item.quantity}</ItemQuantity>
                    <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
                  </OrderItem>
                ))}
              </OrderItems>

              <TotalPrice>
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </TotalPrice>
            </SectionContent>
          </OrderSection>

          <OrderSection>
            <SectionTitle>
              <Clock size={18} />
              <span>Delivery Time</span>
            </SectionTitle>
            <SectionContent>
              <TimeEstimate>
                <span>Estimated delivery time</span>
                <span>5:00 PM</span>
              </TimeEstimate>

              <DeliveryStatus progress={progress} status={orderStatus} />
            </SectionContent>
          </OrderSection>

          <OrderSection>
            <SectionTitle>
              <MapPin size={18} />
              <span>Delivery Address</span>
            </SectionTitle>
            <SectionContent>
              <p>123 Main Street, Apt 4B</p>
              <p>New York, NY 10001</p>
            </SectionContent>
          </OrderSection>
        </OrderInfo>

        <DeliveryMap>
          <DeliveryBadge status={orderStatus}>
            {orderStatus === 'preparing' && 'Preparing Order'}
            {orderStatus === 'on-the-way' && 'On The Way'}
            {orderStatus === 'delivered' && 'Delivered'}
          </DeliveryBadge>

          <div className="map-container">
            {/* Simple map representation */}
            <div className="map-image" />

            <MapPinStyled type="restaurant">
              <MapPin size={20} />
              <span>Slice Haven</span>
            </MapPinStyled>

            <MapPinStyled type="destination">
              <MapPin size={20} />
              <span>Your Location</span>
            </MapPinStyled>

            <DeliveryRoute progress={progress} />
          </div>

          <RouteDescription>
            {deliverySteps.map(step => (
              <RouteStep key={step.step} completed={step.completed}>
                <div className="step-indicator">
                  {step.completed ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <span>{step.step}</span>
                  )}
                </div>
                <div className="step-content">
                  <div className="step-title">{step.description}</div>
                  <div className="step-time">{step.time}</div>
                </div>
              </RouteStep>
            ))}
          </RouteDescription>
        </DeliveryMap>
      </OrderDetails>

      <DriverInfo isVisible={orderStatus === 'on-the-way'}>
        <DriverAvatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Driver" />
        <div>
          <DriverName>Michael Smith</DriverName>
          <DriverRating>★ 4.9</DriverRating>
        </div>
        <DriverStatus>Delivering your order</DriverStatus>
      </DriverInfo>

      <HomeButton to="/">Return to Home</HomeButton>
    </Container>
  );
};

export default ConfirmationPage;