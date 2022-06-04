import { Question } from "../../models/questionModel.js";

export const getQuestion = async (req, res) => {
  console.log(req.params.id);

  const question = await Question.findById(req.params.id);
  if (!question) return res.status(404).send("Question not found.");

  res.send(question);
};
