import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server-di-hack-a-troll-2022.vercel.app/',
  }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: (id) => `users/${id}`,
    }),
    sentEmail: builder.mutation({
      query: (credentials) => ({
        url: '/api/users',
        method: 'POST',
        body: credentials,
      }),
    }),
    updateEmail: builder.mutation({
      query: (credentials) => ({
        url: '/api/users',
        method: 'PUT',
        body: credentials,
      }),
    }),
  }),
});

export const { useGetUserDataQuery, useSentEmailMutation, useUpdateEmailMutation } = api;
