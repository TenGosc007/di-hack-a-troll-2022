import { User } from '../../models/userModel.js';

export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) return res.status(404).send('user not found.');

  res.send(user);
};
