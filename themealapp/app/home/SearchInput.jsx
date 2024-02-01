import { useState } from "react";

const SearchInput = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data.meals); // Assuming data structure has 'meals' key
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-row justify-center items-center sm:w-auto">
  <form onSubmit={handleFormSubmit} className="flex flex-row items-center">
    <input
      type="search"
      id="search"
      className=" bg-white font-poppins relative  w-96 m-3 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-full "
      placeholder="Search"
      value={searchTerm}
      onChange={handleInputChange}
      required
    />
    <button
      type="submit"
      className="font-poppins p-4 bg-orange text-white rounded-lg md:w-1/3"
      disabled={loading}
    >
      {loading ? 'Searching...' : 'Search'}
    </button>
  </form>
  {error && <p>Error: {error}</p>}
</section>

  );
};

export default SearchInput;


