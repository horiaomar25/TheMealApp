import { useState, useEffect } from "react";

const useSearch = () => {
  useEffect(() => {
    const fetchData = async (meal) => {
      try {
        const response = await fetch(
          `https://ww.themealdb.com/api/json/v1/1/search.php?s=${meal}`
        ); // The route defined in your proxy file

        if (!response.ok) {
          throw new Error(
            `Network response was not ok. Status: ${response.status}`
          );
        }

        const data = await response.json();

        setCategories(data.categories);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []); 

  return {};
};

export default useSearch;
