import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server-di-hack-a-troll-2022.vercel.app/',
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
      query: (credentials) => (
        console.log('cre', credentials),
        {
          url: `api/users/email`,
          method: 'post',
    
          body: credentials,
        }
      ),
    }),
  }),
});

export const { useLoginMutation, useGetUserDataMutation, useSentEmailMutation } = api;
