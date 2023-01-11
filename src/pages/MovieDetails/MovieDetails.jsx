import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from '../../service/fetchMovies';

export const MovieDetails = () => {
  const location = useLocation();
  // console.log(location.state);
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(res => {
        setMovieDetails(res);
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <h1>Movie Details</h1>
      <Link to={location.state.from}>Back to movies</Link>
      <br />
      <img src={movieDetails.poster_path} alt="" />
      <h1>{movieDetails.title}</h1>
      <p>User score: {Math.round(movieDetails.vote_average * 10)}</p>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h2>Genres</h2>
      <p>{movieDetails.genres?.map(genre => genre.name + ' ')}</p>
      <h2>Additional Info</h2>
      <nav>
        <NavLink to="cast" state={{ from: location.state.from }}>
          Cast
        </NavLink>
        <NavLink to="reviews" state={{ from: location.state.from }}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
