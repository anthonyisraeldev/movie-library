import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MoviesContextProvider from './context/MoviesContext';
import MovieDetailContextProvider from './context/MovieDetailContext';
import RecentMoviesContextProvider from './context/RecentMoviesContext';
import SearchMoviesContextProvider from './context/SearchMoviesContext';
import Loading from './components/Loading';

// Pages
import Header from './components/Header'
import Error404 from './pages/Error404';
import Footer from './components/Footer/Footer';

const Home = lazy(() => import('./pages/Home'))
const RecentMovies = lazy(() => import('./pages/RecentMovies'))
const SearchMovies = lazy(() => import('./pages/SearchMovies'))
const MovieDetail = lazy(() => import('./pages/MovieDetail/MovieDetail'))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Suspense fallback={ (<Loading/>) }>
          <Switch>
            <Route exact path='/'>
              <MoviesContextProvider>
                <Home />
              </MoviesContextProvider>
            </Route>
            <Route path='/peliculas-recientes'>
              <RecentMoviesContextProvider>
                <RecentMovies />
              </RecentMoviesContextProvider>
            </Route>
            <Route path='/buscar-peliculas'>
              <SearchMoviesContextProvider>
                <SearchMovies />
              </SearchMoviesContextProvider>
            </Route>
            <Route path='/movie/:id' exact >
              <MovieDetailContextProvider>
                <MovieDetail />
              </MovieDetailContextProvider>
            </Route>
            <Route path='*' exact component={ Error404 } />
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
