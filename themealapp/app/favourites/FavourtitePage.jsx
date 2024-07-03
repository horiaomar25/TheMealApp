"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import FavouriteMeal from "./FavouriteMeal";

const FavouritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem("favourites");
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    }
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Favorite Recipes</h1>
      {selectedMeal ? (
        <FavouriteMeal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((meal) => (
            <div className="w-96 bg-base-100 shadow-xl" key={meal.id}>
              <figure>
                <Image
                  src={meal.strMealThumb}
                  alt="meal picture"
                  width={400}
                  height={100}
                  className="border-2 border-black rounded-lg"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{meal.strMeal}</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary hover:bg-orange" onClick={() => setSelectedMeal(meal)}>See More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;
