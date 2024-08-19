// MealGrid.jsx
import React from "react";
import MealCard from "./MealCard";

const MealGrid = ({ meals, fetchMealDetails }) => {
  return (
    <section className="m-10 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-yellow-500">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} fetchMealDetails={fetchMealDetails} />
      ))}
    </section>
  );
};

export default MealGrid;