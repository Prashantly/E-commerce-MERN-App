import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { ClipLoader } from "../components/Spinner";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useCart } from "../context/cart";

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params?.slug) {
      const getProductCat = async () => {
        try {
          setLoading(true);
          const slug = params.slug;
          const response = await axios.get(
            `/api/v1/product/product-category/${slug}`
          );

          const data = response?.data;

          if (data?.success) {
            setProducts(data?.products);
            setCategory(data?.category);
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
      getProductCat();
    }
  }, [params?.slug]);

  const handleCartClick = (e, product) => {
    e.preventDefault();
    //    add to cart
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    toast.success(`${product.name} added to cart!!✌️✌️`);
  };

  return (
    <Layout
      title={
        category?.name ? `${category?.name} Products | S-Mart` : "Loading..."
      }
    >
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <ClipLoader />
          <h3 className="ms-2">Loading...</h3>
        </div>
      ) : (
        <div className="container">
          <h4 className="text-center mt-4 text-capitalize">{`Category - ${category.name}`}</h4>
          <h5 className="text-center mt-2">{`${products.length} results found.`}</h5>
          <div className="row">
            {products?.map((item) => (
              <div key={item._id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={`/api/v1/product/product-image/${item._id}`}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "250px" }} // Adjust the height as needed
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      {item.description.substring(0, 60)}...
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">
                        {item.price.toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </h5>
                      <button
                        className="btn btn-info"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/product/${item.slug}`);
                        }}
                      >
                        More Details
                      </button>
                    </div>
                    <button
                      className="btn btn-dark mt-2"
                      onClick={(e) => handleCartClick(e, item)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CategoryProduct;
