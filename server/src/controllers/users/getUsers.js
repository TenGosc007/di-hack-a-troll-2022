import { User } from '../../models/userModel.js';

export const getUsers = async (req, res) => {
  const users = await User.find().sort('email');
  res.send(users);
};
