import { Category } from '../../models/categoryModel.js';

export const getCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).send('category not found.');

  res.send(category);
};
