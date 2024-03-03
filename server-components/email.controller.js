import { emailModel } from "./email.model";

export const emailNewsletter = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(400).json({
        message: "Email address is required",
      });

    const user = await emailModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email address already exists",
      });
    }
    await emailModel.create({
      email,
    });

    return res.status(201).json({
      message: "Email address added successfully",
    });
  } catch (error) {
    next(error);
  }
};
