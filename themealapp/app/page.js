"use client"
import { useState } from 'react'
import FetchCategories from "./API/FetchCategories"
import Categories from "./Components/Categories"
import SearchInput from "./Components/SearchInput"
import Hero from "./Components/Hero"
import Navigation from "./Components/Navigation"
import MealList from "./Components/MealList"


export default function Home() {
  const { categories } = FetchCategories();
  const [selectedCategory, setSelectedCategory] = useState('');

  /* This function takes a category as a argument and sets selectedCategory
      to the clicked category. This is passed down to MealCategory*/
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
    <Navigation/>
    <Hero/>
      <Categories categories={categories} onSelectCategory={handleCategoryClick} />
      <MealList selectedCategory={selectedCategory} />
    </>
  );
};