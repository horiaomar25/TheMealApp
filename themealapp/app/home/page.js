"use client";

import Cat from "./Cat";
import Hero from "./Hero";
import Navigation from "./Navigation";
import MealList from "../Categories/MealList";
import FetchCategories from "../Custom Hooks/FetchCategories";
import HomeLayout from "./HomeLayout";
import { useState } from "react";

export default function Home() {
  const { categories } = FetchCategories();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <HomeLayout>
        <Navigation />
        <Hero />
        <Cat
          categories={categories}
          onSelectCategory={handleCategoryClick}
          selectedCategory={selectedCategory}
        />
        {selectedCategory && (
          <MealList selectedCategory={selectedCategory} />
        )}
      </HomeLayout>
    </>
  );
}

