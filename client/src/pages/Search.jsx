import React from "react";
import Layout from "../components/Layout/Layout";
import { useSearch } from "../context/Search";
import { Link } from "react-router-dom";

const Search = () => {
  const [search] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h5>
            {search?.results.length < 1
              ? "No Products Found"
              : `Found ${search?.results.length}`}
          </h5>
          <div className="d-flex flex-wrap mt-4">
            {search?.results.map((item) => (
              <div
                key={item._id}
                className="card m-2"
                style={{ width: "22rem" }}
              >
                <img
                  src={`/api/v1/product/product-image/${item._id}`}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body" style={{ height: "15rem" }}>
                  <h5
                    className="card-title"
                    style={{
                      marginBottom: "0.5rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.name}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.description}
                  </p>
                  <p className="card-text fw-bold">Price : ₹{item.price}</p>
                  <div>
                    <Link className="btn btn-primary ms-2">More details</Link>
                    <Link className="btn btn-secondary ms-2">ADD TO CART</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
