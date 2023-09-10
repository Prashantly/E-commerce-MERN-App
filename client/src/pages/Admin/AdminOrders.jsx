import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import { toast } from "react-hot-toast";
import moment from "moment";
import { useAuth } from "../../context/auth";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminOrder.css";
const { Option } = Select;

const AdminOrders = () => {
  const navigate = useNavigate();
  const [allOrders, setAllOrders] = useState([]);
  const [auth] = useAuth();

  const [status] = useState([
    "Not Processed",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ]);

  const getAllOrders = async () => {
    try {
      const response = await axios.get("/api/v1/auth/all-orders");
      console.log(response);
      const data = response?.data;

      setAllOrders(data);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Your token got expired!!");
        navigate("/login");
      }
    }
  };

  const handleChangeStatus = async (orderId, status) => {
    try {
      const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
        status: status,
      });
      if (data?.success) {
        toast.success("Order Status Changed Successfully✌️👍", {
          style: {
            backgroundColor: "#36B37E",
            color: "white",
            borderRadius: "5px",
          },
        });
      }
      getAllOrders();
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Your token got expired!!");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (auth?.token) {
      getAllOrders();
    }
  }, [auth?.token]);

  return (
    <Layout title={"All orders | S-Mart"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center mb-4" style={{ color: "#0a5071" }}>
              ALL ORDERS
            </h1>
            {allOrders.map((o, i) => (
              <div key={i} className="border shadow mb-4 order-card">
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
                      <th>{i + 1}</th>
                      <th>
                        <Select
                          bordered={false}
                          onChange={(value) => handleChangeStatus(o._id, value)}
                          defaultValue={o?.status}
                          className="status-select"
                        >
                          {status.map((sts, i) => (
                            <Option key={i} value={sts}>
                              {sts}
                            </Option>
                          ))}
                        </Select>
                      </th>
                      <th>{o?.buyer?.name}</th>
                      <th>{moment(o?.createdAt).fromNow()}</th>
                      <th>₹{o?.amount.toFixed(2)}</th>
                      <th>{o?.products.length}</th>
                    </tr>
                  </tbody>
                </table>
                <div className="container">
                  {o?.products?.map((product) => (
                    <div
                      className="row mb-3 p-3 border product-row"
                      key={product._id}
                    >
                      <div className="col-md-4">
                        <img
                          src={`/api/v1/product/product-image/${product._id}`}
                          alt={product.name}
                          className="img-fluid product-image"
                        />
                      </div>
                      <div className="col-md-8">
                        <h4 className="product-name">{product.name}</h4>
                        <p className="product-description">
                          {product.description.substring(0, 100)}.....
                        </p>
                        <p className="fw-bold product-price">
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

export default AdminOrders;
