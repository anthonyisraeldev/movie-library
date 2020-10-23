import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Genres from '../Genres/Genres';
import SimilarMovies from '../SimilarMovies/SimilarMovies';
import VideoButton from '../VideoButton/VideoButton';
import CastMovie from '../CastMovie';

import nullPosterMovie from '../../assets/nullPosterMovie.png';
import './MovieDetailContent.scss';

const MovieDetailContent = ({ movieDetail, genres, simialarMovies, video, castMovie }) => {
  const { poster_path, overview, title } = movieDetail;
  const posterMovie = `https://image.tmdb.org/t/p/w500${ poster_path }`;
  const nullPhoto = `https://image.tmdb.org/t/p/w500null`;

  return (
    <div>
      <Container>
        <Grid container spacing={1} className="movie-detail">
          <Grid xs={12} sm={4} md={4} xl={4} item className="movie-detail__grid-img">
            <Box border={0} m={0} p={2} >
              <img src={`${posterMovie !== nullPhoto ? posterMovie : nullPosterMovie}`} className="movie-detail__img" alt={ title } />
            </Box>
          </Grid>
          <Grid xs={12} sm={8} md={8} xl={6} item>
            <Box border={0} m={0} p={2} className="p-relative" >
              { video.length > 0 ? (<VideoButton video ={ video }/>) : '' }
              <p className="movie-detail__overview">
                { overview }
              </p>

              <h2>Géneros:</h2>
              {genres.map(item => (
                <Genres key={item.id} genres={item}/>
              ))}

              { castMovie.length > 0 ? (<CastMovie/>) : '' }

              <div>
                <Link to="/" className="movie-detail__btn-back" title="Volver">
                  Volver
                </Link>
              </div>
            </Box>
          </Grid>
        </Grid>
        {
          simialarMovies.length > 0 ? (
            <SimilarMovies simialarMovies={ simialarMovies }/>
          ) : ''
        }
      </Container>
    </div>
  )
}
MovieDetailContent.displayName = "MovieDetailContent";

export default MovieDetailContent
