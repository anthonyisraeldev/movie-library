import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import star from '../../assets/star.svg';
import './MovieCard.scss';

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, id } = movie;
  const posterMovie = `https://image.tmdb.org/t/p/w500${ poster_path }`;
  const nullPhoto = `https://image.tmdb.org/t/p/w500null`;

  const handlerClick = () => {
      window.scrollTo(0, 0);
  }

  return (
    <Grid xs={6} sm={4} md={3} xl={3} item>
      <Box border={0} m={0} p={2} className={`box-movie ${posterMovie !== nullPhoto ? '' : 'no-image'}`}  style={{ backgroundImage: `url(${ posterMovie })` }}>
        <div className="box-movie__overlay">
          <p className="box-movie__circle-star">
            <img src={ star } className="box-movie__star" alt="" /> { vote_average }
          </p>
          <Link to={`/movie/${ id }`} onClick={ handlerClick } className="box-movie__title" title={ title }>
            <p>
              { title }
            </p>
          </Link>
          <Link to={`/movie/${ id }`} onClick={ handlerClick } className="box-movie__btn" title={ title }>
            Ver más
          </Link>
        </div>
      </Box>
      <Link to={`/movie/${ id }`} onClick={ handlerClick } className="box-movie__title cutted-text" title={ title }>
        <p>
          { title }
        </p>
      </Link>
    </Grid>
  )
}
MovieCard.displayName = "MovieCard";

export default MovieCard
