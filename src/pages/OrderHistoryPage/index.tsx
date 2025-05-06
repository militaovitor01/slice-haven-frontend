import React from 'react';
import { Clock, CheckCircle2, Truck, Calendar } from 'lucide-react';
import {
  Container,
  PageTitle,
  OrdersGrid,
  OrderSection,
  SectionTitle,
  OrderCard,
  OrderHeader,
  OrderNumber,
  OrderDate,
  OrderStatus,
  OrderItems,
  OrderItem,
  OrderTotal,
  ViewDetailsButton,
  EmptyState,
  OrderStatusBadge
} from './styles';

const recentOrders = [
  {
    id: "ORD-001",
    date: "2024-02-20",
    status: "pending",
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 12.99 },
      { name: "Pepperoni Pizza", quantity: 2, price: 29.98 }
    ],
    total: 42.97
  },
  {
    id: "ORD-002",
    date: "2024-02-19",
    status: "completed",
    items: [
      { name: "Supreme Pizza", quantity: 1, price: 16.99 },
      { name: "Cola", quantity: 2, price: 4.98 }
    ],
    total: 21.97
  }
];

const pendingOrders = recentOrders.filter(order => order.status === "pending");
const completedOrders = recentOrders.filter(order => order.status === "completed");

const OrderHistoryPage: React.FC = () => {
  const renderOrderCard = (order: typeof recentOrders[0]) => (
    <OrderCard key={order.id}>
      <OrderHeader>
        <OrderNumber>{order.id}</OrderNumber>
        <OrderDate>
          <Calendar size={16} />
          {new Date(order.date).toLocaleDateString()}
        </OrderDate>
        <OrderStatusBadge status={order.status}>
          {order.status === "pending" ? (
            <>
              <Clock size={16} /> Processing
            </>
          ) : (
            <>
              <CheckCircle2 size={16} /> Completed
            </>
          )}
        </OrderStatusBadge>
      </OrderHeader>

      <OrderItems>
        {order.items.map((item, index) => (
          <OrderItem key={index}>
            <span>{item.name}</span>
            <span>x{item.quantity}</span>
            <span>${item.price.toFixed(2)}</span>
          </OrderItem>
        ))}
      </OrderItems>

      <OrderTotal>
        <span>Total</span>
        <span>${order.total.toFixed(2)}</span>
      </OrderTotal>

      <ViewDetailsButton to={`/orders/${order.id}`}>
        View Details
      </ViewDetailsButton>
    </OrderCard>
  );

  return (
    <Container>
      <PageTitle>Order History</PageTitle>

      <OrdersGrid>
        <OrderSection>
          <SectionTitle>
            <Clock size={20} />
            Pending Orders
          </SectionTitle>
          {pendingOrders.length > 0 ? (
            pendingOrders.map(renderOrderCard)
          ) : (
            <EmptyState>
              <Truck size={48} />
              <p>No pending orders</p>
            </EmptyState>
          )}
        </OrderSection>

        <OrderSection>
          <SectionTitle>
            <CheckCircle2 size={20} />
            Completed Orders
          </SectionTitle>
          {completedOrders.length > 0 ? (
            completedOrders.map(renderOrderCard)
          ) : (
            <EmptyState>
              <Clock size={48} />
              <p>No completed orders yet</p>
            </EmptyState>
          )}
        </OrderSection>
      </OrdersGrid>
    </Container>
  );
};

export default OrderHistoryPage;