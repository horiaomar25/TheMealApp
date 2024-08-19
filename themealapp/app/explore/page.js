"use client";
import React, { useState } from "react";
import SearchResults from "./SearchResults";
import NewNav from "@/Components/Navigation";
import MealList from "../Categories/MealList"; // Ensure this path is correct

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowSearchResults(false); // Reset search results visibility
  };

  const handleSearchResults = (showResults) => {
    setShowSearchResults(showResults);
  };

  return (
    <>
      <NewNav />
      <SearchResults showResults={handleSearchResults} />

      {selectedCategory && !showSearchResults && (
        <MealList selectedCategory={selectedCategory} />
      )}
    </>
  );
}

