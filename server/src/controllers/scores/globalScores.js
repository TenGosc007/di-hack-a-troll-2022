import { User } from '../../models/userModel.js';
import { Article } from '../../models/articleModel.js';
import { Site } from '../../models/siteModel.js';

export const globalScores = async (req, res) => {
  const response = {};
  const users = await User.find().sort('email');
  const articles = await Article.find();
  const sites = await Site.find();

  response.users = users.length;
  response.articles = articles.length;
  response.sites = sites.length;

  res.send(response);
};
