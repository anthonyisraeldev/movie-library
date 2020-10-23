import React from 'react';
import MovieCard from '../MovieCard';
import { Grid } from '@material-ui/core';

const TopRatedMovies = ({ ratedMovies }) => {
  return (
    <div>
      <h2 className="general-title">
        Top mejores calificadas
      </h2>
      <Grid container  spacing={1}>
        {ratedMovies.map(movie =>(
          <MovieCard key={ movie.id } movie={ movie }/>
        ))}
      </Grid>
    </div>
  )
}
TopRatedMovies.displayName = "TopRatedMovies";

export default TopRatedMovies
