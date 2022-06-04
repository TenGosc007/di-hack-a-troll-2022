import { Tag } from '../../models/tagModel.js';

export const getTags = async (req, res) => {
  const tags = await Tag.find();
  res.send(tags);
};
