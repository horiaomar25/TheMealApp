"use client";

import FetchCategories from "../Custom Hooks/FetchCategories";
import React from "react";
import CategoriesSelect from "../Categories/Categories";
import MealList from "../Categories/MealList";
import { useState } from "react";
import Navigation from "../Home/Navigation";

export const Categories = () => {
  const { categories } = FetchCategories();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navigation />

      {selectedCategory ? (
        <MealList selectedCategory={selectedCategory} />
      ) : (
        <CategoriesSelect
          categories={categories}
          onSelectCategory={handleCategoryClick}
        />
      )}
    </>
  );
};

export default Categories;
