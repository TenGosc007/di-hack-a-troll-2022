import _ from 'lodash';

import { Question } from '../../models/questionModel.js';
import { Category } from '../../models/categoryModel.js';

export const getCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).send('category not found.');

  const questions = await Question.find().where('lp').in(category.list);

  const result = { ...category._doc, details: questions };

  res.send(_.pick(result, ['_id', 'name', 'list', 'details']));
};
