import React from "react";
import "../../styles/CatgeoryForm.css";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="category-form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="category-input"
            placeholder="Enter New Category.."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="btn btn-primary category-submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
