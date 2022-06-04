import { Question, validateQuestion } from '../../models/questionModel.js';

export const createQuestion = async (req, res) => {
  const { error } = validateQuestion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const question = await Question.findOne({ lp: req.body.lp });
  if (question) return res.status(400).send('question already exisits!');

  const newQuestion = new Question({ ...req.body });
  await newQuestion.save();

  res.status(201).send(newQuestion);
};
