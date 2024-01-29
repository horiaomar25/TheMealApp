import React, { useState } from "react";
import SearchInput from "./SearchInput";

const Hero = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <section className="border m-6 ">
      <div className="h-96 p-30 flex justify-center">
        <SearchInput setSearchResults={setSearchResults} />
      </div>

      <section className="border w-96 text-center">
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((meal) => (
              <li key={meal.idMeal}>
                {meal.strMeal}
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};

export default Hero;
