import express from 'express';

import { globalScores } from '../controllers/scores/globalScores.js';
import { articleScores } from '../controllers/scores/articleScores.js';
import { siteScores } from '../controllers/scores/siteScores.js';

const router = express.Router();
router.get('/global', globalScores);
router.get('/articles/:id', articleScores);
router.get('/sites/:id', siteScores);

export default router;
