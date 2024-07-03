"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

const FavouriteMeal = ({ meal, onClose }) => {
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

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-start mb-4">
        <button className="btn btn-secondary" onClick={onClose}> <Image src="/back-arrow.png" alt="arrow icon" width={30} height={100} /></button>
      </div>
      <div className="flex justify-center items-center mb-4">
        <Image
          src={meal.strMealThumb}
          alt="meal picture"
          width={400}
          height={100}
          className="border-2 border-black rounded-lg"
        />
      </div>
      <p className="font-poppins text-2xl font-bold mb-4 text-black text-center">{meal.strMeal}</p>

      <div className="w-full p-4 rounded-lg flex flex-col md:flex-row items-start justify-center">
        <div className="w-full md:w-1/2 rounded-lg p-6 mr-6 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4 text-black">Ingredients:</h2>
          <div className="flex flex-wrap justify-between">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="w-1/2">
                <ul className="space-y-2">
                  <li className="flex items-center text-lg text-black">{ingredient}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-4 md:mb-2 text-center text-black">Instructions:</h2>
          {Array.from(
            { length: Math.ceil(instructions.length / 3) },
            (v, i) => i
          ).map((index) => (
            <p key={index} className="mb-2 text-black">
              {instructions.slice(index * 3, index * 3 + 3).join(". ")}.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};


export default FavouriteMeal