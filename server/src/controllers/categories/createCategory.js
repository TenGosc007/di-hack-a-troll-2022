import { Category, validateCategory } from '../../models/categoryModel.js';

export const createCategory = async (req, res) => {
  const { error } = validateCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findOne({ name: req.body.name });
  if (category) return res.status(400).send('question already exisits!');

  const newCategory = new Category({ ...req.body });
  await newCategory.save();

  res.send(newCategory);
};
