import React, { createContext, useState, useEffect } from 'react';
import { paginationMovieGet } from '../constants'

export const RecentMoviesContext = createContext();

const RecentMoviesContextProvider = ({ children }) => {

  const [ doneRecentMovies, setDoneRecentMovies ] = useState(true);
  const [recentMovies, setRecentMovies ] = useState([]);
  const [page, setPage] = useState(1);
  const [ totalPages, setTotalPages ] = useState(null);

   // New movies
   useEffect(() => {
     const getNewMovies = async() => {
       try {
         const res = await fetch(paginationMovieGet(page));
         const data = await res.json();
         setRecentMovies(data.results);
         setTotalPages(data.total_pages);
         setDoneRecentMovies(false);
       } catch (err) {
         console.log(`Error in getNewMovies: ${err.message}`);
         setDoneRecentMovies(false);
       }
     }
     getNewMovies()
   }, [page]);

  return(
    <RecentMoviesContext.Provider value={{
      recentMovies,
      doneRecentMovies,
      page,
      setPage,
      totalPages
    }}>
      { children }
    </RecentMoviesContext.Provider>
  )
}

export default RecentMoviesContextProvider