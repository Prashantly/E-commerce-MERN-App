import React from "react";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <h2
          className="text-center mt-5 mb-4"
          style={{
            color: "#155288",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Browse Categories
        </h2>
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-4 mb-4" key={c._id}>
              <div className="card">
                <div
                  className="card-background" // You can add custom CSS for the background style
                  style={{
                    background: "linear-gradient(to bottom, #ff7f50, #ff6347)",
                  }} // Example gradient background
                >
                  <div className="card-body">
                    <h5 className="card-title">{c.name}</h5>
                    <p className="card-text">{c.description}</p>
                    <Link
                      to={`/category/${c.slug}`}
                      className="btn btn-primary btn-block"
                    >
                      Explore {c.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
