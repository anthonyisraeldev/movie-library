import React, { Fragment, useContext } from 'react';
import { MovieDetailContext } from '../../context/MovieDetailContext';
import Container from '@material-ui/core/Container';
import Rating from '@material-ui/lab/Rating';
import MovieDetailContent from '../../components/MovieDetailContent/MovieDetailContent';
import Loading from '../../components/Loading';

import './MovieDetail.scss';

const MovieDetail = () => {
  const { movieDetail, genres, simialarMovies, video, doneMovie, doneSimilarMovie, doneVideoMovie, castMovie} = useContext(MovieDetailContext);
  const { backdrop_path, title, release_date, vote_average } = movieDetail;

  if (doneMovie || doneSimilarMovie || doneVideoMovie) {
    return(
      <Loading/>
    )
  }

  const backdropPath = `https://image.tmdb.org/t/p/w1280/${ backdrop_path }`;

  return (
    <Fragment>
      <div className="banner" style={{ backgroundImage: `url(${ backdropPath })` }}>
        <Container className="h-100">
          <div className="banner__description">
            <h2 className="banner__title">{ title }</h2>
            <h3 className="banner__release-date">Lanzamiento: <span>{ release_date }</span></h3>
            <h4 className="banner__average">Puntuación:
              <Rating
                name="half-rating-read"
                defaultValue={0}
                max={5}
                min={0}
                value={(vote_average) * 0.5 }
                readOnly
              />
              <span className="total">{ vote_average }</span>
            </h4>
          </div>
        </Container>
      </div>

      <div className="content-box">
        <Container>
          <MovieDetailContent movieDetail={ movieDetail } genres={ genres } simialarMovies={ simialarMovies }  video={ video } castMovie={ castMovie } />
        </Container>
      </div>
    </Fragment>
  )
}
MovieDetail.displayName = "MovieDetail";

export default MovieDetail
