import _ from 'lodash';

import { Article } from '../../models/articleModel.js';
import { Category } from '../../models/categoryModel.js';

export const getArticles = async (req, res) => {
  const articles = await Article.find();
  const categories = await Category.find();

  const result = articles.map((article) => ({
    ...article._doc,
    categories: article.categories
      .map((catId) =>
        _.pick(
          categories.find(({ _id }) => _id.toString() === catId),
          ['_id', 'name']
        )
      )
      .filter((e) => !!e.name),
  }));

  res.send(result);
};
