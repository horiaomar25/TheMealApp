"use client"
import React, { useState, useEffect } from 'react';
import FavouritesPage from "./FavourtitePage"
const FavouritesData = () => { // Corrected the component name
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
      if (storedFavourites) {
        setFavourites(storedFavourites);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  }, [favourites]);

  return (
    <section>
      <h1 className='font-poppins text-4xl font-bold m-4'>Favourites</h1>
      <FavouritesPage favourites={favourites}/> {/* Corrected the component name */}
    </section>
  );
}

export default FavouritesData; // Corrected the export name

