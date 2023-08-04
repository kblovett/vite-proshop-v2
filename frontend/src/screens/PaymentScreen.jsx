import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { savePaymentMethod } from '../slices';

import { CheckoutSteps, FormContainer } from '../components';

import { Form, Col, Button } from 'react-bootstrap';

const PaymentScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod } = cart;

  const [method, setMethod] = useState(paymentMethod || 'PayPal');

  useEffect(() => {
    if (!shippingAddress) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(method));
    navigate('/placeorder');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              className='my-2'
              label='PayPal or Credit Card'
              id='PayPal'
              name='method'
              value='PayPal'
              checked={method === 'PayPal'}
              onChange={(e) => setMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type='radio'
              className='my-2'
              label='Stripe'
              id='Stripe'
              name='method'
              value='Stripe'
              checked={method === 'Stripe'}
              onChange={(e) => setMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary' className='my-2'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export { PaymentScreen };
