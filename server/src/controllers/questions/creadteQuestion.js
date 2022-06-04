import { Question, validateQuestion } from '../../models/questionModel.js';

export const createQuestion = async (req, res) => {
  const { error } = validateQuestion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const question = new Question({ ...req.body });
  await question.save();

  res.send(question);
};
