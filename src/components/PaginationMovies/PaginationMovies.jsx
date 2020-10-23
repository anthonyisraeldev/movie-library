import React, { useContext } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { RecentMoviesContext } from '../../context/RecentMoviesContext';

import './PaginationMovies.scss';

const PaginationMovies = () => {
  const { page, setPage, totalPages } = useContext(RecentMoviesContext);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container-pagination">
      <Pagination
        className="pagination-movies"
        count={ totalPages }
        page={ page }
        onChange={ handleChange }
        color="primary"
      />
    </div>
  )
}
PaginationMovies.displayName = "PaginationMovies";

export default PaginationMovies
