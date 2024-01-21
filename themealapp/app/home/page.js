"use client";
// Home.js
import { useState } from "react";
import FetchCategories from "../API/FetchCategories";
import Categories from "./Categories";
import Hero from "./Hero";
import Navigation from "./Navigation";
import MealList from "./MealList";

export default function Home() {
  const { categories } = FetchCategories();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navigation />
      {selectedCategory ? null : <Hero />}{" "}
      {/* Show Hero only if no category is selected */}
      {selectedCategory ? (
        <MealList selectedCategory={selectedCategory} />
      ) : (
        <Categories
          categories={categories}
          onSelectCategory={handleCategoryClick}
        />
      )}
    </>
  );
}
