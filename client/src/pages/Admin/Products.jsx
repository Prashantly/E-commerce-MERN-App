import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import "../../styles/adminProducts.css";

import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // ********************** ||Get All Products|| *****************************************
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get("/api/v1/product/get-product");

      const data = response?.data;

      if (data?.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log("Error while fetching products", error);
      toast.error(error?.response?.data?.message, {
        style: {
          backgroundColor: "#BD282B",
          fontWeight: "600",
          color: "#fff",
        },
      });
    }
  };

  //life cycle method
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <Layout>
      <div className="container-fluid product-page">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center mb-3">All Products List</h1>
            <div className="d-flex flex-wrap">
              {products?.map((item) => (
                <Link
                  key={item._id}
                  to={`/dashboard/admin/product/${item.slug}`}
                  className="product-link"
                >
                  <div className="card m-2 product-card">
                    <img
                      src={`/api/v1/product/product-image/${item._id}`}
                      className="card-img-top product-image"
                      alt={item.name}
                    />
                    <div className="card-body">
                      <div className="card-name-price">
                        <h5 className="card-title product-title">
                          {item.name}
                        </h5>
                        <h5 className="card-title card-price">
                          {item.price.toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                          })}
                        </h5>
                      </div>
                      <p className="card-text product-description">
                        {item.description.substring(0, 60)}...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
