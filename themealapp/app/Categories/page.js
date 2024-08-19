"use client";

import UseCategories from "../Custom Hooks/UseCategories";
import { useState } from "react";
import Categories from "./Categories";

import MealList from "./MealList"
import NewNav from "@/components/Navigation";


export const CategoriesPage = () => {
  // destructure the categories from the custom hook. This contains the data we need to display the categories.
  const { categories } = UseCategories();
  // create a state to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("");
 
// handleCategoryClick function that takes a category as an argument (an event) and sets the selected category to that category.
  const handleCategoryClick = (category) => {
    // uses the state function to set the selected category to the category that was clicked.
    setSelectedCategory(category);
  };

  return (
    <>
    <NewNav/>

      <Categories
      //data
        categories={categories}
        // event handling when category is clicked
        onSelectCategory={handleCategoryClick}
        // state so the category can be highlighted when selected
        selectedCategory={selectedCategory}
      />

      {selectedCategory && <MealList selectedCategory={selectedCategory} />}

    </>
  );
};


export default CategoriesPage;
