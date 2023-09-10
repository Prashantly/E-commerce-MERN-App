import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BounceLoader } from "../Spinner";

const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const response = await axios.get(`/api/v1/auth/user-auth`);
        if (response.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token, navigate]);
  return ok ? <Outlet /> : <BounceLoader />;
};

export default PrivateRoute;
