import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import { MoviesContext } from '../../context/MoviesContext';
import SliderMovies from '../../components/SliderMovies';
import PopularMovies from '../../components/PopularMovies';
import TopRatedMovies from '../../components/TopRatedMovies';
import UpcomingMovies from '../../components/UpcomingMovies';
import Loading from '../../components/Loading';

const Home = () => {
  const { newMovies, doneNewMovies } = useContext(MoviesContext);
  const { popularMovies, donePopularMovies } = useContext(MoviesContext);
  const { ratedMovies, doneRatedMovies } = useContext(MoviesContext);
  const { upcomingMovies, doneUpcomingMovies } = useContext(MoviesContext);

  if (doneNewMovies || donePopularMovies || doneRatedMovies || doneUpcomingMovies ) {
    return(
      <Loading/>
    )
  }

  return (
    <div>
      <SliderMovies newMovies={ newMovies }/>
      <div className="content-box">
        <Container>
          <PopularMovies popularMovies= { popularMovies }/>
          <TopRatedMovies ratedMovies= { ratedMovies }/>
          <UpcomingMovies upcomingMovies= { upcomingMovies }/>
        </Container>
      </div>
    </div>
  )
}
Home.displayName = "Home";

export default Home
