import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/authStyles.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `/api/v1/auth/sendPassLink`,
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setEmail("");
        setMessage(true);
      }

      //   if(rep)
    } catch (error) {
      console.error("Error sending password link:", error);
      toast.error(error.response.data.message, {
        style: {
          background: "#EE4238",
          borderRadius: "10px",
          color: "#fff",
        },
      });
    }
  };
  return (
    <Layout title={"Password Reset - S-Mart"}>
      <div className="form-container animated-form">
        <form onSubmit={handleSubmit}>
          <h2 className="title" style={{ marginBottom: "40px" }}>
            Enter Your Email
          </h2>
          {message ? (
            <p
              className="text-center"
              style={{ color: "green", fontWeight: "bold" }}
            >
              Password reset link sent successfully to Your Email
            </p>
          ) : (
            <p></p>
          )}
          <div className="mb-3">
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Your Valid Email Address"
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary mt-3 text-uppercase"
              style={{ letterSpacing: "1px" }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PasswordReset;
