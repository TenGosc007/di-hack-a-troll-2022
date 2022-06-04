import mongoose from 'mongoose';
import Joi from 'joi';

// name:    string
// list:    array number

const categorySchema = new mongoose.Schema({
  name: String,
  list: [Number],
});

export const validateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    list: Joi.array().items(Joi.number()),
  });

  return schema.validate(category);
};

export const Category = mongoose.model('Category', categorySchema);
