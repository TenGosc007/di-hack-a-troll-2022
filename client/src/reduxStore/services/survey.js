import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const survey = createApi({
  reducerPath: 'survey',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL || 'http://localhost:5000/',
  }),
  endpoints: (builder) => ({
    getSurveyId: builder.mutation({
      query: (id) => `questions/lp/${id}`,
    }),
  }),
});

export const { useGetSurveyIdMutation } = survey;
