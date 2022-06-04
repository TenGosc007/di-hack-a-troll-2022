import { Site } from '../../models/siteModel.js';

export const getSites = async (req, res) => {
  const Sites = await Site.find();
  res.send(Sites);
};
