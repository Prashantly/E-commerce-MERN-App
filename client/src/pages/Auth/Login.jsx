import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "../../styles/authStyles.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../context/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useAuth();
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/v1/auth/login`, {
        ...cred,
      });

      console.log(response);
      console.log(response.data);

      if (response && response.status === 200) {
        toast.success(response.data && response.data.message, {
          style: {
            background: "#A0D9EF",
            borderRadius: "10px",
          },
        });
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.authToken,
        });
        localStorage.setItem("auth", JSON.stringify(response.data));
        navigate(location.state || "/");
      }
    } catch (error) {
      console.log("LoginError***", error);
      toast.error(error.response.data.message, {
        style: {
          background: "#EE4238",
          borderRadius: "10px",
          color: "#fff",
        },
      });
    }
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };

  const handleLoginInputChange = (event) => {
    setCred({
      ...cred,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Layout title={"Login now | S-Mart"}>
      <div className="form-container animated-form">
        <form onSubmit={handleLoginSubmit}>
          <h4 className="title">LOGIN FORM</h4>
          <p className="text-muted mb-3">
            Hi, we are glad that you're back, Please login
          </p>

          <div className="mb-3">
            <input
              type="email"
              value={cred.email}
              name="email"
              onChange={handleLoginInputChange}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3" style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={cred.password}
              name="password"
              onChange={handleLoginInputChange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
            <span
              className="password-toggle fs-5"
              onClick={togglePasswordVisibility}
              style={styles.passwordToggle}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mt-3">
              LOGIN
            </button>
          </div>

          <p className="text-muted text-center mt-3">
            Don't have an Account? <NavLink to="/register">Register</NavLink>
          </p>
          <p className="text-muted text-center mt-2 fw-bold">
            Forgot Password? <NavLink to="/password-reset">Click here</NavLink>
          </p>
        </form>
      </div>
    </Layout>
  );
};

const styles = {
  passwordToggle: {
    position: "absolute",
    right: "0.3rem",
    top: "0.2rem",
    cursor: "pointer",
  },
};

export default Login;
