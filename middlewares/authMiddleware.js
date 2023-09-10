import User from "../models/userModel.js";

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    // console.log("user***", user);
    if (user.role !== 1) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to access this route",
      });
    }

    next();
  } catch (error) {
    console.error("Error in Admin Middleware:", error);
    res.status(500).json({
      success: false,
      message: "Error in Admin Middleware",
    });
  }
};
