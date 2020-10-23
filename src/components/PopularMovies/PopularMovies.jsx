import React from 'react';
import Slider from "react-slick";
import { settingsPopularMovies } from '../../utils/slickCarousel'

import './PopularMovies.scss';
import ItemSlide from './ItemSlide';

const PopularMovies = ({ popularMovies }) => {
  return (
    <div className="container-popular-movies">
      <h2 className="general-title">
        Películas Populares
      </h2>
      <Slider {...settingsPopularMovies} className="slider-popular-movies">
        {popularMovies.map(movie => (
          <ItemSlide key={movie.id} movie={movie}/>
        ))}
      </Slider>
    </div>
  )
}
PopularMovies.displayName = "PopularMovies";

export default PopularMovies
