import React, { useState, useEffect } from "react";

const RecipeCard = ({ meal, onClose }) => {
  return (
    <div className=" fixed top-0 left-0 w-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="border w-1/2 bg-white p-8 relative">
        <span className="absolute top-0 right-0 m-4 text-3xl cursor-pointer" onClick={onClose}>&times;</span>
        <img src={meal.strMealThumb} alt="meal picture"  width={200}/>
        <h1 className="text-2xl font-bold mt-4">{meal.strMeal}</h1>
        <h2 className="text-xl font-bold mt-2">Ingredients:</h2>
        <ul>
          {meal.ingredients.map((ingredient, index) => (
            <li key={index} className="list-disc ml-6">{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mt-4">Instructions:</h2>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
