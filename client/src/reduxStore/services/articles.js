import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server-di-hack-a-troll-2022.vercel.app/',
  }),
  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: () => `api/articles`,
    }),
    getArticle: builder.query({
      query: (id) => `api/scores/articles/${id}`,
    }),
  }),
});

export const { useGetAllArticlesQuery, useGetArticleQuery } = articleApi;
