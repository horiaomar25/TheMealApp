import React, { useState } from "react";
import SearchInput from "./SearchInput";
import RecipeCard from "../Categories/RecipeCard"; // Import the RecipeCard component

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const searchArray = (array, chunkSize) => {
    const search = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      search.push(array.slice(i, i + chunkSize));
    }
    return search;
  };

  const chunkedMeals = searchArray(searchResults, 3);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <>
      <section className="border border-black rounded-md m-4 bg-orange">
        <div className="h-96 p-30 flex justify-center">
          <SearchInput setSearchResults={setSearchResults} />
        </div>
      </section>

      {/* Conditionally render RecipeCard if selectedMeal is not null */}
      {selectedMeal && (
        <RecipeCard
          meal={selectedMeal}
          onClose={() => setSelectedMeal(null)}
        />
      )}

      {/* Render search results */}
      {!selectedMeal && searchResults.length > 0 && (
        <section className="m-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {chunkedMeals.map((row, rowIndex) => (
            <div key={rowIndex} className="space-y-4">
              {row.map((meal) => (
                <div
                  key={meal.idMeal}
                  className="border border-black hover:bg-orange flex flex-col p-4 justify-center items-center cursor-pointer rounded-lg"
                  onClick={() => handleMealClick(meal)}
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    width={300}
                    className="mb-4 w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-lg font-bold font-poppins">
                    {meal.strMeal}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default SearchResults;



