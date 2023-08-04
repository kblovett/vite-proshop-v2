import React from 'react'; //, { useState }
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import { savePaymentMethod } from '../slices';

import { CheckoutSteps, FormContainer } from '../components';

const PlaceOrderScreen = () => {
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 step4 />
      <h1>Place Order</h1>
    </FormContainer>
  );
};

export { PlaceOrderScreen };
