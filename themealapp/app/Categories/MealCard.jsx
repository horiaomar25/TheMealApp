import React from 'react'
import Image from "next/image";

const MealCard = ({ meal, fetchMealDetails }) => {
    return (
      <div
        key={meal.idMeal}
        className="border border-black hover:shadow-nav-shadow hover:bg-orange flex flex-col p-4 justify-center items-center cursor-pointer rounded-lg"
        onClick={() => fetchMealDetails(meal.idMeal)}
      >
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={300}
          height={300}
          className="mb-4 w-full h-48 object-cover rounded-lg"
        />
        <p className="text-lg font-bold font-poppins text-black">{meal.strMeal}</p>
      </div>
    );
  };

export default MealCard