"use client";

import FetchCategories from "../Custom Hooks/FetchCategories";
import { useState } from "react";
import Cat from "./Categories";
import Navigation from "../explore/Navigation";
import MealList from "./MealList"



export const Categories = () => {
  const { categories } = FetchCategories();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
    

      <Navigation />
      <Cat
        categories={categories}
        onSelectCategory={handleCategoryClick}
        selectedCategory={selectedCategory}
      />
      {selectedCategory && <MealList selectedCategory={selectedCategory} />}

    </>
  );
};


export default Categories;
