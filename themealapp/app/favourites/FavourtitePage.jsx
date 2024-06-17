import React from "react";

import Image from "next/image";

const FavouritesPage = () => {
  // Retrieve favorites from local storage
  const favorites = JSON.parse(localStorage.getItem("favourites")) || [];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Favorite Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {favorites.map((meal) => (
          <>
          <div class=" w-96 bg-base-100 shadow-xl" key={meal.id}>
          <figure><Image
          src={meal.strMealThumb}
          alt="meal picture"
          width={400}
          height={100}
          className="border-2 border-black rounded-lg"
        /></figure>
          <div class="card-body">
            <h2 class="card-title">{meal.strMeal}</h2>
            
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
    
      </>
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
