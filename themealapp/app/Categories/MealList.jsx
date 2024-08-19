/* eslint-disable react-hooks/exhaustive-deps */
// MealList.jsx
import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Pagination from "./Pagination";
import MealGrid from "./MealGrid";

const MealList = ({ selectedCategory }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage] = useState(9);
  const [selectedPage, setSelectedPage] = useState(1);

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

  useEffect(() => {
    if (selectedCategory) {
      fetchMeals();
    }
  }, [selectedCategory]);

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

  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedPage(pageNumber);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMeal(null);
  };

  return (
    <section className="bg-yellow">
      {!selectedMeal && (
        <>
          <Pagination
            mealsPerPage={mealsPerPage}
            totalMeals={meals.length}
            paginate={paginate}
            selectedPage={selectedPage}
          />
          <p className="font-poppins text-4xl font-bold m-4 ml-10 text-black">
            Category Selected: {selectedCategory}
          </p>
        </>
      )}

      {!selectedMeal && (
        <MealGrid meals={currentMeals} fetchMealDetails={fetchMealDetails} />
      )}

      {isModalOpen && selectedMeal && (
        <RecipeCard meal={selectedMeal} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default MealList;