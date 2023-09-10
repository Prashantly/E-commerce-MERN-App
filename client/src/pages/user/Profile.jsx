import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";
import axios from "axios";
import "../../styles/authStyles.css";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();

  //states
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const { name, email, phone, address } = auth?.user;
    setCred({
      name,
      email,
      phone,
      address,
    });
  }, [auth?.user]);

  //form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/v1/auth/profile`, {
        name: cred.name,
        password: cred.password,
        phone: cred.phone,
        address: cred.address,
      });

      const data = response?.data;

      if (data?.success) {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data?.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success(data?.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error***", error);
      toast.error(error?.response?.data?.message);
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
    <Layout title={"Dashboard | Profile"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 mt-3">
            <div className="form-container animated-form">
              <form onSubmit={handleSubmit}>
                <h4 className="title">USER PROFILE</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    value={cred.name}
                    name="name"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={cred.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Your Email"
                    disabled
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
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
