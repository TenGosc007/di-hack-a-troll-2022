import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { pokemonApi } from './services/pokemon';
import { api } from './services/auth';
import counterReducer from './counter';
import authRducer from './auth';
import surveyReducer from './survey/surveySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authRducer,
    survey: surveyReducer,
    [api.reducerPath]: api.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware).concat(api.middleware),
});

setupListeners(store.dispatch);
