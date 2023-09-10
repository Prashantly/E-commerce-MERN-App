import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const response = await axios.get("/api/v1/auth/orders");
      console.log(response);
      const data = response?.data;

      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);
  return (
    <Layout title={"Dashboard | Orders"}>
      <div
        className="container-fluid p-5"
        style={{ minHeight: "80vh", backgroundColor: "#f5f5f5" }}
      >
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1
              className="text-center mb-4"
              style={{ color: "#0a5071", fontSize: "2.5rem" }}
            >
              My Orders
            </h1>
            {orders.length === 0 && (
              <h4 className="text-center text-muted">No Orders to Show...</h4>
            )}
            {orders.map((o, i) => (
              <div key={i} className="border shadow mb-2">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th style={{ color: "mediumblue" }}>{i + 1}</th>
                      <th style={{ color: "mediumblue" }}>{o?.status}</th>
                      <th style={{ color: "mediumblue" }}>{o?.buyer?.name}</th>
                      <th style={{ color: "mediumblue" }}>
                        {moment(o?.createdAt).fromNow()}
                      </th>
                      <th style={{ color: "mediumblue" }}>
                        ₹{o?.amount.toFixed(2)}
                      </th>
                      <th style={{ color: "mediumblue" }}>
                        {o?.products.length}
                      </th>
                    </tr>
                  </tbody>
                </table>
                <div className="container">
                  {o?.products?.map((product) => (
                    <div
                      className="row mb-3 p-3 border product-row"
                      key={product._id}
                    >
                      <div className="col-md-3">
                        <img
                          src={`/api/v1/product/product-image/${product._id}`}
                          alt={product.name}
                          className="img-fluid"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "200px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div className="col-md-9">
                        <h4>{product.name}</h4>
                        <p>{product.description.substring(0, 100)}.....</p>
                        <p className="fw-bold text-success fs-6">
                          Price: ₹{product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyOrders;
