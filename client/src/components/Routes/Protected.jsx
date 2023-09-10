import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BounceLoader } from "../Spinner";
import { toast } from "react-hot-toast";

const ProtectedRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const response = await axios.get("/api/v1/auth/admin-auth");
        if (response.data.ok) {
          setOk(true);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        if (error.response.status === 401) {
          toast.error(
            "It looks like your token got Expired😕, Please login again!!",
            {
              style: {
                background: "#EE4238",
                borderRadius: "10px",
                color: "#fff",
              },
            }
          );
          navigate("/login");
        } else {
          toast.error(
            "You do not have the required permissions to access this resource",
            {
              style: {
                background: "#EE4238",
                borderRadius: "10px",
                color: "#fff",
              },
            }
          );
        }

        setOk(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token, navigate]);
  return ok ? <Outlet /> : <BounceLoader path="" />;
};

export default ProtectedRoute;
