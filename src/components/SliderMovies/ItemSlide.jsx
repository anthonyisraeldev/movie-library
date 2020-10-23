import React from 'react';
import { Link } from 'react-router-dom'

function ItemSlide({movie}){
  const { id, backdrop_path, title } = movie;
  const backdropPath = `https://image.tmdb.org/t/p/w1280/${ backdrop_path }`;

  return (
    <div>
      <div className="slide" style={{backgroundImage: `url(${backdropPath})`}}>
        <h2 className="slide__title">
          { title }
        </h2>
        <Link to={`/movie/${id}`} className="slide__btn-show-more">
          Ver más
        </Link>
      </div>
    </div>
  )
}
ItemSlide.displayName = 'ItemSlide';

export default ItemSlide
