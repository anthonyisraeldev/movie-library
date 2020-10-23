import React, { useContext } from 'react'
import { MovieDetailContext } from '../../context/MovieDetailContext';
import Actor from '../Actor/Actor';
import Slider from "react-slick";
import { settingsCastMovie } from '../../utils/slickCarousel'

import './CastMovie.scss';

const CastMovie = () => {
  const { castMovie } = useContext(MovieDetailContext);
  return (
    <div className="cast-movie">
      <h2 className="cast-movie__main-title">Actores:</h2>
      <Slider {...settingsCastMovie} className="slider-cast-movie">
        {castMovie.map(item => (
          <Actor key={item.id} actor={item}/>
        ))}
      </Slider>
    </div>
  )
}
CastMovie.displayName= "CastMovie";

export default CastMovie
