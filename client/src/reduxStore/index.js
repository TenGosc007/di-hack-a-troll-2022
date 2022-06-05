import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from './services/user';
import { categories } from './services/categories';
import { pokemonApi } from './services/pokemon';
import { survey } from './services/survey';
import authRducer from './auth';
// import surveyReducer from './survey/surveySlice';
import { articleApi } from './services/articles';
import counterReducer from './counter';
import sentDataReducer from './articles';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authRducer,
    sentData: sentDataReducer,
    [api.reducerPath]: api.reducer,
    [categories.reducerPath]: categories.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
    [survey.reducerPath]: survey.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(api.middleware)
      .concat(categories.middleware)
      .concat(articleApi.middleware)
      .concat(survey.middleware),
});

setupListeners(store.dispatch);
