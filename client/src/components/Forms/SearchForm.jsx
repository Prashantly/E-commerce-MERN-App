import React from "react";
import { useSearch } from "../../context/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/SearchForm.css";

const SearchForm = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const keyword = values.keyword;

      const response = await axios.get(`/api/v1/product/search/${keyword}`);

      const data = response?.data;

      if (data.success) {
        setValues({ ...values, results: data.searchResults });
      }
      navigate("/search");
    } catch (error) {
      console.log("Error", error);
    }
  }
  return (
    <div className="main-search-input-wrap">
      <div className="main-search-input">
        <div className="main-search-input-item">
          <input
            type="text"
            placeholder="Search Products..."
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          />
        </div>
        <div>
          <button
            className="main-search-button"
            type="button"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
