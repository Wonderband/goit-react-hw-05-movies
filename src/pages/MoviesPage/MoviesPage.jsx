import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { getSearchedMovies } from 'service/fetchMovies';

export const MoviesPage = () => {
  const location = useLocation();
  // console.log(location);

  // const [searchMovie, setSearchMovie] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });

  // setSearchMovie(searchParams.get('query'));
  const qwery = searchParams.get('query');
  console.log(qwery);
  // if (qwe.length > 0) setSearchMovie(qwe);
  // setSearchMovie(qwe);
  const handleSubmit = e => {
    e.preventDefault();
    // setSearchMovie(e.currentTarget.input.value);
    setSearchParams({ query: e.currentTarget.input.value });
  };

  // useEffect(() => {
  //   if (searchMovie === '') return;
  //   // changeUrlParams();
  //   getSearchedMovies(searchMovie)
  //     .then(res => setMoviesList(res))
  //     .catch(err => console.log(err));
  // }, [searchMovie]);

  useEffect(() => {
    if (!qwery) return;
    // changeUrlParams();
    getSearchedMovies(qwery)
      .then(res => setMoviesList(res))
      .catch(err => console.log(err));
  }, [qwery]);

  return (
    <>
      <h2>MoviesPage</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="input" />
        <button type="submit">Search</button>
      </form>
      {/* <NavLink to="666" state={{ from: location }}>
        details
      </NavLink> */}
      {/* {console.log(moviesList)}
      {console.log(searchMovie)}
      {console.log(searchParams.query)} */}
      <ul>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
