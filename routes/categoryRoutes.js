import express from "express";
import passport from "passport";
import { isAdmin } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  getCategoryController,
  singleCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes

//create category
router.post(
  "/create-category",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:categoryId",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  updateCategoryController
);

//get All category
router.get("/get-category", getCategoryController);

//get single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:categoryId",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  deleteCategoryController
);

export default router;
