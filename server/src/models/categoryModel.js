import mongoose from 'mongoose';
import Joi from 'joi';

// name:    string

const categorySchema = new mongoose.Schema({
  name: String,
});

export const validateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(category);
};

export const Category = mongoose.model('Category', categorySchema);
