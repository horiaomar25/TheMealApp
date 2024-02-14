import React, { useState, useEffect } from "react";

const RecipeCard = ({ meal, onClose }) => {
  // Initialize state to track checked ingredients
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  // Initialize state for favorites, fetch from local storage
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  // Favourite toggle state
  const [isFavourite, setIsFavourite] = useState(
    favourites.some((f) => f.idMeal === meal.idMeal)
  );

  useEffect(() => {
    // Save favorites to local storage whenever it changes
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Function to handle toggling favorites
  const handleFavourite = () => {
    if (isFavourite) {
      setFavourites(favourites.filter((f) => f.idMeal !== meal.idMeal));
    } else {
      setFavourites([...favourites, meal]);
    }
    setIsFavourite(!isFavourite);
  };

  // Split the instructions into an array of sentences
  const instructions = meal.strInstructions.split(".");

  

  return (
    <div className="w-full  bg-yellow p-8 relative flex flex-col justify-center items-center">
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
          <img src="/lover.png" alt="favorite icon" width={30} />
        ) : (
          <img src="/heart.png" alt="favorite icon" width={30} />
        )}
      </span>

      <div className="flex justify-center items-center w-full overflow-auto">
        <img
          src={meal.strMealThumb}
          alt="meal picture"
          width={400}
          className="border-2 border-black rounded-lg"
        />
      </div>

      <div className="w-full p-4 rounded-lg flex flex-col md:flex-row items-center justify-center mt-6">
        <div className="w-1/2  rounded-lg p-6  mr-6 md:w-1/2">
          <h2 className="text-xl font-bold mt-2 mb-4 mr-20 text-center">
            Ingredients:
          </h2>
          <div className="flex flex-wrap justify-between">
          {meal.ingredients && meal.ingredients.map((ingredient, index) => (
  <div key={index} className="w-1/2">
    <ul className="space-y-2">
      <li className="flex items-center ml-6 text-lg">
        {ingredient}
      </li>
    </ul>
  </div>
))}

          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mt-4 md:mt-2">Instructions:</h2>
          {/* Chunk instructions into groups of 3 and create a <p> element for each group */}
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
