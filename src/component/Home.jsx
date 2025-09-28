import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [movieAllData, setMovieAllData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('Avengers'); // Default movies
  const [isDataAvailable, setIsDataAvailable] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  // Fetch movies from OMDB API
  const getMovieData = async (page = 1) => {
    if (!searchValue) {
      setMovieAllData([]);
      setIsDataAvailable(true);
      setTotalResults(0);
      return;
    }

    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=392901a4&s=${searchValue}&page=${page}`
      );

      if (data?.Response === 'True') {
        setMovieAllData((prevData) =>
          page === 1 ? data.Search : [...prevData, ...data.Search]
        );
        setTotalResults(parseInt(data.totalResults, 10));
        setIsDataAvailable(true);
      } else {
        if (page === 1) setIsDataAvailable(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // Load default movies on app start
  useEffect(() => {
    getMovieData(1);
  }, []);

  // Update results when user searches
  useEffect(() => {
    if (searchValue) {
      setCurrentPage(1);
      getMovieData(1);
    }
  }, [searchValue]);

  // Update input state
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Search when user clicks button
  const handleSearch = () => {
    setSearchValue(inputValue.trim());
  };

  // Load more results
  const handleLoadMore = () => {
    setIsLoadingMore(true);
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    getMovieData(nextPage);
  };

  return (
    <div className="p-8 min-h-screen">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-center mb-6">
          <input
            type="text"
            className="flex-1 p-3 border rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Search here"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="bg-green-500 text-white rounded-r-lg px-4 py-3 hover:bg-green-600 transition duration-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {isDataAvailable ? (
          movieAllData.map((movie) => (
            <div
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              key={movie.imdbID}
            >
              <NavLink to={`/single/${movie.imdbID}`}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-[250px] object-cover transition-transform transform hover:scale-105"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {movie.Title}
                  </h2>
                  <p className="text-gray-800">Click to see more Details...</p>
                </div>
              </NavLink>
            </div>
          ))
        ) : (
          <h1 className="col-span-full text-center text-2xl text-gray-500">
            No results found
          </h1>
        )}
      </div>

      {/* Load More Button */}
      {isDataAvailable && movieAllData.length < totalResults && (
        <div className="text-center mt-6">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            onClick={handleLoadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
