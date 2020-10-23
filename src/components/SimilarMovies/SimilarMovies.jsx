import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import './SimilarMovies.scss';
import MovieCard from '../MovieCard';

const SimilarMovies = ({ simialarMovies }) => {
  return (
    <Fragment>
       <h2 className="general-title2">Similares</h2>
      <Grid container  spacing={1}>
        {simialarMovies.map(movie =>(
          <MovieCard key={ movie.id } movie={ movie }/>
        ))}
      </Grid>
    </Fragment>
  )
}
SimilarMovies.displayName = "SimilarMovies";

export default SimilarMovies
