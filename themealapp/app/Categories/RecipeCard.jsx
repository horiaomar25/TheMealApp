import React, { useState, useEffect } from "react";

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
    <div className="w-full  bg-yellow p-8 relative flex flex-col justify-center items-center">
      {/* Header section */}
      <span
        className="absolute top-0 left-0 m-4 text-3xl cursor-pointer"
        onClick={onClose}
      >
        <img src="./back-arrow.png" alt="arrow icon" />
      </span>
      <span
        className="absolute top-0 right-0 m-4 text-3xl cursor-pointer"
        onClick={handleFavourite}
      >
        {isFavourite ? (
          <img src="/lover.png" alt="favorite icon" width={30} className="m-30" />
        ) : (
          <img src="/heart.png" alt="favorite icon" width={30} />
        )}
      </span>

      {/* Meal image */}
      <div className="flex flex-row justify-center items-center w-full overflow-auto">
        <img
          src={meal.strMealThumb}
          alt="meal picture"
          width={400}
          className="border-2 border-black rounded-lg mt-10"
        />
     
      </div>
      <p className='font-poppins text-2xl font-bold m-4 ml-10'>{meal.strMeal}</p>
      {/* Ingredients and Instructions */}
      <div className="w-full p-4 rounded-lg flex flex-col md:flex-row items-start justify-center mt-6">
        <div className="w-full md:w-1/2 rounded-lg p-6 mr-6">
          <h2 className="text-xl font-bold mt-2 mb-4 text-center">
            Ingredients:
          </h2>
          <div className="flex flex-wrap justify-between">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="w-1/2">
                <ul className="space-y-2">
                  <li className="flex items-center text-lg">
                    {ingredient}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mt-4 md:mt-2 text-center">Instructions:</h2>
          {Array.from(
            { length: Math.ceil(instructions.length / 3) },
            (v, i) => i
          ).map((index) => (
            <p key={index} className="mb-2">
              {instructions.slice(index * 3, index * 3 + 3).join(". ")}.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

