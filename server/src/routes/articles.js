import express from 'express';

import { getArticles } from '../controllers/articles/getArticles.js';
import { createArticle } from '../controllers/articles/createArticle.js';
import { deleteArticle } from '../controllers/articles/deleteArticle.js';

const router = express.Router();

router.get('/', getArticles);
router.post('/', createArticle);
router.delete('/:id', deleteArticle);

export default router;
