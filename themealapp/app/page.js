"use client"
import FetchCategories from "./API/FetchCategories"
import Categories from "./Components/Categories"


export default function Home() {
  const {categories} = FetchCategories()

  
  return (
    <div>
      
        <Categories key={categories.idCategory} categories={categories} />
        
    
    </div>
  )
    
}
