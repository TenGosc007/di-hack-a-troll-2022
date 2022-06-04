import validateEmail from './validateEmail.js';
import sendEmail from '../../utils/email.js';
import { User } from '../../models/userModel.js';

export const sendEmailUser = async (req, res) => {
  const { error } = validateEmail(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailInput = req.body.email;
  console.log('email', emailInput);
  const users = await User.find().select('email');

  users.forEach((user) => {
    if (user.email === emailInput) {
      return res.status(200).send('user exist');
    }
  });

  const url = `http://${process.env.ADDRESSPORT}/users/mail/`;
  const message = await sendEmail(req.body.email, url);

  res.status(201).send(message);
};
