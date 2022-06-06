import { Site } from '../../models/siteModel.js';

export const getSite = async (req, res) => {
  const site = await Site.findById(req.params.id);
  if (!site) return res.status(404).send('site not found.');

  res.send(site);
};
