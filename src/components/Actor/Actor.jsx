import React from 'react';
import noImg from '../../assets/no-image.jpg';

import './Actor.scss';

const Actor = ({ actor }) => {
  const { name, profile_path } = actor
  const profilePhoto = `https://image.tmdb.org/t/p/w500${ profile_path }`;
  const nullPhoto = `https://image.tmdb.org/t/p/w500null`;

  const  validateActorImg = () => {
    if (profilePhoto !== nullPhoto ) {
      return (
        <div style={{backgroundImage: `url(${ profilePhoto })`}} className="actor__img"></div>
      )
    } else {
      return (
        <div style={{backgroundImage: `url(${ noImg })`}} className="actor__img"></div>
      )
    }
  }
  return (
    <div className="actor">
      { validateActorImg() }
      <h2 className="actor__name">{ name }</h2>
    </div>
  )
}
Actor.displayName= "Actor";

export default Actor
