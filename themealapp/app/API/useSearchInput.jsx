import { useState } from 'react';

const UserSearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
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
            setSearchResults(data.meals || []); // If 'meals' is null, set empty array
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

  

    return {
        searchTerm,
        searchResults,
        loading,
        error,
        handleInputChange,
        handleFormSubmit,
    };
}

export default UserSearchInput;
