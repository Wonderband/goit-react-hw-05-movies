import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from '../../service/fetchMovies';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
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
    <div className={css.container}>
      <h1>Movie Details</h1>
      <Link to={location.state?.from ?? '/movies'} className={css.buttonBack}>
        {'<'}-- Back to movies
      </Link>
      <br />
      <section className={css.info}>
        <img
          src={'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path}
          alt="poster"
          className={css.poster}
        />
        <div className={css.mainInfo}>
          <h2>
            {movieDetails.title} ({movieDetails.release_date?.slice(0, 4)})
          </h2>
          <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{movieDetails.genres?.map(genre => genre.name + ' ')}</p>
        </div>
      </section>
      <h3 className={css.addInfo}>Additional Info</h3>
      <nav className={css.detailsNav}>
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
    </div>
  );
}
