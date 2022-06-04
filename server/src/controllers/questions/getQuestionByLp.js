import { Question } from '../../models/questionModel.js';

export const getQuestionByLp = async (req, res) => {
  const question = await Question.findOne({ lp: req.params.lp });
  if (!question) return res.status(404).send('Question not found.');

  res.send(question);
};
