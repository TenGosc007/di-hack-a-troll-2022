import { Question } from '../../models/questionModel.js';

export const getQuestions = async (req, res) => {
  const questions = await Question.find().sort('lp');
  res.send(questions);
};
