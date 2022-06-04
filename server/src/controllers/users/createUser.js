import { Article } from '../../models/articleModel.js';
import { Site } from '../../models/siteModel.js';
// import { Tag } from '../../models/tagModel.js';
import { User, validateUser } from '../../models/userModel.js';

export const createUser = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  let response = { user: user };

  if (user) {
    const article = await Article.findOne({ url: req.body.url });
    if (article) return res.status(200).send(req.body);
  } else {
    const newUser = new User({
      email: req.body.email,
      articles: [req.body.url],
    });
    await newUser.save();
    response.user = newUser;
  }

  const article = await Article.findOne({ url: req.body.url });
  response.article = article;
  if (!article) {
    const newArticle = new Article({ url: req.body.url });
    await newArticle.save();
    response.article = newArticle;
  }

  const site = await Site.findOne({ url: req.body.url });
  response.site = site;
  if (!site) {
    const newSite = new Site({ url: req.body.url, articles: [req.body.url] });
    await newSite.save();
    response.site = newSite;
  }

  // wyślij mail

  res.status(201).send(response);
};
