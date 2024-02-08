"use client"
import React from 'react'
import FavourtiteList from './FavourtiteList'
import { useState, useEffect } from 'react'

const Favoruites = () => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  useEffect(() => {
  
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <section>
        <h1 className='font-poppins text-4xl font-bold m-4'>Favourites</h1>
       
 
        <FavourtiteList favourites={favourites}/>
        
    </section>
  )
}

export default Favoruites