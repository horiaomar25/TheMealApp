"use client";

import FetchCategories from "../API/FetchCategories";
import React from 'react'
import CategoriesSelect from "../Categories/Categories";
import MealList from "../Categories/MealList";
import { useState } from "react";





export const Categories = () => {
    const { categories } = FetchCategories();
    const [selectedCategory, setSelectedCategory] = useState("");
  
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <>
      
       
      
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
  }
  

  export default Categories