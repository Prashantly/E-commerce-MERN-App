import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
const { Option } = Select;

const UpdateProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const categories = useCategory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [shipping, setShipping] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");

  // ********************** ||Get Single Category|| *****************************************
  const getSingleProduct = async () => {
    try {
      const response = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );

      const data = response?.data;
      if (data?.success) {
        const { _id, name, description, price, brand, category, stock } =
          data?.product;
        setName(name);
        setId(_id);
        setDescription(description);
        setBrand(brand);
        setPrice(price);
        setCategory(category._id);
        setStock(stock);
      }
    } catch (error) {
      console.log("Error in getting Single Product..", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

  // ********************** ||Update Product|| *****************************************
  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("category", category);
      productData.append("stock", stock);
      productData.append("brand", brand);
      image && productData.append("image", image);
      const response = await axios.put(
        `/api/v1/product/update-product/${id}`,
        productData
      );

      const data = response?.data;

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

  // ********************** ||Delete Product|| *****************************************
  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    try {
      let ans = window.prompt(
        "Are you sure? You want to permanently delete this product"
      );
      if (!ans) return;
      const response = await axios.delete(
        `/api/v1/product/delete-product/${id}`
      );

      const data = response?.data;

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
      console.log("Delete Error", error);
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
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Update Product</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a Category"
                size="large"
                showSearch
                className="form-select mb-3"
                value={category}
                onChange={(value) => setCategory(value)}
              >
                {categories &&
                  categories.map((item) => (
                    <Option key={item._id} value={item._id}>
                      {item.name}
                    </Option>
                  ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12 fs-5">
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
              <div className="mb-3">
                {image ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="product-img"
                      height="200px"
                      className="img img-responsive"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src={`/api/v1/product/product-image/${id}`}
                      alt="product-img"
                      height="200px"
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name={name}
                  value={name}
                  placeholder="Enter Product Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  rows="3"
                  name={description}
                  value={description}
                  placeholder="Write a Description..."
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  name={price}
                  value={price}
                  placeholder="Enter Product Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  name={stock}
                  value={stock}
                  placeholder="Stocks Present"
                  className="form-control"
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name={brand}
                  value={brand}
                  placeholder="Enter Product Brand"
                  className="form-control"
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value === "1");
                  }}
                  value={shipping ? "1" : "0"}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-outline-primary ms-2"
                  onClick={handleUpdateProduct}
                >
                  UPDATE PRODUCT
                </button>
                <button
                  className="btn btn-outline-danger ms-4"
                  onClick={handleDeleteProduct}
                >
                  DELETE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
