import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-hot-toast";
import { FadeLoader } from "react-spinners";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [initialRender, setInitialRender] = useState(false);

  function handlePrevious() {
    setPage((p) => {
      if (p === 1) {
        return p;
      }
      return p - 1;
    });
  }

  function handleNext() {
    setPage((p) => {
      if (p === pageCount) {
        return p;
      }
      return p + 1;
    });
  }

  // ********************** ||Get All Categories|| *****************************************
  const getAllCatgeory = async () => {
    try {
      const response = await axios.get("/api/v1/category/get-category");

      const data = response?.data;

      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log("Something went wrong in getting all categories😮", error);
    }
  };

  // ********************** ||Get Page Count|| *****************************************
  const getPageCount = async () => {
    try {
      const respone = await axios.get("/api/v1/product/product-pageCount");

      const data = respone?.data;

      if (data?.success) {
        setPageCount(data?.pageCount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ********************** ||Handle Filter|| *****************************************
  const handleFilter = (checkedCategory, categoryID) => {
    let allCat = [...checked];

    if (checkedCategory) {
      allCat.push(categoryID);
    } else {
      allCat = allCat.filter((item) => item !== categoryID);
    }
    setChecked(allCat);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) {
      const fetchProductList = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `/api/v1/product/product-list/${page}`
          );

          const data = response?.data;

          if (data?.success) {
            setProducts(data?.products);
            setLoading(false);
          }
        } catch (error) {
          console.log("Error while fetching products", error);
          setLoading(false);
        }
      };
      fetchProductList();
    }
  }, [checked.length, radio.length, page]);

  useEffect(() => {
    if (!initialRender) {
      getPageCount();
      getAllCatgeory();
      setInitialRender(true);
    }
  }, [initialRender]);

  useEffect(() => {
    if (checked.length || radio.length) {
      //get filtered produts
      const getFilteredProducts = async () => {
        console.log(checked, radio);
        try {
          const response = await axios.post(
            "/api/v1/product/products-filters",
            {
              checked,
              radio,
            }
          );
          const data = response?.data;
          if (data?.success) {
            setProducts(data?.filteredProducts);
          }
        } catch (error) {
          console.log("Error on filetring product", error);
        }
      };
      getFilteredProducts();
    }
  }, [checked, radio]);

  const handleCartClick = (e, product) => {
    e.preventDefault();
    //    add to cart
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    toast.success(`${product.name} added to cart!!✌️✌️`);
  };

  return (
    <Layout title={"All Products - Best Offers"}>
      <div style={{ position: "relative" }}>
        <img
          src="/images/shopping-cart-with-wooden-elements.jpg"
          className="banner-img"
          alt="bannerimage"
          width={"100%"}
          style={{ filter: "brightness(50%)" }}
          loading="lazy"
        />
        {/* Add the Typewriter component here */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "5%",
            textAlign: "left",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h1
            style={{
              margin: "0",
              fontWeight: "600",
              fontSize: "2.6rem",
              color: "#fff",
              letterSpacing: "1px",
            }}
          >
            Welcome to Our{" "}
            <span
              style={{
                color: "#FFF",
                animation: "fadeIn 4s ease-in-out infinite",
              }}
            >
              <b style={{ color: "red" }}>S</b>-MART
            </span>{" "}
            Store
            <br />
            <span
              style={{
                color: "#F7BA00",
                fontWeight: "bold",
                animation: "glow 2s infinite",
              }}
            >
              <Typewriter
                words={["Discover", "Shop", "Save", "Enjoy!", "Smile😍"]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
      </div>

      <div className="container-fluid row mt-3 home-page">
        {/* Category Filter */}

        <div className="col-md-3 filters">
          <h4 className="text-center">Filter By Category</h4>

          <div className="d-flex flex-column">
            {categories?.map((category) => (
              <Checkbox
                key={category._id}
                onChange={(e) => handleFilter(e.target.checked, category._id)}
              >
                {category.name}
              </Checkbox>
            ))}
          </div>

          {/* Price Filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p.id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-dark"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <h1 className="text-center mb-4">Discover Your Favorites</h1>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <FadeLoader color="#0a5071" />
              <span className="fw-bold fs-5 ms-3" style={{ color: "#0a5071" }}>
                Just sec..Fetching Products..
              </span>
            </div>
          ) : (
            <div className="d-flex justify-content-between flex-wrap align-items-center">
              {products.length === 0 && (
                <h4 className="text-muted">
                  Products not available in price range{" "}
                  {radio.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                  })}{" "}
                </h4>
              )}
              {products?.map((item) => (
                <div key={item._id} className="card m-2">
                  <img
                    src={`/api/v1/product/product-image/${item._id}`}
                    className="card-img-top"
                    alt={item.name}
                    loading="lazy"
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{item.name}</h5>
                      <h5 className="card-title card-price">
                        {item.price.toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </h5>
                    </div>
                    <p className="card-text">
                      {item.description.substring(0, 60)}...
                    </p>

                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/product/${item.slug}`);
                        }}
                      >
                        More Details
                      </button>
                      <button
                        className="btn btn-dark ms-1"
                        onClick={(e) => handleCartClick(e, item)}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pagination-btns">
            <button
              className="button prev"
              disabled={page === 1}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="button next"
              disabled={page === pageCount}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
