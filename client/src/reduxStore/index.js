import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { pokemonApi } from './services/pokemon';
import { api } from './services/user';
import { categories } from './services/categories';
import counterReducer from './counter';
import authRducer from './auth';
import surveyReducer from './survey/surveySlice';
import { articleApi } from './services/articles';
import sentDataReducer from './articles';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authRducer,
    survey: surveyReducer,
    sentData: sentDataReducer,
    [api.reducerPath]: api.reducer,
    [categories.reducerPath]: categories.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(api.middleware)
      .concat(categories.middleware)
      .concat(articleApi.middleware),
});

setupListeners(store.dispatch);
