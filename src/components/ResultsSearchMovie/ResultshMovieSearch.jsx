import React from 'react';
import { Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import MovieCard from '../MovieCard';

const ResultshMovieSearch = ({ search, searchMovies }) => {
  return (
    <div>
      {search.length > 0 ?
        (
          searchMovies && (
            <Grid container spacing={ 1 }>
              {searchMovies.map(movie => (
                <MovieCard key={ movie.id } movie={ movie } />
              ))}
            </Grid>
          )
        ) : ''
      }
      {!searchMovies.length ?
        (
          <Alert severity="info" className="alert-no-result">
          <AlertTitle>Info</AlertTitle>
          Ups! <b>No hay resultados aún,</b> o la <b>película que buscas no se encuentra...</b>
          </Alert>
        ) : ''
      }
    </div>
  )
}
ResultshMovieSearch.displayName = "ResultshMovieSearch";

export default ResultshMovieSearch
