import React, { createContext, useState, useEffect } from 'react';
import { detailMovieGet, similarMoviesGet, videoMovieGet, castMovieGet } from '../constants';
import { useParams } from 'react-router-dom';

export const MovieDetailContext = createContext();

const MovieDetailContextProvider = ({ children }) => {

  const [ doneMovie, setDoneMovie ] = useState(true);
  const [ doneSimilarMovie, setDoneSimilarMovie ] = useState(true);
  const [ doneVideoMovie, setDoneVideoMovie ] = useState(true);
  const [ movieDetail, setMovieDetail ] = useState([]);
  const [ simialarMovies, setSimialarMovies ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ video, setVideo ] = useState([]);
  const [ castMovie, setCastMovie ] = useState([]);

   // Get the id passed by parameter in ulr
   const { id } = useParams();

   // Movie detail
   useEffect(() => {
    const getMovieDetail = async() => {
      try {
        const res = await fetch(detailMovieGet(id));
        const data = await res.json();
        setMovieDetail(data);
        setGenres(data.genres);
        setDoneMovie(false);
      } catch (err) {
        console.log(`Error in getMovieDetail: ${err.message}`);
        setDoneMovie(false);
      }
    }
    if(id) getMovieDetail()
  }, [id]);

  // Cast movie
  useEffect(() => {
    const getCastMovie = async() => {
      try {
        const res = await fetch(castMovieGet(id));
        const data = await res.json();
        setCastMovie(data.cast);
      } catch (err) {
        console.log(`Error in getCastMovie: ${err.message}`);
      }
    }
    if(id) getCastMovie()
  }, [id]);

   // Similar movies
   useEffect(() => {
    const getSimilarMovies = async() => {
      try {
        const res = await fetch(similarMoviesGet(id));
        const data = await res.json();
        setSimialarMovies(data.results);
        setDoneSimilarMovie(false);
      } catch (err) {
        console.log(`Error in similarMoviesGet: ${err.message}`);
        setDoneSimilarMovie(false);
      }
    }
    if(id) getSimilarMovies()
  }, [id]);

  // video movie
  useEffect(() => {
    const getVideoMovie = async() => {
      try {
        const res =  await fetch(videoMovieGet(id));
        const data = await res.json();
        setVideo(data.results);
        setDoneVideoMovie(false);
      } catch (err) {
        console.log(`Error in getVideoMovie: ${err.message}`);
        setDoneVideoMovie(false);
      }
    }
    if(id) getVideoMovie()
  }, [id]);

  return(
    <MovieDetailContext.Provider value={{
      movieDetail,
      genres,
      simialarMovies,
      video,
      doneMovie,
      doneSimilarMovie,
      doneVideoMovie,
      castMovie
    }}>
      { children }
    </MovieDetailContext.Provider>
  )
}

export default MovieDetailContextProvider