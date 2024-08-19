import React from 'react'

const Pagination = ({ mealsPerPage, totalMeals, paginate, selectedPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalMeals / mealsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center items-center p-5 bgs-yellow">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`text-xl mr-2 border-2 border-black rounded-full p-2 mb-6 text-black ${selectedPage === number ? 'bg-orange text-white' : ''}`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

export default Pagination