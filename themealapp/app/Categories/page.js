"use client";

import FetchCategories from "../Custom Hooks/UseCategories";
import { useState } from "react";
import Categories from "./Categories";
import Navigation from "../explore/Navigation";
import MealList from "./MealList"



export const CategoriesPage = () => {
  const { categories } = FetchCategories();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
    

      <Navigation />
      <Categories
        categories={categories}
        onSelectCategory={handleCategoryClick}
        selectedCategory={selectedCategory}
      />
      {selectedCategory && <MealList selectedCategory={selectedCategory} />}

    </>
  );
};


export default Categories;
