import { User } from '../../models/userModel.js';

export const getUsers = async (req, res) => {
  const questions = await User.find().sort('email');
  res.send(questions);
};
