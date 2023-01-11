import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { getSearchedMovies } from 'service/fetchMovies';

export default function MoviesPage() {
  const location = useLocation();
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });

  const qwery = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.input.value });
  };

  useEffect(() => {
    if (!qwery) return;
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
}
