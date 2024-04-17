import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Image from "next/image";

const MealList = ({ selectedCategory }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage] = useState(9); // Change this value based on your preference
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

  // Logic to get current meals based on pagination
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMeal(null);
  };

  return (
    <>
      {!selectedMeal && (
        <>
          <div className="flex justify-center items-center  ">
            {Array.from({ length: Math.ceil(meals.length / mealsPerPage) }).map(
              (item, index) => (
                <button
                  key={index}
                  className={`text-xl mr-2 border-2 border-black rounded-full p-2 mb-6  text-black ${selectedPage === index + 1 ? 'bg-orange text-white' : ''}`} // Change background color and text color if selected
                  onClick={() => {
                    setSelectedPage(index + 1); // Update the selected page
                    paginate(index + 1); // Call the paginate function with the selected page number
                  }}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
          <p className='font-poppins text-4xl font-bold m-4 ml-10 text-black'>Category Selected: {selectedCategory}</p>
        </>
      )}

      {!selectedMeal && (
        <section className="m-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {currentMeals.map((meal) => (
            <div
              key={meal.idMeal}
              className="border border-black hover:shadow-nav-shadow hover:bg-orange flex flex-col p-4 justify-center items-center cursor-pointer rounded-lg"
              onClick={() => fetchMealDetails(meal.idMeal)}
            >
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="mb-4 w-full h-48 object-cover rounded-lg"
              />
              <p className="text-lg font-bold font-poppins text-black">{meal.strMeal}</p>
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

