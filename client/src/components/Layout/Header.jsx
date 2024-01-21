import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";
import SearchForm from "../Forms/SearchForm";
import { BsCart4 } from "react-icons/bs";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import "../../styles/Header.css";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const { cart } = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successfully!!");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top nvbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center justify-content-center "
            >
              <FaShoppingBag className="me-2 text-light fs-2" />
              <span style={{ color: "#fff", fontSize: "30px" }}>
                <b className="s-word">S</b>-Mart
              </span>
            </Link>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <SearchForm />
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul
                  className="dropdown-menu"
                  style={{
                    maxHeight: "280px",
                    overflowY: "auto",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Link className="dropdown-item" to="/categories">
                    All Categories
                  </Link>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  {categories?.map((item) => (
                    <li key={item?._id}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${item.slug}`}
                      >
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/login"
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          LogOut
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <div className="cart-icon">
                    <Badge count={cart?.length}>
                      <BsCart4 style={{ fontSize: "24px", color: "#fff" }} />
                    </Badge>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
