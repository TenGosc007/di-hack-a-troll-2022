import express from 'express';

import { getArticles } from '../controllers/articles/getArticles.js';
import { getArticle } from '../controllers/articles/getArticle.js';
import { createArticle } from '../controllers/articles/createArticle.js';
import { deleteArticle } from '../controllers/articles/deleteArticle.js';

const router = express.Router();

router.get('/', getArticles);
router.get('/:id', getArticle);
router.post('/', createArticle);
router.delete('/:id', deleteArticle);

export default router;
