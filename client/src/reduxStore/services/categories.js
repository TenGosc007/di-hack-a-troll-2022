import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categories = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server-di-hack-a-troll-2022.vercel.app/',
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `api/categories`,
    }),
    getCategory: builder.query({
      query: (id) => `api/categories/${id}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryQuery } = categories;
