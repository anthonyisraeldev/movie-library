import React, { createContext, useState, useEffect } from 'react';
import { searchMovieGet } from '../constants';

export const SearchMoviesContext = createContext();

const SearchMoviesContextProvider = ({ children }) => {

  const [ searchMovies, setSearchMovies ] = useState([]);
  const [ search, setSearch ] = useState("");

  // Sarch movies
  useEffect(() => {
    const getSearchMovies = async() => {
      try {
        const res = await fetch(searchMovieGet(search));
        const data = await res.json();
        setSearchMovies(data.results);
      } catch (err) {
        console.log(`Error in getSearchMovies: ${err.message}`);
      }
    }
    getSearchMovies()
  }, [search]);

  return (
    <SearchMoviesContext.Provider value={{ search, setSearch, searchMovies  }}>
      { children }
    </SearchMoviesContext.Provider>
  )
}

export default SearchMoviesContextProvider

