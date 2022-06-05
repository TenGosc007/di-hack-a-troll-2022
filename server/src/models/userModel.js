import mongoose from 'mongoose';
import Joi from 'joi';

// name:      string
// url:       string
// category   string
// result     number

const userSchema = new mongoose.Schema({
  email: String,
  articles: [{ id: String, result: Number, category: String }],
});

export const validateUser = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    url: Joi.string().required(),
    category: Joi.string().required(),
    result: Joi.number().required(),
  });

  return schema.validate(user);
};

export const User = mongoose.model('User', userSchema);
