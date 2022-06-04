import express from 'express';

import { getUsers } from '../controllers/users/getUsers.js';
import { createUser } from '../controllers/users/createUser.js';
import { deleteUser } from '../controllers/users/deleteUser.js';
import { sendEmailUser } from '../controllers/users/sendEmail.js';
const router = express.Router();
router.post('/email', sendEmailUser);
router.get('/', getUsers);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;
