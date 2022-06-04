import { User } from '../../models/userModel.js';

export const addUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(401).send('That user already exisits!');
  } else {
    user = new User({
      email: req.body.email,
      articleId: req.body.articleId,
    });
    await user.save();
    res.status(200).send(user);
  }
};
