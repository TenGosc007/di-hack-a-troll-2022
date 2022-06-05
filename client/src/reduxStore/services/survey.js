import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const survey = createApi({
  reducerPath: 'survey',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server-di-hack-a-troll-2022.vercel.app/api/',
  }),
  endpoints: (builder) => ({
    getSurveyId: builder.mutation({
      query: (id) => `questions/lp/${id}`,
    }),
  }),
});

export const { useGetSurveyIdMutation } = survey;
