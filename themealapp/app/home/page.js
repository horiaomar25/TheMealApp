"use client";
import Navigation from "../explore/Navigation";
import HeroSection from "./HeroSection";
import LastestPicks from "./LastestPicks";

import FetchCategories from "../Custom Hooks/FetchCategories";
import { useState } from "react";

const Home = () => {
  const { categories } = FetchCategories();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Navigation />
      <HeroSection />
      <LastestPicks />
    </>
  );
};

export default Home;
