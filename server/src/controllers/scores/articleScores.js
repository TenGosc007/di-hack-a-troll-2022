import { Article } from '../../models/articleModel.js';
import { Category } from '../../models/categoryModel.js';
import { Site } from '../../models/siteModel.js';

export const articleScores = async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) return res.status(404).send('article not found.');

  const response = { article: article, stats: {} };

  const site = await Site.find({ articles: article._id.toString() });
  if (site) {
    response.site = site[0]._id;
  }

  const categories = await Category.find();

  const countCategories = {};
  article.categories.forEach((e) => (countCategories[e] ? (countCategories[e] += 1) : (countCategories[e] = 1)));

  const finalCategories = {};
  for (const [key, value] of Object.entries(countCategories)) {
    const c = categories.find(({ _id }) => _id.toString() === key);
    finalCategories[c.name] = value;
  }

  response.stats.categories = finalCategories;

  const countResults = {};
  article.results.forEach((e) => (countResults[e] ? (countResults[e] += 1) : (countResults[e] = 1)));
  response.stats.results = countResults;

  res.send(response);
};
