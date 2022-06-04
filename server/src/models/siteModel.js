import mongoose from 'mongoose';
import Joi from 'joi';

// url:         string
// tags:        array string
// articles:    array string

const siteSchema = new mongoose.Schema({
  url: String,
  tags: [String],
  articles: [String],
});

export const validateSite = (site) => {
  const schema = Joi.object({
    url: Joi.string().required(),
    tags: Joi.array().items(Joi.string()),
    articles: Joi.array().items(Joi.string()),
  });

  return schema.validate(site);
};

export const Site = mongoose.model('Site', siteSchema);
