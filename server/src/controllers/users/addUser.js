import { Response, Request } from 'express';

const addUser = async (req: Request, res: Response) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
    return res.status(StatusCodes.BAD_REQUEST).send('That user already exisits!');
  } else {
    user = new userModel({
      name: req.body.lastname,
      email: req.body.email,
    });

    await user.save();
    res.status(StatusCodes.OK).send(user);


  }
};

export default registerUser;
