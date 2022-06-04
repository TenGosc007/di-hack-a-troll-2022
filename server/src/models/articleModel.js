import mongoose from 'mongoose';
import Joi from 'joi';

// url:         string
// tags:        array string
// categories   array string
// results      array string

const articleSchema = new mongoose.Schema({
  url: String,
  tags: [String],
  categories: [String],
  results: [String],
});

export const validateArticle = (article) => {
  const schema = Joi.object({
    url: Joi.string().required(),
    tags: Joi.array().items(Joi.string()),
    categories: Joi.array().items(Joi.string()),
    results: Joi.array().items(Joi.string()),
  });

  return schema.validate(article);
};

export const Article = mongoose.model('Article', articleSchema);
