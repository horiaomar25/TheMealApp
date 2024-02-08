"use client"
import React from 'react';


const FavourtiteList = ({favourites}) => {
  return (
    <>
    <h2>Favourtite List</h2>
    {favourites.map((favourite) => 
      <div
        key={favourite.id} className='border-2 border-black w-1/2 m-10 flex flex-col p-6'>    
      <img src={favourite.strMealThumb} alt={favourite.strMeal}  width={100}/>
      <h3>{favourite.strMeal}</h3>

      
      
      </div>
  )}
</>
  )
}

export default FavourtiteList