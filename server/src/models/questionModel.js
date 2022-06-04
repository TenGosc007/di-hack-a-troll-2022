import mongoose from "mongoose";
import Joi from "joi";

// lp:          number
// question:    string
// answer:      number -> -1 | 1

const questionSchema = new mongoose.Schema({
  lp: Number,
  question: String,
  answer: {
    type: Number,
    enum: [-1, 1], // -1 = no, 1 = yes
  },
});

export const validateQuestion = (question) => {
  const schema = Joi.object({
    lp: Joi.number().required(),
    question: Joi.string().required(),
    answer: Joi.number().valid(-1, 1).required(),
  });

  return schema.validate(question);
};

export const Question = mongoose.model("Question", questionSchema);
