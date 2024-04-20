import React, { useState, useEffect } from "react";
import Image from "next/image";

const RecipeCard = ({ meal, onClose }) => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  const [isFavourite, setIsFavourite] = useState(
    favourites.some((f) => f.idMeal === meal.idMeal)
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    if (meal[ingredientKey]) {
      const ingredient = `${meal[measureKey]} ${meal[ingredientKey]}`;
      ingredients.push(ingredient);
    } else {
      break; // Stop iterating if there are no more ingredients
    }
  }

  const instructions = meal?.strInstructions?.split(".") || [];

  const handleFavourite = () => {
    if (isFavourite) {
      setFavourites(favourites.filter((f) => f.idMeal !== meal.idMeal));
    } else {
      setFavourites([...favourites, meal]);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="w-full bg-yellow p-8 rounded-lg">
      {/* Header section */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-3xl" onClick={onClose}>
          <Image src="/back-arrow.png" alt="arrow icon" width={30} height={100} />
        </button>
        <button className="text-3xl" onClick={handleFavourite}>
          {isFavourite ? (
            <Image src="/lover.png" alt="favorite icon" width={30} height={30} />
          ) : (
            <Image src="/heart.png" alt="favorite icon" width={30} height={30} />
          )}
        </button>
      </div>

      {/* Meal image */}
      <div className="flex justify-center items-center mb-4">
        <Image
          src={meal.strMealThumb}
          alt="meal picture"
          width={400}
          height={100}
          className="border-2 border-black rounded-lg"
        />
      </div>

      <p className="font-poppins text-2xl font-bold mb-4 text-black text-center">{meal.strMeal}</p>

      {/* Ingredients and Instructions */}
      <div className="w-full p-4 rounded-lg flex flex-col md:flex-row items-start justify-center">
        <div className="w-full md:w-1/2 rounded-lg p-6 mr-6 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4  text-black  ">Ingredients:</h2>
          <div className="flex flex-wrap justify-between">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="w-1/2">
                <ul className="space-y-2">
                  <li className="flex items-center text-lg text-black">{ingredient}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-4 md:mb-2 text-center text-black">Instructions:</h2>
          {Array.from(
            { length: Math.ceil(instructions.length / 3) },
            (v, i) => i
          ).map((index) => (
            <p key={index} className="mb-2 text-black">
              {instructions.slice(index * 3, index * 3 + 3).join(". ")}.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;


