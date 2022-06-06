import { Site } from '../../models/siteModel.js';

export const getSites = async (req, res) => {
  const sites = await Site.find();
  res.send(sites);
};
