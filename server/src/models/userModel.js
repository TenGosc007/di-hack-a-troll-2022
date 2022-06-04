import mongoose from 'mongoose';
import Joi from 'joi';

const userSchema = new mongoose.Schema({
  email: String,
  articleId: String,
});

export const validateUser = (user) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    articleId: Joi.string().required(),
  });

  return schema.validate(user);
};

export const User = mongoose.model('User', userSchema);
