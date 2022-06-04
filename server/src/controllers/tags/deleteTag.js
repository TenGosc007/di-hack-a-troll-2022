import { Tag } from '../../models/tagModel.js';

export const deleteTag = async (req, res) => {
  const tag = await Tag.findByIdAndRemove(req.params.id);
  if (!tag) return res.status(404).send('tag not found.');

  res.send(tag);
};
