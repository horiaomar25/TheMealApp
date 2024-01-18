"use client"
import FetchCategories from "./API/FetchCategories"
import Categories from "./Components/Categories"
import SearchInput from "./Components/SearchInput"
import Hero from "./Components/Hero"
import Navigation from "./Components/Navigation"


export default function Home() {
  const {categories} = FetchCategories()

  
  return (
    <>
    <Navigation/>
    <Hero/>
 
    <div>
      
        <Categories key={categories.idCategory} categories={categories} />
        
    
    </div>
    </>
  )
    
}
