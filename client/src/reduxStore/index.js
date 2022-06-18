import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from './services/user';
import { categories } from './services/categories';
import { survey } from './services/survey';
import { articleApi } from './services/articles';
import sentDataReducer from './articles';

export const store = configureStore({
  reducer: {
    sentData: sentDataReducer,
    [api.reducerPath]: api.reducer,
    [categories.reducerPath]: categories.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
    [survey.reducerPath]: survey.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(categories.middleware)
      .concat(articleApi.middleware)
      .concat(survey.middleware),
});

setupListeners(store.dispatch);
