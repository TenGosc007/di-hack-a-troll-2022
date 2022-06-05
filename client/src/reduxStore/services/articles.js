import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL || 'http://localhost:5000/',
  }),
  endpoints: (builder) => ({
    getAllArticles: builder.mutation({
      query: () => `api/articles`,
    }),
  }),
});

export const { useGetAllArticlesMutation } = articleApi;
