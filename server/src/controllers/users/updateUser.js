// import sendEmail from '../../utils/email.js';
import { Article } from '../../models/articleModel.js';
import { User, validateUser } from '../../models/userModel.js';

export const updateUser = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  const article = await Article.findOne({ url: req.body.url });
  if (!user) return res.status(404).send('user not found.');

  if (article) {
    const data = user.articles.find(({ id }) => id === article._id.toString());
    const dataIndex = user.articles.findIndex(({ id }) => id === article._id.toString());

    const resultsIndex = article.results.findIndex((val) => val.toString() === data.result.toString());
    if (resultsIndex >= 0) article.results[resultsIndex] = req.body.result;

    const categoryIndex = article.categories.findIndex((val) => val.toString() === data.category.toString());
    if (categoryIndex >= 0) article.categories[categoryIndex] = req.body.category;
    await article.save();

    if (dataIndex >= 0) {
      user.articles[dataIndex].result = req.body.result;
      user.articles[dataIndex].category = req.body.category;
    }
    await user.save();
  }

  let response = { user: user };
  response.article = article;

  //TODO uncomment later
  // await sendEmail(req.body.email);

  res.status(200).send(response);
};
