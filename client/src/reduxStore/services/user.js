import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
    // method: 'no-cors',
    // headers: {
    //   'Content-type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, PUT, POST, PATCH, DELETE',
    // },
    // prepareHeaders: (headers) => {
    //   headers.set('Content-Type', 'application/json');
    //   console.log(headers);
    //   return headers;
    // },
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
