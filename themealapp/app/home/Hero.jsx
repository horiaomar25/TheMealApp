import React, { useState } from "react";
import SearchInput from "./SearchInput";


const Hero = () => {
  const [searchResults, setSearchResults] = useState([]);

  const searchArray = (array, chunkSize) => {
    const search = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      search.push(array.slice(i, i + chunkSize));
    }
    return search;
  };

  const chunkedMeals = searchArray(searchResults, 3); // Use searchResults here

  return (
    <section className="border border-black rounded-md m-4 ">
      <div className="h-96 p-30 flex justify-center ">
        <SearchInput setSearchResults={setSearchResults} />
      </div>
 

      <section className="  flex flex-row w-full justify-center items-center text-center font-poppins">
  {searchResults.length > 0 && (
    <ul>
      {chunkedMeals.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((meal) => (
            <li
              key={meal.idMeal}
              className="border hover:shadow-nav-shadow m-4 flex flex-col p-4 justify-center items-center cursor-pointer rounded-lg"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={300}
                className="rounded-lg mb-2"
              />
              <p className="text-xl font-poppins">{meal.strMeal}</p>
              
            </li>
           
          ))}
        </div>
      ))}
    </ul>
  )}
</section>

    </section>
  );
};

export default Hero;
