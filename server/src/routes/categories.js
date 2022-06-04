import express from 'express';

import { getCategories } from '../controllers/categories/getCategories.js';
import { getCategory } from '../controllers/categories/getCategory.js';
import { createCategory } from '../controllers/categories/createCategory.js';
import { deleteCategory } from '../controllers/categories/deleteCategory.js';

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', createCategory);
router.delete('/:id', deleteCategory);

export default router;
