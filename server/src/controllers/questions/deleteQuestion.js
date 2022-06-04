import { Question } from "../../models/questionModel.js";

export const deleteQuestion = async (req, res) => {
  const question = await Question.findByIdAndRemove(req.params.id);

  if (!question) return res.status(404).send("Question not found.");

  res.send(question);
};
