import express from 'express';
import cors from 'cors';

import error from '../middleware/error.js';
import defautlRoute from '../routes/default.js';
import articles from '../routes/articles.js';
import categories from '../routes/categories.js';
import questions from '../routes/questions.js';
import scores from '../routes/scores.js';
import sites from '../routes/sites.js';
import tags from '../routes/tags.js';
import users from '../routes/users.js';

export const routes = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use('/', defautlRoute);
  app.use('/api/articles', articles);
  app.use('/api/categories', categories);
  app.use('/api/questions', questions);
  app.use('/api/scores', scores);
  app.use('/api/sites', sites);
  app.use('/api/tags', tags);
  app.use('/api/users', users);
  app.use(error);
};
