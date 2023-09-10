import express from "express";
import userAuthRouter from "./userAuth.js";
import categoryRoutes from "./categoryRoutes.js";
import productRoutes from "./productRoutes.js";

//router object
const router = express.Router();

//auth routes
router.use("/api/v1/auth", userAuthRouter);
router.use("/api/v1/category", categoryRoutes);
router.use("/api/v1/product", productRoutes);

export default router;
