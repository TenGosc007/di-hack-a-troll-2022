import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
    mode: 'no-cors',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      // headers.set('Access-Control-Allow/-Methods', 'GET, PUT, POST, PATCH, DELETE');
      // headers.set('Access-Control-Allow-Headers', '*'); //
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
    sentEmail: builder.mutation({
      query: (credentials) => (
        console.log('cre', credentials),
        {
          url: 'api/users/email',
          method: 'post',
          body: credentials,
        }
      ),
    }),
  }),
});

export const { useLoginMutation, useGetUserDataMutation, useSentEmailMutation } = api;
