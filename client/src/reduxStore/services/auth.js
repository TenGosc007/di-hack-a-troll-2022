import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server-brain-code.vercel.app/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      token && headers.set('x-auth-token', token);
      return headers;
    },
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
  }),
});

export const { useLoginMutation, useGetUserDataMutation } = api;
