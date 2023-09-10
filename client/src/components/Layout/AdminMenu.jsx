import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/AdminMenu.css";

const AdminMenu = () => {
  return (
    <div className="admin-menu-container">
      <div className="admin-menu-heading">
        <h3>Admin Panel</h3>
      </div>
      <div className="list-group">
        <NavLink
          to="/dashboard/admin/create-category"
          className="admin-menu-item"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="admin-menu-item"
        >
          Create Product
        </NavLink>
        <NavLink to="/dashboard/admin/products" className="admin-menu-item">
          Products
        </NavLink>
        <NavLink to="/dashboard/admin/orders" className="admin-menu-item">
          User Orders
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
