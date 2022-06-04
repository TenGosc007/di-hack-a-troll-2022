import { Tag, validateTag } from '../../models/tagModel.js';

export const createTag = async (req, res) => {
  const { error } = validateTag(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const tag = await Tag.findOne({ name: req.body.name });
  if (tag) return res.status(400).send('question already exisits!');

  const newTag = new Tag({ ...req.body });
  await newTag.save();

  res.send(newTag);
};
