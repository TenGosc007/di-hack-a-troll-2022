import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server-di-hack-a-troll-2022.vercel.app/',
  }),
  endpoints: (builder) => ({
    getAllArticles: builder.mutation({
      query: () => `api/articles`,
    }),
    getArticle: builder.mutation({
      query: (id) => `api/scores/articles/${id}`,
    }),
  }),
});

export const { useGetAllArticlesMutation, useGetArticleMutation } = articleApi;
