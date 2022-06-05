import mongoose from 'mongoose';
import Joi from 'joi';

// url:         string
// title:       string
// tags:        array string
// articles:    array string

const siteSchema = new mongoose.Schema({
  url: String,
  title: String,
  tags: [String],
  articles: [String],
});

export const validateSite = (site) => {
  const schema = Joi.object({
    url: Joi.string().required(),
    title: Joi.string(),
    tags: Joi.array().items(Joi.string()),
    articles: Joi.array().items(Joi.string()),
  });

  return schema.validate(site);
};

export const Site = mongoose.model('Site', siteSchema);
