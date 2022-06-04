import express from 'express';

import error from '../middleware/error.js';
import defautlRoute from '../routes/default.js';
import articles from '../routes/articles.js';
import categories from '../routes/categories.js';
import questions from '../routes/questions.js';
import sites from '../routes/sites.js';
import tags from '../routes/tags.js';

export const routes = (app) => {
  app.use(express.json());
  app.use('/', defautlRoute);
  app.use('/api/articles', articles);
  app.use('/api/categories', categories);
  app.use('/api/questions', questions);
  app.use('/api/sites', sites);
  app.use('/api/tags', tags);
  app.use(error);
};
