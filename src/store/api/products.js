import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query({
        query: (user) => {
          return {
            url: '/products',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = productsApi;
export { productsApi };
