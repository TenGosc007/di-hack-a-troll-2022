import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categories = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL || 'http://localhost:5000/',
  }),
  endpoints: (builder) => ({
    getCategories: builder.mutation({
      query: () => `api/categories`,
    }),
  }),
});

export const { useGetCategoriesMutation } = categories;
