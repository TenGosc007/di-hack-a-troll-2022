import { Site, validateSite } from '../../models/siteModel.js';

export const createSite = async (req, res) => {
  const { error } = validateSite(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const site = await Site.findOne({ url: req.body.url });
  if (site) return res.status(400).send('site already exisits!');

  const newSite = new Site({ ...req.body });
  await newSite.save();

  res.status(201).send(newSite);

  console.log('test');
};
