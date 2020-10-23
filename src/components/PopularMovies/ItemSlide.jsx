import React from 'react';
import { Link } from 'react-router-dom';
import star from '../../assets/star.svg';

const ItemSlide = ({ movie }) => {
  const { backdrop_path, title, release_date, vote_average, id } = movie;
  const backdropPath = `https://image.tmdb.org/t/p/w500/${ backdrop_path }`;
  return (
    <div>
      <div className="slide-popular-movie" style={{ backgroundImage: `url(${ backdropPath })` }}>
        <h2 className="slide-popular-movie__title">{ title }</h2>
        <h3 className="slide-popular-movie__date">Fecha lanzamiento: { release_date }</h3>
        <h4 className="slide-popular-movie__puntuation">
          Puntuación: <img src={ star } className="slide-popular-movie__star-icon" alt="" />
          <span>{ vote_average }/10</span>
        </h4>
        <div className="slide-popular-movie__box-btn">
          <Link to={`/movie/${ id }`} className="slide-popular-movie__btn" title={ title }>
            Ver más
          </Link>
        </div>
      </div>
    </div>
  )
}
ItemSlide.displayName = "ItemSlide";

export default ItemSlide
