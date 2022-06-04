import express from 'express';

import sendEmailToUser from 'controllers/users/sendEmail';

const routerUser = express.Router();

router.get('/', sendEmailToUser);

export default routerUser;