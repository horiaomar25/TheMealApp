import React from "react";

const SearchInput = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <input
          type="search"
          id="search"
          className=" font-poppins relative w-96 m-3 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-1/2 md:w-11/12"
          placeholder="Search"
          required
        />
        <button className=" font-poppins top-0 right-0  p-4 bg-blue-500 text-white rounded-lg md:w-1/3">
          Search
        </button>
      </section>
    </>
  );
};

export default SearchInput;
