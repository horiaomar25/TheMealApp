import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import RecipeCard from "../Categories/RecipeCard"; // Import the RecipeCard component

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState(""); // State to store the search value
  const mealsPerPage = 9; // Fixed number of meals per page

  useEffect(() => {
    setCurrentPage(1); // Reset current page whenever search results change
  }, [searchResults]);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderMealCards = () => {
    // Calculate the index of the first and last meal to display on the current page
    const indexOfLastMeal = currentPage * mealsPerPage;
    const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
    // Get the subset of meals for the current page
    const mealsForPage = searchResults.slice(indexOfFirstMeal, indexOfLastMeal);
  
    return mealsForPage.map((meal) => (
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
        <p className="text-lg font-bold font-poppins">{meal.strMeal}</p>
      </div>
    ));
  };
  

  return (
    <>
      <section className="border border-black rounded-md m-4 bg-orange">
        <div className="h-96 p-30 flex justify-center">
          <SearchInput setSearchResults={setSearchResults} setSearchValue={setSearchValue} /> {/* Pass setSearchValue */}
        </div>
        {searchValue && <p className="text-white text-center">Search value: {searchValue}</p>} {/* Render search value */}
      </section>
      
      {searchResults.length > mealsPerPage && (
        <div className="flex justify-center items-center">
          <h2></h2>

          {Array.from({ length: Math.ceil(searchResults.length / mealsPerPage) }).map(
            (_, index) => (
              <button
                key={index}
               className={`text-xl mr-2 border-2 border-black rounded-full p-2 mb-6 ${currentPage === index + 1 ? 'bg-orange text-white' : ''}`} // Change background color and text color if selected
                onClick={() => paginate(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      )}

      {selectedMeal && (
        <RecipeCard meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}

      {!selectedMeal && searchResults.length > 0 && (
        <section className="m-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {renderMealCards()}
        </section>
      )}

 
    </>
  );
};

export default SearchResults;

