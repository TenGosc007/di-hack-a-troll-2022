import { Category } from '../../models/categoryModel.js';

export const deleteCategory = async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id);

  if (!category) return res.status(404).send('Category not found.');

  res.send(category);
};
