import React, { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { useCart, CartItem } from '../../contexts/CartContext';
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalContent,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  OptionsSection,
  OptionTitle,
  OptionsList,
  OptionItem,
  QuantitySelector,
  QuantityButton,
  QuantityValue,
  AddToCartButton,
  TotalPrice,
  RadioOption,
  CheckboxOption,
  Label,
  SizeGrid,
  SizeOption
} from './styles';

interface ReviewOrderModalProps {
  item: CartItem;
  onClose: () => void;
}

const pizzaSizes = [
  { id: 'small', name: 'Small', multiplier: 0.8 },
  { id: 'medium', name: 'Medium', multiplier: 1.0 },
  { id: 'large', name: 'Large', multiplier: 1.3 }
];

const pizzaToppings = [
  { id: 'pepperoni', name: 'Pepperoni', price: 1.5 },
  { id: 'mushrooms', name: 'Mushrooms', price: 1.0 },
  { id: 'onions', name: 'Onions', price: 0.75 },
  { id: 'sausage', name: 'Sausage', price: 1.5 },
  { id: 'bacon', name: 'Bacon', price: 1.5 },
  { id: 'extra-cheese', name: 'Extra Cheese', price: 1.25 },
  { id: 'bell-peppers', name: 'Bell Peppers', price: 0.75 },
  { id: 'olives', name: 'Olives', price: 1.0 }
];

export const ReviewOrderModal: React.FC<ReviewOrderModalProps> = ({ item, onClose }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(item.options?.size || 'medium');
  const [selectedToppings, setSelectedToppings] = useState<string[]>(item.options?.toppings || []);
  
  const basePrice = item.price;
  const sizeMultiplier = pizzaSizes.find(size => size.id === selectedSize)?.multiplier || 1;
  const toppingsPrice = selectedToppings.reduce((total, topping) => {
    const toppingItem = pizzaToppings.find(t => t.id === topping);
    return total + (toppingItem?.price || 0);
  }, 0);
  
  const totalPrice = (basePrice * sizeMultiplier + toppingsPrice) * quantity;

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, Math.min(10, value)));
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size as 'small' | 'medium' | 'large');
  };

  const handleToppingToggle = (toppingId: string) => {
    setSelectedToppings(prevToppings => 
      prevToppings.includes(toppingId)
        ? prevToppings.filter(id => id !== toppingId)
        : [...prevToppings, toppingId]
    );
  };

  const handleAddToCart = () => {
    const customizedItem: CartItem = {
      ...item,
      quantity,
      price: basePrice * sizeMultiplier + toppingsPrice,
      options: {
        ...item.options,
        size: selectedSize as 'small' | 'medium' | 'large',
        toppings: selectedToppings
      }
    };
    
    addItem(customizedItem);
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        
        <ModalContent>
          <ProductImage src={item.image} alt={item.name} />
          
          <ProductInfo>
            <ProductName>{item.name}</ProductName>
            <ProductPrice>${basePrice.toFixed(2)}</ProductPrice>
            
            {item.category === 'pizza' && (
              <>
                <OptionsSection>
                  <OptionTitle>Size</OptionTitle>
                  <SizeGrid>
                    {pizzaSizes.map(size => (
                      <SizeOption
                        key={size.id}
                        selected={selectedSize === size.id}
                        onClick={() => handleSizeChange(size.id)}
                      >
                        <span className="size-name">{size.name}</span>
                        <span className="size-price">
                          ${(basePrice * size.multiplier).toFixed(2)}
                        </span>
                      </SizeOption>
                    ))}
                  </SizeGrid>
                </OptionsSection>
                
                <OptionsSection>
                  <OptionTitle>Extra Toppings</OptionTitle>
                  <OptionsList>
                    {pizzaToppings.map(topping => (
                      <OptionItem key={topping.id}>
                        <CheckboxOption>
                          <input
                            type="checkbox"
                            id={topping.id}
                            checked={selectedToppings.includes(topping.id)}
                            onChange={() => handleToppingToggle(topping.id)}
                          />
                          <Label htmlFor={topping.id}>
                            {topping.name} (+${topping.price.toFixed(2)})
                          </Label>
                        </CheckboxOption>
                      </OptionItem>
                    ))}
                  </OptionsList>
                </OptionsSection>
              </>
            )}
            
            <OptionsSection>
              <OptionTitle>Quantity</OptionTitle>
              <QuantitySelector>
                <QuantityButton 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </QuantityButton>
                <QuantityValue>{quantity}</QuantityValue>
                <QuantityButton 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 10}
                >
                  <Plus size={16} />
                </QuantityButton>
              </QuantitySelector>
            </OptionsSection>
            
            <TotalPrice>
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </TotalPrice>
            
            <AddToCartButton onClick={handleAddToCart}>
              Add to Cart
            </AddToCartButton>
          </ProductInfo>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};