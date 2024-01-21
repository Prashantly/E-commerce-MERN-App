import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import "../../styles/createProduct.css";
import useCategory from "../../hooks/useCategory";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [shipping, setShipping] = useState("");
  const [image, setImage] = useState("");
  const categories = useCategory();

  // ********************** ||Create New Product|| *****************************************
  const handleCreateProduct = async (e) => {
    e.preventDefault();

    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("category", category);
      productData.append("stock", stock);
      productData.append("brand", brand);
      productData.append("image", image);
      productData.append("shipping", shipping);
      const response = await axios.post(
        "/api/v1/product/create-product",
        productData
      );

      const data = response.data;

      if (data?.success) {
        toast.success(data?.message, {
          style: {
            backgroundColor: "#51B749",
            fontWeight: "600",
            color: "#fff",
          },
        });

        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log("Error***", error);
      toast.error(error?.response?.data?.message, {
        style: {
          backgroundColor: "#BD282B",
          fontWeight: "600",
          color: "#fff",
        },
      });
    }
  };

  return (
    <Layout title={"Dashborad | Create Product"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="page-title">Create Product</h1>
            <div className="product-form-container">
              <Select
                bordered={false}
                placeholder="Select a Category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => setCategory(value)}
              >
                {categories &&
                  categories.map((item) => (
                    <Option key={item._id} value={item._id}>
                      {item.name}
                    </Option>
                  ))}
              </Select>
              <div className="image-upload-container mb-3">
                <label className="image-upload-label">
                  {image ? image.name : "Upload Image"}
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              {image && (
                <div className="image-preview-container">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="product-img"
                    height="200px"
                    className="img img-responsive"
                  />
                </div>
              )}
              <input
                type="text"
                name={name}
                placeholder="Enter Product Name"
                className="form-control mb-3"
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                rows="3"
                name={description}
                placeholder="Write a Description..."
                className="form-control mb-3"
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="number"
                name={price}
                placeholder="Enter Product Price"
                className="form-control mb-3"
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="number"
                name={stock}
                placeholder="Stocks Present"
                className="form-control mb-3"
                onChange={(e) => setStock(e.target.value)}
              />
              <input
                type="text"
                name={brand}
                placeholder="Enter Product Brand"
                className="form-control mb-3"
                onChange={(e) => setBrand(e.target.value)}
              />
              <Select
                placeholder="Choose Shipping"
                className="form-select mb-3"
                bordered={false}
                size="large"
                onChange={(value) => setShipping(value)}
              >
                <Option value="0">No</Option>
                <Option value="1">Yes</Option>
              </Select>
              <button
                className="btn btn-primary create-product-button"
                onClick={handleCreateProduct}
              >
                CREATE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
