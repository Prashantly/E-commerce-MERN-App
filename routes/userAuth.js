import express from "express";
import passport from "passport";

//router object
const router = express.Router();
import {
  registerController,
  loginController,
  resetPasswordController,
  forgotPasswordController,
  passwordChangeController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin } from "../middlewares/authMiddleware.js";

//REGISTER || METHOD:POST
router.post("/register", registerController);

//Login || Method:POST
router.post("/login", loginController);

router.post("/sendPassLink", resetPasswordController);

router.get("/forgotPassword/:id/:token", forgotPasswordController);

router.post("/:id/:token", passwordChangeController);

//protected user auth route
router.get(
  "/user-auth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).send({
      ok: true,
    });
  }
);

//protected Admin auth route
router.get(
  "/admin-auth",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  (req, res) => {
    res.status(200).send({
      ok: true,
    });
  }
);

//update profile
router.put(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  updateProfileController
);

//get user orders
router.get(
  "/orders",
  passport.authenticate("jwt", { session: false }),
  getOrdersController
);

//get all orders
router.get(
  "/all-orders",
  passport.authenticate("jwt", { session: false }),
  getAllOrdersController
);

//update orders status
router.put(
  "/order-status/:orderId",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  orderStatusController
);

export default router;
