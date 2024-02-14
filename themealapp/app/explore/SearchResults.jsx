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

  let sentences = selectedMeal ? selectedMeal.strInstructions.split(". ") : [];

  return (
    <>
      <section className="border border-black rounded-md m-4 bg-orange">
        <div className="h-96 p-30 flex justify-center">
          <SearchInput setSearchResults={setSearchResults} />
        </div>
      </section>

      {selectedMeal ? ( 
      <><div className="flex justify-center items-center w-full overflow-auto">
          <img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            width={300}
            className="border-2 border-black rounded-lg" />
        </div>
        <div className="flex flex-col w-full justify-center items-center text-center font-poppins ">


            <div className="w-full p-4 rounded-lg flex flex-row  md:flex-row items-center justify-center mt-6">
              <div className="w-1/2  rounded-lg p-6  mr-6 md:w-1/2 border border-black">
                <h2 className="text-xl font-bold">{selectedMeal.strMeal}</h2>
                <h3 className="mt-2 font-bold">Instructions:</h3>

                {Array.from(
                  {
                    length: Math.ceil(sentences.length / 3),
                  },
                  (v, i) => i
                ).map((index) => (
                  <p key={index} className="mb-2">
                    {sentences.slice(index * 3, index * 3 + 3).join(". ")}.
                  </p>
                ))}

                <h3 className="mt-2 font-bold">Ingredients:</h3>
                <ul>
                  {Object.keys(selectedMeal)
                    .filter(
                      (key) => key.includes("Ingredient") && selectedMeal[key]
                    )
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
          </div></>
      ) : (
        <section className="m-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {searchResults.length > 0 && (
            <>
              {chunkedMeals.map((row, rowIndex) => (
                <div key={rowIndex} className="space-y-4  ">
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
            </>
          )}
        </section>
      )}
    </>
  );
};

export default SearchResults;
