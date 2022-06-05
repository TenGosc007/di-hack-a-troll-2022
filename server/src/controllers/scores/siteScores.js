import { Article } from '../../models/articleModel.js';
import { Site } from '../../models/siteModel.js';

export const siteScores = async (req, res) => {
  const site = await Site.findById(req.params.id);
  if (!site) return res.status(404).send('site not found.');

  const response = { site: site, stats: {} };

  const articles = await Article.find();

  const scores = [];

  site.articles.forEach((e) => {
    const article = articles.find((a) => a._id.toString() === e);
    const sum = article.results.reduce((partialSum, a) => +partialSum + +a, 0);
    if (article) scores.push({ key: e, count: article.results.length, sum });
  });

  response.stats = scores;

  res.send(response);
};
