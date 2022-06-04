import mongoose from 'mongoose';
import Joi from 'joi';

const userSchema = new mongoose.Schema({});

export const validateUser = (user) => {
  const schema = Joi.object({
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 250,
      minlength: 5,
    },
    // artykuły
  });

  return schema.validate(user);
};

export const Question = mongoose.model('User', userSchema);
