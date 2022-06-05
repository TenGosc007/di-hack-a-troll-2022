import express from 'express';

import { articleScores } from '../controllers/scores/articleScores.js';
import { siteScores } from '../controllers/scores/siteScores.js';

const router = express.Router();
router.get('/articles/:id', articleScores);
router.get('/sites/:id', siteScores);

export default router;
