import React from 'react';
import { useSelector } from 'react-redux';

import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to={userInfo ? '/cart' : '/login'}>
            <Nav.Link>{userInfo ? 'Cart' : 'Login'}</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>{userInfo ? 'Cart' : 'Login'}</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer
            isActive={() => window.location.pathname === '/shipping'}
            activeStyle={{
              textDecoration: 'underline',
              textUnderlineOffset: 5,
            }}
            to='/shipping'
          >
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer
            isActive={() => window.location.pathname === '/payment'}
            activeStyle={{
              textDecoration: 'underline',
              textUnderlineOffset: 5,
            }}
            to='/payment'
          >
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer
            isActive={() => window.location.pathname === '/placeorder'}
            activeStyle={{
              textDecoration: 'underline',
              textUnderlineOffset: 5,
            }}
            to='/placeorder'
          >
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export { CheckoutSteps };
