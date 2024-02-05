import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

const MealList = ({ selectedCategory }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

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

      const data = await response.json();
      const mealDetails = data.meals[0];

      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        const measure = mealDetails[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
          ingredients.push(`${measure} ${ingredient}`);
        } else {
          break;
        }
      }

      setSelectedMeal({
        ...mealDetails,
        ingredients,
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchMeals();
    }
  }, [selectedCategory]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMeal(null);
  };

  return (
    <>
      {!selectedMeal && (
        <section className="m-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="border border-black hover:shadow-nav-shadow hover:bg-orange flex flex-col p-4 justify-center items-center cursor-pointer rounded-lg"
              onClick={() => fetchMealDetails(meal.idMeal)}
            >
              <img
                src={meal.strMealThumb}
                alt="meal picture"
              
                className="mb-4 w-full h-48 object-cover rounded-lg"
              />
              <p className="text-lg font-bold font-poppins">{meal.strMeal}</p>
            </div>
          ))}
        </section>
      )}

      {isModalOpen && selectedMeal && (
        <RecipeCard meal={selectedMeal} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default MealList;
