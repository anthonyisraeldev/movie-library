import React, { useContext } from 'react';
import { RecentMoviesContext } from '../../context/RecentMoviesContext';
import banner from '../../assets/banner2.png';
import { Container, Grid } from '@material-ui/core';
import PaginationMovies from '../../components/PaginationMovies/PaginationMovies';
import MovieCard from '../../components/MovieCard';
import Loading from '../../components/Loading';

import './RecentMovies.scss';

const RecentMovies = () => {
  const { recentMovies, doneRecentMovies } = useContext(RecentMoviesContext);

  if (doneRecentMovies) {
    return(
      <Loading/>
    )
  }
  return (
    <div>
      <div style={{ backgroundImage: `url(${ banner })` }} className="banner-recent-movies" />
      <div className="content-box">
        <Container>
          <h1 className="general-title">Películas recientes</h1>
          <Grid container spacing={ 1 }>
            {recentMovies.map(movie => (
              <MovieCard key={ movie.id } movie={ movie } />
            ))}
          </Grid>
          <PaginationMovies/>
        </Container>
      </div>
    </div>
  )
}
RecentMovies.displayName = "RecentMovies";

export default RecentMovies
