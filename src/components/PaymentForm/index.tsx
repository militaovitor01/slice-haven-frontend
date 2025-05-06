import React, { useState } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { stripePromise, createPaymentIntent } from '../../services/stripeService';
import {
    PaymentFormContainer,
    Form,
    CardSection,
    PayButton,
    ErrorMessage,
    SuccessMessage,
    CardInput,
    CardInputRow,
    CardInputLabel
} from './styles';

interface PaymentFormProps {
    amount: number;
    onSuccess: () => void;
    onError: (error: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onError }) => {
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessing(true);
        setError(null);

        try {
            // Create payment intent
            const clientSecret = await createPaymentIntent(amount);

            // Get all card elements
            const cardNumber = elements.getElement(CardNumberElement);
            const cardExpiry = elements.getElement(CardExpiryElement);
            const cardCvc = elements.getElement(CardCvcElement);

            if (!cardNumber || !cardExpiry || !cardCvc) {
                throw new Error('Card elements not found');
            }

            // Confirm the payment
            const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardNumber,
                    billing_details: {
                        // You can add billing details here if needed
                    }
                }
            });

            if (stripeError) {
                setError(stripeError.message || 'An error occurred');
                onError(stripeError.message || 'An error occurred');
            } else if (paymentIntent.status === 'succeeded') {
                setSuccess(true);
                onSuccess();
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred';
            setError(errorMessage);
            onError(errorMessage);
        } finally {
            setProcessing(false);
        }
    };

    return (
        <PaymentFormContainer>
            <Form onSubmit={handleSubmit}>
                <CardSection>
                    <CardInput>
                        <CardInputLabel>Card Number</CardInputLabel>
                        <CardNumberElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                },
                            }}
                        />
                    </CardInput>

                    <CardInputRow>
                        <CardInput>
                            <CardInputLabel>Expiration Date</CardInputLabel>
                            <CardExpiryElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                    },
                                }}
                            />
                        </CardInput>

                        <CardInput>
                            <CardInputLabel>CVC</CardInputLabel>
                            <CardCvcElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                    },
                                }}
                            />
                        </CardInput>
                    </CardInputRow>
                </CardSection>

                {error && <ErrorMessage>{error}</ErrorMessage>}
                {success && <SuccessMessage>Payment successful!</SuccessMessage>}

                <PayButton type="submit" disabled={!stripe || processing}>
                    {processing ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
                </PayButton>
            </Form>
        </PaymentFormContainer>
    );
};

export default PaymentForm; 