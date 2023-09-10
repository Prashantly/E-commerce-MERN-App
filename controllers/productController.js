import slugify from "slugify";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";
import Category from "../models/categoryModel.js";
import fs from "fs";

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, stock, brand } = req.fields;

    const { image } = req.files;

    //validation
    switch (true) {
      case !name:
        return res.status(401).json({ message: "Name is required" });
      case !description:
        return res.status(401).json({ message: "Description is required" });
      case !price:
        return res.status(401).json({ message: "Price is required" });
      case !category:
        return res.status(401).json({ message: "Category is required" });
      case !stock:
        return res.status(401).json({ message: "Stock is required" });
      case !brand:
        return res
          .status(401)
          .json({ message: "Brand for product is required" });
      case !image || image.size > 1000000: // Corrected size check to bytes
        return res.status(401).json({
          message: "Product Image is required and size should be less than 1MB",
        });
    }
    const product = new Product({
      name,
      slug: slugify(name),
      description,
      price,
      category,
      stock,
      brand,
      image: {
        data: fs.readFileSync(image.path),
        contentType: image.type,
      },
    });

    // Save the product to the database
    const savedProduct = await product.save();

    res.status(201).json({
      success: true,
      product: savedProduct,
      message: "Product created successfully👍",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating Product😥",
    });
  }
};

//get all products
export const getProductController = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate("category")
      .select("-image")
      .limit(10)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total_products: products.length,
      message: "All Prodcts fetched👍",
      products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: error.message,
    });
  }
};

//get single product controller

export const getSingleProductController = async (req, res) => {
  try {
    const { slug } = req.params;

    const product = await Product.findOne({ slug: slug })
      .select("-image")
      .populate("category");
    res.status(200).json({
      success: true,
      message: "Single Product fetched successfully👍",
      product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting single product!!😥",
    });
  }
};

//get Image
export const productImageController = async (req, res) => {
  try {
    const { imgId } = req.params;
    const product = await Product.findById(imgId).select("image");

    if (product.image.data) {
      res.set("Content-type", product.image.contentType);
      res.status(200).send(product.image.data);
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while fetching Product Image!!😥",
    });
  }
};

//delete product

export const deleteProductController = async (req, res) => {
  try {
    const { pid } = req.params;
    await Product.findByIdAndDelete(pid).select("-image");
    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully!!👍",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while deleting Product!!😥",
    });
  }
};

//update Product

export const updateProductController = async (req, res) => {
  try {
    const { pid } = req.params;
    const { name, description, price, category, stock, brand } = req.fields;

    const { image } = req.files;

    //validation
    switch (true) {
      case !name:
        return res.status(500).json({ message: "Name is required" });
      case !description:
        return res.status(500).json({ message: "Description is required" });
      case !price:
        return res.status(500).json({ message: "Price is required" });
      case !category:
        return res.status(500).json({ message: "Category is required" });
      case !stock:
        return res.status(500).json({ message: "Stock is required" });
      case !brand:
        return res
          .status(500)
          .json({ message: "Brand for product is required" });
      case image && image.size > 1000000: // Corrected size check to bytes
        return res.status(500).json({
          message: "Product Image is required and size should be less than 1MB",
        });
    }
    const product = await Product.findByIdAndUpdate(
      pid,
      {
        ...req.fields,
        slug: slugify(name),
      },
      {
        new: true,
      }
    );

    if (image) {
      product.image.data = fs.readFileSync(image.path);
      product.image.contentType = image.type;
    }

    // Save the product to the database
    const savedProduct = await product.save();

    res.status(201).send({
      success: true,
      savedProduct,
      message: "Product Updated successfully👍",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while Updating Product!!😥",
    });
  }
};

//filters product

export const productFiltersController = async (req, res) => {
  try {
    const { checked, radio } = req.body;
    let args = {};
    if (checked.length > 0) {
      args.category = checked;
    }
    if (radio.length) {
      args.price = {
        $gte: radio[0],
        $lte: radio[1],
      };
    }

    //find products
    const filteredProducts = await Product.find(args);

    res.status(200).json({
      success: true,
      filteredProducts,
    });
  } catch (error) {
    console.log("Error while filtering products", error);
    res.status(400).send({
      success: false,
      message: "Error while filtering product",
      error,
    });
  }
};

//product count
export const productPageCountController = async (req, res) => {
  try {
    const perPage = 6;
    const total = await Product.find({}).estimatedDocumentCount();

    let pageCount = parseInt(total / perPage);
    res.status(200).json({
      success: true,
      pageCount,
    });
  } catch (error) {
    console.log("Error count**", error);
    res.status(400).send({
      success: false,
      message: "Error in Counting Products",
      error,
    });
  }
};

export const productListController = async (req, res) => {
  try {
    const perPage = 6;
    const page = req.params.page ? req.params.page : 1;

    const products = await Product.find({})
      .select("-image")
      .populate("category")
      .skip((page - 1) * 6)
      .limit(perPage)
      .sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.log("Error***", error);
    res.status(400).send({
      success: false,
      message: "Error in listing all the products",
      error,
    });
  }
};

//serach products

export const searchProductController = async (req, res) => {
  try {
    const { keyword } = req.params;

    const searchResults = await Product.find({
      $or: [
        {
          name: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          description: {
            $regex: keyword,
            $options: "i",
          },
        },
      ],
    }).select("-image");

    // A Mongoose query is used to search for products that match the keyword.
    // The $or operator is used to search for products where either the name or description matches the keyword.
    // The $regex operator performs a case-insensitive regular expression search.
    // The $options "i" is used to indicate case-insensitive matching.

    // The .select("-image") part excludes the "image" field from the results.

    res.status(200).send({
      success: true,
      searchResults,
    });
  } catch (error) {
    console.log("Error while searching products", error);
    res.status(400).send({
      success: false,
      message: "Error while Searching..",
      error,
    });
  }
};

//related product controller
export const relatedProductController = async (req, res) => {
  try {
    const { pId, cId } = req.params;

    const products = await Product.find({
      category: cId,
      _id: { $ne: pId },
    })
      .select("-image")
      .limit(3)
      .populate("category");

    res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    console.log("Error***", error);
    res.status(400).send({
      success: false,
      message: "Error while getting Related Products",
      error,
    });
  }
};

//get product by category wise
export const productCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await Category.findOne({ slug: slug });
    const products = await Product.find({
      category,
    }).populate("category");

    res.status(200).json({
      success: true,
      products,
      category,
    });
  } catch (error) {
    console.log("Error in getting category wise products", err);
    res.status(400).send({
      success: false,
      message: "Error in Getting Category Wise Products",
      error,
    });
  }
};

export const cartCheckoutController = async (req, res) => {
  const { cart } = req.body;

  try {
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);

    const buyer = req.user._id;

    const myOrders = new Order({
      products: cart,
      buyer: buyer,
      amount: totalAmount,
    });

    await myOrders.save();

    // Respond with a success message
    res
      .status(201)
      .json({ success: true, message: "Order created successfully" });
  } catch (err) {
    console.log("Error while checking out cartItems", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
