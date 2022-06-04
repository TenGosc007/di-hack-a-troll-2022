import { Article } from '../../models/articleModel.js';

export const getArticles = async (req, res) => {
  const articles = await Article.find();
  res.send(articles);
};
