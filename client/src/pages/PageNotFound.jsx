import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Goback | PageNotFound"}>
      <div
        className="page-not-found"
        style={{ backgroundImage: `url("/images/404_Not_found.jpg")` }}
      >
        <div className="content">
          <h1 className="not-found-title">Oops!</h1>
          <p className="not-found-text">
            The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="back-to-home-button">
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
