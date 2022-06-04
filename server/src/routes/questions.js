import express from 'express';

import { getQuestions } from '../controllers/questions/getQuestions.js';
import { getQuestion } from '../controllers/questions/getQuestion.js';
import { getQuestionByLp } from '../controllers/questions/getQuestionByLp.js';
import { createQuestion } from '../controllers/questions/creadteQuestion.js';
import { deleteQuestion } from '../controllers/questions/deleteQuestion.js';

const router = express.Router();

router.get('/', getQuestions);
router.get('/:id', getQuestion);
router.get('/lp/:lp', getQuestionByLp);
router.post('/', createQuestion);
router.delete('/:id', deleteQuestion);

export default router;
