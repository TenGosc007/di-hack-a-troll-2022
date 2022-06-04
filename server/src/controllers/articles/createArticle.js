import { Article, validateArticle } from '../../models/articleModel.js';

export const createArticle = async (req, res) => {
  const { error } = validateArticle(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const article = await Article.findOne({ url: req.body.url });
  if (article) return res.status(200).send(article);

  const newArticle = new Article({ ...req.body });
  await newArticle.save();

  res.status(201).send(newArticle);
};
