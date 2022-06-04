import { getUsers } from '../controllers/users/getUsers.js';
import express from 'express';

import { addUser } from '../controllers/users/addUser.js';
import { sendEmailUser } from '../controllers/users/sendEmail.js';

const router = express.Router();

router.post('/email', sendEmailUser);
router.post('/add', addUser);
router.get('/', getUsers);

export default router;
