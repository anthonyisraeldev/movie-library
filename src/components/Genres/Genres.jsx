import React from 'react';
import Chip from '@material-ui/core/Chip';
import './genres.scss';

const Genres = ({ genres }) => {
  const { name } = genres

  return (
    <Chip className="genre-box" label={ name } />
  )
}
Genres.displayName= "Genres";

export default Genres
