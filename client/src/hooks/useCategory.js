import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //   ********************************** | Get Categories | **************************
  const getCategories = async () => {
    try {
      const response = await axios.get("/api/v1/category/get-category");

      const data = response?.data;
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log("Error while getting categories---->", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
