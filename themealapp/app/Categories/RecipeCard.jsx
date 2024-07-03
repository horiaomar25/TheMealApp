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
      ingredients.push({
        name: meal[ingredientKey],
        measure: meal[measureKey],
        full: ingredient,
      });
    } else {
      break; // Stop iterating if there are no more ingredients
    }
  }

  // Split the instructions into an array and filter out empty strings
  const instructions = meal?.strInstructions?.split(".").filter(instruction => instruction.trim() !== "") || [];

  const handleFavourite = () => {
    if (isFavourite) {
      setFavourites(favourites.filter((f) => f.idMeal !== meal.idMeal));
    } else {
      setFavourites([...favourites, meal]);
    }
    setIsFavourite(!isFavourite);
  };

  const getIngredientImageUrl = (ingredient) => {
    return `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
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
          <h2 className="text-xl font-bold mb-4 text-black">Ingredients:</h2>
          <div className="flex flex-col">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center mb-2 hover:border hover:border-black">
                <Image
                  src={getIngredientImageUrl(ingredient.name)}
                  alt={ingredient.name}
                  width={70}
                  height={70}
                  className="border-2 border-black rounded-lg"
                />
                <span className="ml-4 text-lg text-black">
                  {ingredient.full}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-4 md:mb-2 text-center text-black">Instructions:</h2>
          <ul className="pl-6">
            {instructions.map((instruction, index) => (
              <li key={index} className="mb-2 text-black border border-black rounded-lg p-4">
                {instruction.trim() && instruction.trim() + "."}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;



