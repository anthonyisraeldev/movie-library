import React from 'react';
import MovieCard from '../MovieCard';
import { Grid } from '@material-ui/core';

const UpcomingMovies = ({ upcomingMovies }) => {
  return (
    <div>
      <h2 className="general-title">
        Próximamente
      </h2>
      <Grid container  spacing={1}>
        {upcomingMovies.map(movie =>(
          <MovieCard key={ movie.id } movie={ movie }/>
        ))}
      </Grid>
    </div>
  )
}
UpcomingMovies.displayName = "UpcomingMovies";

export default UpcomingMovies
