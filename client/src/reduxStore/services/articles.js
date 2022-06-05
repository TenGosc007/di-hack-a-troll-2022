import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server-di-hack-a-troll-2022.vercel.app/',
  }),
  endpoints: (builder) => ({
    getAllArticles: builder.mutation({
      query: () => `api/articles`,
    }),
  }),
});

export const { useGetAllArticlesMutation } = articleApi;
