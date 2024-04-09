"use client"
import Navigation from "./explore/Navigation"
import HeroSection from "./home/HeroSection"
import LastestPicks from "./home/LastestPicks"
import Cat from "./explore/Cat"
import FetchCategories from "./Custom Hooks/FetchCategories"
import { useState } from "react"

export default function Home() {
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
    )
}