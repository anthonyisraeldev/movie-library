import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import { SearchMoviesContext } from '../../context/SearchMoviesContext';
import ResultshMovieSearch from '../../components/ResultsSearchMovie/ResultshMovieSearch';

import './SearchMovies.scss';
import banner from '../../assets/banner-search.jpg';

const SearchMovies = () => {
  const { search, setSearch, searchMovies } = useContext(SearchMoviesContext);

  return (
    <div>
      <div style={{ backgroundImage: `url(${ banner })` }} className="banner-search-movies" />
      <div className="content-box">
        <Container>
          <h1 className="general-title">Buscar películas</h1>
          <form  onSubmit={e => { e.preventDefault(); }}>
            <input
              placeholder="Buscar película..."
              className="form-search__input"
              onChange={(e) => setSearch(e.target.value)}
              value={ search }
            />
          </form>
          <ResultshMovieSearch search={ search } searchMovies={ searchMovies }/>
        </Container>
      </div>
    </div>
  )
}
SearchMovies.displayName = "SearchMovies";

export default SearchMovies
