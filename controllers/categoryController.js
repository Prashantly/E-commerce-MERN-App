import slugify from "slugify";
import Category from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).json({
        message: "Please enter a category",
      });
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(409).json({
        success: false,
        message: "This category already exist!!🙂",
      });
    }

    const category = await new Category({
      name,
      slug: slugify(name),
    }).save();

    res.status(201).json({
      success: true,
      message: "New Category has been created!!👍",
      category,
    });
  } catch (error) {
    console.log("CategoryError**", error);
    res.status(500).send({
      success: false,
      error,
      message: "Error creating category😥",
    });
  }
};

export const updateCategoryController = async (req, res) => {
  const { name } = req.body;
  const { categoryId } = req.params;

  if (!name) {
    return res.status(403).json({ message: "Category name required!!" });
  }

  try {
    const category = await Category.findByIdAndUpdate(
      categoryId,
      {
        name,
        slug: slugify(name),
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Category Updated Successfully👍",
      category,
    });
  } catch (error) {
    console.log("Error**", error);
    res.status(500).send({
      success: false,
      error,
      message: "Error updating category😥",
    });
  }
};

//get all categories
export const getCategoryController = async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).json({
      success: true,
      message: "All categories list",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories😥",
    });
  }
};

//get single category
export const singleCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;

    const category = await Category.findOne({ slug });

    res.status(200).json({
      success: true,
      message: "category found successfully👍",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting single category😥",
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByIdAndDelete(categoryId);
    res.status(200).json({
      success: true,
      message: `${category.name} category deleted successfully👍`,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while deleting category😥",
    });
  }
};
