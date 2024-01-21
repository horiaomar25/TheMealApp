import React, { useState, useEffect } from "react";

const MealList = ({ selectedCategory }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!visible);
  };

  /* A fetch request to TheMealAPI to retrieve meals carry the same category as the category clicked on.  */
  const fetchMeals = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
      );

      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      // Parse the data into a json response
      const data = await response.json();
      // When a new category clicked, the state changes and so the meals are rendered to the screen.
      setMeals(data.meals);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  /* This fetch request is looking meal instructions and ingredients up by id. I choose to this because when you click on the 
  category it also shows you the name and picture of the meal. I want to get more detail so I decided to a fetch request to match the id of the meal
   to get more info when you click on it. */
  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );

      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      // Parsed JSON data
      const data = await response.json();
      // meals is an state variable that is holding an array of meals.
      // mealDetails is a object that is holding an array of meals
      // mealDetails now hold the information for the first meal in the object alongside all it's data.
      const mealDetails = data.meals[0];

      /* Intializes an empty array called ingredients to store details about the indegrients of the meal.*/
      const ingredients = [];
      /* This is looping looking for ingredients. It's assuming a meal won't have more than 20 ingredients. A safe number to pick. */
      // starting the loop variable from 0 will not allow me to render the ingredient. They appear when I start from 1.
      // loop increments by 1.
      for (let i = 1; i <= 20; i++) {
        /* The object mealDetail is holding arrays with meal ingredient and instructions. 
           The use of brack notation is used to access the ingredients and measure of the particular object of array and turning 
            in a string that can be displayed using string literal. */
        const ingredient = mealDetails[`strIngredient${i}`];
        const measure = mealDetails[`strMeasure${i}`];

        /* Checks if the ingredient is truthy and if its trimmed version is not an empty string. 
            Ensures that empty string is not considered. */
        if (ingredient && ingredient.trim() !== "") {
          // If ingredient is truthy then it will be pushed to the ingredient array that was initialized on line 43.
          ingredients.push(`${measure} ${ingredient}`);
        } else {
          // If ingredient is false/empty string, the loop will exit if there are more than 20 ingredient.
          break;
        }
      }

      /* Takes the selectedMeal state variable which was initalized as null. The spread operator adds the mealDetails
         object and the ingredient array. The loop stops either when there are no more ingredients or when an empty ingredient is encountered. */
      setSelectedMeal({
        ...mealDetails,
        ingredients,
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  /* checks whether selectedCategory has a truthy value. fetchMeal function only runs if 
     selectedCategory has a value. Will then fetch meals based on the selected Category. useEffect
     will only run when the selectedCategory changes. 
      */
  useEffect(() => {
    if (selectedCategory) {
      fetchMeals();
    }
  }, [selectedCategory]);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedMeals = chunkArray(meals, 3);

  return (
    <>
      {visible ? (
        <section className="m-6  ">
          {chunkedMeals.map((row, rowIndex) => (
            <div key={rowIndex} className="flex  ">
              {row.map((meal) => (
                <div
                  key={meal.idMeal}
                  className="border rounded-lg w-1/2 m-6 flex flex-col p-6 justify-center items-center cursor-pointer md:w-full sm:w-full hover:shadow-nav-shadow"
                  onClick={() => {
                    fetchMealDetails(meal.idMeal);
                    handleClick(); // Hide the meal list after selecting a meal
                  }}
                >
                  <img src={meal.strMealThumb} alt="meal picture" width={200} />
                  <p className="mt-4 font-poppins">{meal.strMeal}</p>
                </div>
              ))}
            </div>
          ))}
        </section>
      ) : (
        selectedMeal && (
          <section className="m-6 border ">
            <div>
              <p className="font-poppins text-lg text-center font-semibold mb-2">
                {selectedMeal.strMeal}
              </p>
              <div className="flex flex-row border  justify-center items-center">
                <img
                  src={selectedMeal.strMealThumb}
                  alt="meal picture"
                  className="border-2 m-10"
                  width={300}
                />
              
                <div className="grid grid-cols-2 w-1/2 text-center p-6 font-poppins">  
                <h2 className="font-poppins text-underline ">Ingredients: </h2>
                  {/* Map through ingredients and create a <p> element for each */}
                  {selectedMeal.ingredients.map((ingredient, index) => (
                    <p key={index} className="font-poppins leading-loose">
                      {ingredient}
                    </p>
                  ))}
                </div>
              </div>
              <p className="m-6 whitespace-pre-line">
                <p className="font-bold font-poppins text-center">
                  Instructions:
                </p>
                {selectedMeal.strInstructions
                  .split(".")
                  .map((sentence, index, array) => (
                    <span key={index} className="font-poppins leading-loose ">
                      {sentence.trim()}
                      {index !== array.length - 1 && "."}
                      <br />
                    </span>
                  ))}
              </p>
            </div>
          </section>
        )
      )}
    </>
  );
};
export default MealList;
