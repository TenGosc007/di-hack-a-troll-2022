import { Category } from '../../models/categoryModel.js';

export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
};
