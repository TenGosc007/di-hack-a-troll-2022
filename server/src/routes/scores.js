import express from 'express';

import { articleScores } from '../controllers/scores/articleScores.js';

const router = express.Router();
router.get('/:id', articleScores);

export default router;
