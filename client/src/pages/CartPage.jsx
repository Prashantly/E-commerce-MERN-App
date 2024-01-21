import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "../components/Spinner";
import { AiFillUnlock } from "react-icons/ai";

import axios from "axios";
import { toast } from "react-hot-toast";

const CartPage = () => {
  const { cart, setCart } = useCart();
  const [auth] = useAuth();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // calculate total Price
  const totalPrice = () => {
    let totalPrice = cart.reduce(
      (totalPrice, item) => totalPrice + item.price,
      0
    );

    return totalPrice.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  };

  //remove Item from cart
  const removeCartItem = (pId) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pId);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log("Error***", error);
    }
  };

  const handleCheckout = () => {
    setLoading(true);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        axios
          .post(`/api/v1/product/cart-checkout`, {
            cart,
          })
          .then((response) => {
            const data = response?.data;
            if (data.success) {
              navigate("/dashboard/user/orders");
              setCart([]);
              localStorage.removeItem("cart");
            }
            setLoading(false);
            resolve(data);
          })
          .catch((error) => {
            if (error.response.status === 401) {
              toast.error("Ooops🫢🫢 Token got expired. Please login again.");
              navigate("/login");
            }
            setLoading(false);
            reject(error);
          });
      }, 3000);
    });

    return toast.promise(promise, {
      loading: "Placing Your Order...Please wait",
      success: "Order Placed Successfully!!",
      error: "Could not place the order.",
    });
  };

  return (
    <Layout title={"Cart - S-Mart"}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-2">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center">
              {cart?.length > 0 ? (
                <>
                  You have {cart?.length}{" "}
                  {cart?.length === 1 ? "item" : "items"} in your cart{" "}
                  {auth?.token ? null : <>Please Login to check out!!</>}
                </>
              ) : (
                "Your cart is empty right now. Please add some items"
              )}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {cart?.map((product, index) => (
              <div
                className="row mb-3 p-3 card flex-row"
                key={`${product._id}-${index}`}
              >
                <div className="col-md-4">
                  <img
                    src={`/api/v1/product/product-image/${product._id}`}
                    className="card-img-top"
                    alt={product.name}
                    style={{
                      height: "180px",
                      width: "180px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <h3>{product.name}</h3>
                  <p>{product.description.substring(0, 100)}.....</p>
                  <p className="fw-bold">Price: ₹{product.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeCartItem(product._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <div className="mb-4">
              <h2>Cart Summary</h2>
              <hr />
              <h4>Total: {totalPrice()}</h4>
            </div>
            {auth?.user?.address ? (
              <>
                <div className="mb-4">
                  <p className="fs-5">Current Address : </p>
                  <p>{auth?.user?.address}</p>
                  <Link
                    to="/dashboard/user/profile"
                    className="btn btn-outline-warning"
                  >
                    Update Address
                  </Link>
                </div>
              </>
            ) : (
              <div className="mb-4">
                {auth?.token ? (
                  <Link
                    to="/dashboard/user/profile"
                    className="btn btn-outline-warning"
                  >
                    Update Address
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="btn btn-outline-warning"
                    state="/cart"
                  >
                    Please Login to Checkout
                  </Link>
                )}
              </div>
            )}
            <button
              className="btn btn-outline-dark"
              style={{ width: "auto", letterSpacing: "2px" }}
              onClick={handleCheckout}
              disabled={loading || !auth?.user?.address || !cart.length}
            >
              {loading ? (
                <div className="d-flex align-items-center">
                  <ClipLoader size={17} />
                  <p className="mb-0 ms-2">Processing Request...</p>
                </div>
              ) : (
                <>
                  <AiFillUnlock size={20} /> Checkout
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
