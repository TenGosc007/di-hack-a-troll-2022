import express from 'express';

import { getUsers } from '../controllers/users/getUsers.js';
import { createUser } from '../controllers/users/createUser.js';
import { sendEmailUser } from '../controllers/users/sendEmail.js';
import { updateUser } from '../controllers/users/updateUser.js';
import { deleteUser } from '../controllers/users/deleteUser.js';

const router = express.Router();
router.get('/', getUsers);
router.post('/', createUser);
router.post('/email', sendEmailUser);
router.put('/', updateUser);
router.delete('/:id', deleteUser);

export default router;
