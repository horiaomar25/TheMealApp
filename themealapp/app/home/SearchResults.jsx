const SearchResults = ({ searchResults }) => {
    if (searchResults.length === 0) {
      return <p>No results found.</p>;
    }

    console.log(searchResults);
  
    return (
      <ul>
        {searchResults.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    );
  };


export default SearchResults