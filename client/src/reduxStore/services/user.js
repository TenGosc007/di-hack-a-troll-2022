import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL || 'http://localhost:5000/',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUserData: builder.mutation({
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

export const { useLoginMutation, useGetUserDataMutation, useSentEmailMutation, useUpdateEmailMutation } = api;
