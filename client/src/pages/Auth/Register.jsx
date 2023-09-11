import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "../../styles/authStyles.css";

const Register = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  //form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/v1/auth/register`, {
        ...cred,
      });

      if (response && response.status === 201) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log("Error***", error);
      toast.error(error.response.data.message);
    }
  };

  const handleInputChange = (event) => {
    setCred({
      ...cred,
      //   event.target.name is the input field name and value is what we want to update it with
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Layout title={"Register now - S-Mart"}>
      <div className="form-container animated-form">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={cred.name}
              name="name"
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={cred.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              value={cred.password}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="phone"
              value={cred.phone}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              value={cred.address}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
