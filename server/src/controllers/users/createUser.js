import getMetaData from 'metadata-scraper';

// import sendEmail from '../../utils/email.js';
import { Article } from '../../models/articleModel.js';
import { Site } from '../../models/siteModel.js';
import { User, validateUser } from '../../models/userModel.js';

export const createUser = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  const article = await Article.findOne({ url: req.body.url });
  if (user && article) {
    const foundArticle = user.articles.find(({ id }) => id === article._id.toString());
    if (foundArticle) return res.status(200).send(req.body);
  }

  let response = { user: user };
  let metaData = {};

  try {
    const data = await getMetaData(req.body.url);

    const reg = /.*?\w\//;
    const articleSite = reg.exec(req.body.url)[0];

    metaData = {
      title: data?.title || [],
      tags: data?.keywords || [],
      site: articleSite,
    };
    response.metaData = metaData;
  } catch (err) {
    return res.status(400).send('invalid url');
  }

  response.article = article;
  if (!article) {
    const newArticle = new Article({
      url: req.body.url,
      title: metaData.title,
      tags: [...metaData.tags],
      categories: [req.body.category],
      results: [req.body.result],
    });
    await newArticle.save();
    response.article = newArticle;
  } else {
    article.categories.push(req.body.category);
    article.results.push(req.body.result);
    await article.save();
  }

  const site = await Site.findOne({ url: metaData.site });
  response.site = site;
  if (!site) {
    try {
      const data = await getMetaData('' + metaData.site);

      const siteData = {
        title: data?.title || [],
        tags: data?.keywords || [],
      };

      const newSite = new Site({
        url: metaData.site,
        title: siteData.title,
        tags: [...siteData.tags],
        articles: [response.article._id],
      });
      await newSite.save();
      response.site = newSite;
    } catch (err) {
      console.log('save site error', metaData.site);
    }
  } else {
    site.articles.push(response.article._id);
    await site.save();
  }

  if (!user) {
    const newUser = new User({
      email: req.body.email,
      articles: [{ id: response.article._id, result: req.body.result, category: req.body.category }],
    });
    await newUser.save();
    response.user = newUser;
  } else {
    user.articles.push({ id: response.article._id, result: req.body.result, category: req.body.category });
    await user.save();
  }

  //TODO uncomment later
  // await sendEmail(req.body.email);

  res.status(201).send(response);
};
