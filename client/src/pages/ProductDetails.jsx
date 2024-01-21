import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ClipLoader } from "../components/Spinner";
import { useCart } from "../context/cart";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { handleCartClick } = useCart();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRealatedProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      const getProduct = async () => {
        try {
          const response = await axios.get(
            `/api/v1/product/get-product/${params.slug}`
          );

          const data = response?.data;
          setProduct(data?.product);
          getSimilarProduct(data?.product._id, data?.product.category._id);
        } catch (error) {
          console.log("Error***", error);
        }
      };
      getProduct();
    }
  }, [params?.slug]);

  // *********************** || GET PRODUCT || **************************************

  //*********************** || GET SIMILAR PRODUCT || **************************************

  const getSimilarProduct = async (pId, cId) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/api/v1/product/related-products/${pId}/${cId}`
      );

      const data = response?.data;

      setRealatedProduct(data?.products);
      setLoading(false);
    } catch (error) {
      console.log("Error while getting similar products", error);
      setLoading(false);
    }
  };

  return (
    <Layout title={`${product.name} Deatils`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`/api/v1/product/product-image/${product._id}`}
              className="card-img-top product-image"
              alt={product.name}
              height="400px"
              width={"350px"}
            />
          </div>
          <div className="col-md-6">
            <h2
              className="text-center"
              style={{
                color: "#155288",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                marginBottom: "20px",
              }}
            >
              Product details
            </h2>
            <h4 className="text-muted">Name: {product?.name}</h4>
            <h5 className="text-muted">Category: {product?.category?.name}</h5>
            <p className="text-muted fs-5">
              Description: {product?.description}
            </p>
            <p className="text-muted fs-5">Brand: {product?.brand}</p>
            <h4 className="text-muted">Price: ₹{product?.price}</h4>
            <h5 className="text-muted">Stock Remaining: {product?.stock}</h5>
            <button
              className="btn btn-primary buy-now-button mt-2 fs-5"
              onClick={(e) => {
                handleCartClick(e, product);
                navigate("/cart");
              }}
              style={{ width: "180px", letterSpacing: "1px" }}
            >
              Buy Now
            </button>
          </div>
        </div>
        <hr />
        <div className="row container">
          <h3
            style={{
              color: "#155288",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              marginBottom: "40px",
            }}
          >
            Similar Products
          </h3>
          {loading ? (
            <div className="d-flex align-items-center justify-content-center">
              <ClipLoader />
              <p className="fs-5 fw-bold m-2">Loading similar products...</p>
            </div>
          ) : relatedProduct.length < 1 ? (
            <p className="fs-5 fw-bold text-center">
              No similar products found!!
            </p>
          ) : (
            <div className="row">
              {relatedProduct?.map((item) => (
                <div key={item._id} className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src={`/api/v1/product/product-image/${item._id}`}
                      className="card-img-top"
                      alt={item.name}
                      loading="lazy"
                      style={{ maxHeight: "300px", objectFit: "fit" }}
                    />
                    <div className="card-body">
                      <div className="card-name-price d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{item.name}</h5>
                        <h5 className="card-title card-price">
                          {item.price.toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                          })}
                        </h5>
                      </div>
                      <p className="card-text">
                        {item.description.substring(0, 60)}...
                      </p>
                      <div className="card-buttons">
                        <button
                          className="btn btn-info me-2"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`/product/${item.slug}`);
                          }}
                        >
                          More Details
                        </button>
                        <button
                          className="btn btn-dark"
                          onClick={(e) => handleCartClick(e, item)}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
