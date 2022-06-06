import { Article } from '../../models/articleModel.js';

export const getArticle = async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) return res.status(404).send('article not found.');

  res.send(article);
};
