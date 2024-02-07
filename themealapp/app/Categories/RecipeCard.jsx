import React, { useState } from "react";

const RecipeCard = ({ meal, onClose }) => {
  // Initialize state to track checked ingredients
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  // Favourite toggle state
  const [isFavourite, setIsFavourite] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const handleFavourite = () => {
    if (isFavourite) {
      setFavourites(favourites.filter((f) => f.idMeal !== meal.idMeal));
    } else {
      setFavourites([...favourites, meal]);
    }
    setIsFavourite(!isFavourite);
  };

 console.log(favourites);
  // Split the instructions into an array of sentences
  const instructions = meal.strInstructions.split(".");

  // Toggle function to handle checkbox state changes
  const toggleIngredient = (index) => {
    if (checkedIngredients.includes(index)) {
      setCheckedIngredients(checkedIngredients.filter((i) => i !== index));
    } else {
      setCheckedIngredients([...checkedIngredients, index]);
    }
  };

  return (
    <div className="w-full bg-yellow p-8 relative flex flex-col justify-center items-center">
      <span
        className="absolute top-0 left-0 m-4 text-3xl cursor-pointer"
        onClick={onClose}
      >
        <img src="./back-arrow.png" alt="arrow icon" />
      </span>

      <span className="absolute top-0 right-0 m-4 text-3xl cursor-pointer" onClick={handleFavourite}>
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
        <div className="w-1/2 border-2 border-black rounded-lg p-6 bg-orange mr-6 md:w-1/2">
          <h2 className="text-xl font-bold mt-2 mb-2 text-center">
            Ingredients:
          </h2>
          <ul className="space-y-2">
            {meal.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center ml-6 text-xl">
                <input
                  type="checkbox"
                  id={`ingredient-${index}`}
                  checked={checkedIngredients.includes(index)}
                  onChange={() => toggleIngredient(index)}
                  className="w-5 h-5 border-2 border-black rounded-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                />
                <label
                  htmlFor={`ingredient-${index}`}
                  className={
                    checkedIngredients.includes(index)
                      ? "line-through ml-2"
                      : "ml-2"
                  }
                >
                  {ingredient}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mt-4 md:mt-2">Instructions:</h2>
          {/* Map through instructions and create a <p> element for each */}
          {instructions.map((sentence, index) => (
            <p key={index} className="mb-2">
              {sentence.trim()}.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
