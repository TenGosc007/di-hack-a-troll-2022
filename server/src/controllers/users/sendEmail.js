// import { Response, Request } from "express";

// import validateEmail from "./validateEmail";
// import sendEmail from "../utils/email";
// import userModel from "../../models/user.model";

// const sendEmailToUser = async (req, res) => {
//   const { error } = validateEmail(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   const email = req.body.email;
//   const user = await userModel.findOne({ email }).select("id name email");
//   if (!user) return res.status(StatusCodes.NOT_FOUND).send("User not found");

//   const token = user.generateAuthToken();
//   const url = `http://${process.env.ADDRESSPORT}/users/confirmation/${token}`;
//   const message = await sendEmail(req.body.email, url);

//   res.status(StatusCodes.OK).send(message);
// };

// export default sendEmailToUser;
