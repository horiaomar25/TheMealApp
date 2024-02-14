"use client"
import React from 'react';


const FavourtiteList = ({favourites}) => {
  return (
    <>
    
    <section className='border-2 border-black m-4 rounded-xl'>
      <h2 className='m-6'>Favourtite List</h2>
    {favourites.map((favourite) => 
      <div
        key={favourite.id} className='border-2 border-black rounded-xl w-1/5 m-10 flex flex-col p-6'>    
      <img src={favourite.strMealThumb} alt={favourite.strMeal}  className='w-full'/>
      <div className='bg-orange w-full'>
      <h3 className='bg-orange text-xl font-semibold p-4 border border-black'>{favourite.strMeal}</h3>
      </div>
      

      
      
      </div>
      
  )}
  </section>
</>
  )
}

export default FavourtiteList