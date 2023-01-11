import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from '../../service/fetchMovies';

export default function MovieDetails() {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(res => {
        setMovieDetails(res);
      })
      .catch(err => console.log(err));
  }, [movieId]);
  return (
    <>
      <h1>Movie Details</h1>
      <Link to={location.state?.from ?? '/movies'}>Back to movies</Link>
      <br />
      <img
        src={'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path}
        alt=""
      />
      <h1>{movieDetails.title}</h1>
      <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h2>Genres</h2>
      <p>{movieDetails.genres?.map(genre => genre.name + ' ')}</p>
      <h2>Additional Info</h2>
      <nav>
        <NavLink to="cast" state={{ from: location.state?.from ?? '/movies' }}>
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          state={{ from: location.state?.from ?? '/movies' }}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
