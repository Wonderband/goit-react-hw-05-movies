import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../service/fetchMovies';

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(res => setMovies(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      <ul>
        {movies.map(movie => (
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
