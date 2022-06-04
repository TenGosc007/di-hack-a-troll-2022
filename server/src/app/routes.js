import express from 'express';

import error from '../middleware/error.js';
import questions from '../routes/questions.js';
// import users from '../routes/users'

export const routes = (app) => {
  app.use(express.json());
  app.use('/api/questions', questions);
  // app.use('/api/users', users);
  app.use(error);
};
