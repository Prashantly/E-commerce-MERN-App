import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import User from "../models/userModel.js";
import Order from "../models/orderModel.js";
import JWT from "jsonwebtoken";
import { transporter, mailGenerator } from "../config/nodemailer.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name || !email || !password || !phone || !address) {
      return res
        .status(401)
        .send({ success: false, message: "Please fill all fields" });
    }

    const existingUser = await User.findOne({ email }).exec();

    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "User exist, Please login",
      });
    }

    //hash password
    const hashedPassword = await hashPassword(password);

    const user = await new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Registered successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error registering user",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validate
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Email or Password Missing!",
      });
    }

    const user = await User.findOne({ email }).exec();

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Oops!🫣🫣 Incorrect Email/Password Combination.",
      });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(403).send({
        success: false,
        message: "Oops!🫣🫣 Incorrect Email/Password Combination.",
      });
    }

    //create Token and send it to the client side
    const token = await JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).send({
      success: true,
      message: `Welcome back, ${user.name}! 🎉 Happy shopping on S-Mart!🥳🥳`,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      authToken: token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in logging in User",
      error,
    });
  }
};

//send email link for password reset
export const resetPasswordController = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(401).json({
      success: false,
      message: "Please enter your registered email",
    });
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No account with given email address exists.",
      });
    }

    //if user exist
    //token generation for reset password
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3m",
    });

    const link = `${process.env.REACT_BASE_URL}/forgotpassword/${user._id}/${token}`;

    let emailTemplate = {
      body: {
        name: user.name,
        intro:
          "You have received this email because a password reset request for your account was received.",
        action: {
          instructions:
            "Click the button below to reset your password and Note that below link only valid for 3 minutes",
          button: {
            color: "#DC4D2F",
            text: "Reset your password",
            link: link,
          },
        },
        outro:
          "If you did not request a password change,please ignore this email.",
      },
    };

    const emailBody = mailGenerator.generate(emailTemplate);

    // Generate the plaintext version of the e-mail (for clients that do not support HTML)
    const emailText = mailGenerator.generatePlaintext(emailTemplate);

    // Generate the email options
    const mailOptions = {
      from: "prashantyallatti18@gmail.com",
      to: user.email,
      subject: "Password reset",
      html: emailBody,
      text: emailText,
    };

    //send email
    const emailSent = await sendMail(mailOptions);
    if (emailSent) {
      return res.status(200).json({
        success: true,
        message: `An e-mail has been sent to ${user.email}`,
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Error sending email.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your request.",
    });
  }
};

const sendMail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

// verify user for forgot password

export const forgotPasswordController = async (req, res) => {
  const { id, token } = req.params;

  try {
    const validUser = await User.findOne({ _id: id });
    //user valid the verify token
    const verifyToken = JWT.verify(token, process.env.JWT_SECRET);

    if (validUser && verifyToken._id) {
      res.status(200).json({
        success: "true",
        validUser,
      });
    } else {
      res.status(400).json({
        success: "false",
        message: "User does not exist",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: "Cannot able to Process Request",
    });
  }
};

//Password change handling controller
export const passwordChangeController = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    const validUser = await User.findOne({ _id: id });
    //user valid the verify token
    const verifyToken = JWT.verify(token, process.env.JWT_SECRET);

    if (validUser && verifyToken._id) {
      //hash password
      const hashedPassword = await hashPassword(password);
      // console.log("hashedPassword::::", hashedPassword);

      const updatedNewPassword = await User.findByIdAndUpdate(
        { _id: id },
        {
          password: hashedPassword,
        },
        {
          //To make the changes to reflect in the console
          new: true,
        }
      );

      updatedNewPassword.save();

      res.status(200).json({
        success: true,
        message: "Password updated successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Cannot able to Process Request",
    });
  }
};

//update profile

export const updateProfileController = async (req, res) => {
  try {
    const { name, password, phone, address } = req.body;

    const user = await User.findById(req.user._id);

    //password
    if (password && password.length < 6) {
      return res.json({
        success: false,
        message: "Password is required and should have 6 character long",
      });
    }

    const hashedPassword = password ? await hashPassword(password) : undefined;

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        address: address || user.address,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Profile Updated Successfully👍👍",
      updatedUser,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error while updating profile",
      error,
    });
  }
};

//orders
export const getOrdersController = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user._id })
      .populate("products", "-image")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while getting user Orders",
      error,
    });
  }
};

//get all orders
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("products", "-image")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
    res.json(orders);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while getting all Orders",
      error,
    });
  }
};

//order status controller

export const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      orderId,
      {
        status,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Order Status Updated Successfully.",
      order,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in changing the status of order",
      error,
    });
  }
};
