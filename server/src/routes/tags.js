import express from 'express';

import { getTags } from '../controllers/tags/getTags.js';
import { createTag } from '../controllers/tags/createTag.js';
import { deleteTag } from '../controllers/tags/deleteTag.js';

const router = express.Router();

router.get('/', getTags);
router.post('/', createTag);
router.delete('/:id', deleteTag);

export default router;
