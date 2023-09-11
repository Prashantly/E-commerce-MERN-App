import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/authStyles.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const { id, token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userValid = async () => {
      try {
        const response = await axios.get(
          `/api/v1/auth/forgotPassword/${id}/${token}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.status === 200) {
          console.log("User Valid!!");
        }
      } catch (error) {
        console.log(`Error ${JSON.stringify(error)}`);
        navigate("/*");
        toast.error(error.response.data.message, {
          style: {
            background: "#EE4238",
            borderRadius: "10px",
            color: "#fff",
          },
        });
      }
    };
    userValid();
  }, [id, navigate, token]);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/v1/auth/${id}/${token}`,
        {
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        setPassword("");
        setMessage(true);
      }
    } catch (error) {
      console.log(`Error ${JSON.stringify(error)}`);
      toast.error("Token expired!! Generate new Link!!", {
        style: {
          background: "#EE4238",
          borderRadius: "10px",
          color: "#fff",
        },
      });
    }
  };

  return (
    <Layout title={"Forgot Password - S-Mart"}>
      <div className="form-container animated-form">
        <form onSubmit={handlePasswordReset}>
          <h2 className="title" style={{ marginBottom: "40px" }}>
            Enter Your New Password
          </h2>

          {message ? (
            <p
              className="text-center"
              style={{ color: "green", fontWeight: "bold" }}
            >
              Password reset done!! <br />
              Login with New Password!!
            </p>
          ) : (
            <p></p>
          )}

          <div className="mb-3" style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your New Password"
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
            <button
              type="submit"
              className="btn btn-primary mt-3 text-uppercase"
              style={{ letterSpacing: "1px" }}
            >
              Reset Password
            </button>
          </div>
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

export default ForgotPassword;
