import React from 'react';
import Slider from "react-slick";
import ItemSlide from './ItemSlide';
import { settingsNewMovies } from '../../utils/slickCarousel'

import './SliderMovies.scss';

const SliderMovies = ({ newMovies }) => {
  return (
    <div className="slider-hero-home">
      <Slider {...settingsNewMovies} className="slider-home">
        { newMovies.map(movie => (
          <ItemSlide key={ movie.id } movie={ movie } />
        ))}
      </Slider>
    </div>
  )
}
SliderMovies.displayName = "SliderMovies";

export default SliderMovies
