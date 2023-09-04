import { configureStore } from '@reduxjs/toolkit';

import { apiSlice, authSlice, cartSlice } from './slices';
import { NODE_ENV } from './constants';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: NODE_ENV !== 'production',
});

export default store;
