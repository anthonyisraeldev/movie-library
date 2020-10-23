import React, { createContext, useState, useEffect } from 'react';
import { newMoviesGet, popularMoviesGet, ratedMoviesGet, upcomingMoviesGet } from '../constants';

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {

  const [ doneNewMovies, setDoneNewMovies ] = useState(true);
  const [ donePopularMovies, setDonePopularMovies ] = useState(true);
  const [ doneRatedMovies, setDoneRatedMovies ] = useState(true);
  const [ doneUpcomingMovies, setDoneUpcomingMovies ] = useState(true);

  const [ newMovies, setNewMovies ] = useState([]);
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [ ratedMovies, setRatedMovies ] = useState([]);
  const [ upcomingMovies, setUpcomingMovies ] = useState([]);

  // New movies
  useEffect(() => {
    const getNewMovies = async() => {
      try {
        const res = await fetch(newMoviesGet());
        const data = await res.json();
        setNewMovies(data.results);
        setDoneNewMovies(false);
      } catch (err) {
        console.log(`Error in getNewMovies: ${err.message}`);
        setDoneNewMovies(false);
      }
    }
    getNewMovies()
  }, []);

  // Popular movies
  useEffect(() => {
    const getPopularMovies = async() => {
      try {
        const res = await fetch(popularMoviesGet());
        const data = await res.json();
        setPopularMovies(data.results);
        setDonePopularMovies(false);
      } catch (err) {
        console.log(`Error in getPopularMovies: ${err.message}`);
        setDonePopularMovies(false);
      }
    }
    getPopularMovies()
  }, []);

  // Rated movies
  useEffect(() => {
    const getRatedMovies = async() => {
      try {
        const res = await fetch(ratedMoviesGet());
        const data = await res.json();
        setRatedMovies(data.results);
        setDoneRatedMovies(false);
      } catch (err) {
        console.log(`Error in getRatedMovies: ${err.message}`);
        setDoneRatedMovies(false);
      }
    }
    getRatedMovies()
  }, []);

  // Upcoming movies
  useEffect(() => {
    const getUpcomingMovies = async() => {
      try {
        const res = await fetch(upcomingMoviesGet());
        const data = await res.json();
        setUpcomingMovies(data.results);
        setDoneUpcomingMovies(false);
      } catch (err) {
        console.log(`Error in getUpcomingMovies: ${err.message}`);
        setDoneUpcomingMovies(false);
      }
    }
    getUpcomingMovies()
  }, []);

  return (
    <MoviesContext.Provider value={{
      newMovies,
      popularMovies,
      ratedMovies,
      upcomingMovies,
      doneNewMovies,
      donePopularMovies,
      doneRatedMovies,
      doneUpcomingMovies
    }}>
      { children }
    </MoviesContext.Provider>
  )
}

export default MoviesContextProvider

