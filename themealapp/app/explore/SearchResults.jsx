import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { Search } from "lucide-react";

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
      <section className="border border-black rounded-md m-4">
        <div className="h-96 p-30 flex justify-center">
          <SearchInput setSearchResults={setSearchResults} />
        </div>
      </section>
      {selectedMeal ? (
        <div className="flex flex-row w-full justify-center items-center text-center font-poppins">
          <div className="mt-4 p-4 border border-black rounded-md">
            <img
              src={selectedMeal.strMealThumb}
              alt={selectedMeal.strMeal}
              width={300}
              className="rounded-lg mb-2"
            />
            <h2 className="text-xl font-bold">{selectedMeal.strMeal}</h2>
            <p>{selectedMeal.strInstructions}</p>
            <h3 className="mt-2 font-bold">Ingredients:</h3>
            <ul>
              {Object.keys(selectedMeal)
                .filter((key) => key.includes("Ingredient") && selectedMeal[key])
                .map((key, index) => (
                  <li key={index}>{selectedMeal[key]}</li>
                ))}
            </ul>
            <button
              onClick={() => setSelectedMeal(null)}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              &times;
            </button>
          </div>
        </div>
      ) : (
        <section className="flex flex-row w-full justify-center items-center text-center font-poppins">
          {searchResults.length > 0 && (
            <ul>
              {chunkedMeals.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                  {row.map((meal) => (
                    <li
                      key={meal.idMeal}
                      className="border border-black hover:shadow-nav-shadow m-4 flex flex-col p-10 justify-center items-center cursor-pointer rounded-lg"
                      onClick={() => handleMealClick(meal)}
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
      )}
    </>
  );
};

export default SearchResults;



