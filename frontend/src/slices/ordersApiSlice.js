import { apiSlice } from '.';
import { ORDERS_URL } from '../constants';

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: { ...order },
      }),
    }),
    getOrderDetails: builder.query({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 5,

      // transformResponse: (response) => response.order,
      // providesTags: (result, error, id) => [{ type: 'Order', id }],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderDetailsQuery } =
  ordersApiSlice;
