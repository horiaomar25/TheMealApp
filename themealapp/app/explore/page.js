"use client";
import React, { useState } from "react";
import SearchResults from "./SearchResults";
import Navigation from "./Navigation";
import MealList from "../Categories/MealList";




export default function Home() {

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
   
        <Navigation/>
        <SearchResults showResults={handleSearchResults} />
       
        {selectedCategory && !showSearchResults && (
          <MealList selectedCategory={selectedCategory} />
        )}
  
    </>
  );
}

