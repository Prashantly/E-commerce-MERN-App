import express from "express";
import passport from "passport";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productImageController,
  updateProductController,
  productFiltersController,
  productPageCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  cartCheckoutController,
} from "../controllers/productController.js";
import { isAdmin } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes

//create product
router.post(
  "/create-product",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  formidable(),
  createProductController
);

//update product
router.put(
  "/update-product/:pid",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  formidable(),
  updateProductController
);

//delete product
router.delete(
  "/delete-product/:pid",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  deleteProductController
);

//get all products
router.get("/get-product", getProductController);

//get single product
router.get("/get-product/:slug", getSingleProductController);

//get product images
router.get("/product-image/:imgId", productImageController);

//products filter
router.post("/products-filters", productFiltersController);

//product count
router.get("/product-pageCount", productPageCountController);

//product per page
router.get("/product-list/:page", productListController);

//search products
router.get(
  "/search/:keyword",
  searchProductController
);

//similar products
router.get("/related-products/:pId/:cId", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//checkout route
router.post(
  "/cart-checkout",
  passport.authenticate("jwt", { session: false }),
  cartCheckoutController
);

export default router;
