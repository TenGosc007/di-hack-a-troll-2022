import express from 'express';

import { getSites } from '../controllers/sites/getSites.js';
import { getSite } from '../controllers/sites/getSite.js';
import { createSite } from '../controllers/sites/createSite.js';
import { deleteSite } from '../controllers/sites/deleteSite.js';

const router = express.Router();

router.get('/', getSites);
router.get('/:id', getSite);
router.post('/', createSite);
router.delete('/:id', deleteSite);

export default router;
