import { Category, validateCategory } from '../../models/categoryModel.js';

export const createCategory = async (req, res) => {
  const { error } = validateCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = new Category({ ...req.body });
  await category.save();

  res.send(category);
};
