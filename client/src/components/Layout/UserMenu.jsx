import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const UserMenu = () => {
  const menuStyle = {
    backgroundColor: "#0a5071",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    transition: "color 0.3s ease",
  };

  const activeLinkStyle = {
    fontWeight: "bold",
    color: "#fff",
  };

  return (
    <div className="text-center">
      <div className="list-group" style={menuStyle}>
        <h3 style={{ color: "#fff" }}>Dashboard</h3>
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action fs-4"
          style={linkStyle}
          activeStyle={activeLinkStyle}
        >
          <CgProfile /> Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action fs-5"
          style={linkStyle}
          activeStyle={activeLinkStyle}
        >
          My Orders
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
