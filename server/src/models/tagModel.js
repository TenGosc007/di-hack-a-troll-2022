import mongoose from 'mongoose';
import Joi from 'joi';

// name:    string

const tagSchema = new mongoose.Schema({
  name: String,
});

export const validateTag = (tag) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(tag);
};

export const Tag = mongoose.model('Tag', tagSchema);
