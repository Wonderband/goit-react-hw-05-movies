import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';
import { getMovieCast } from '../../service/fetchMovies';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState('');
  useEffect(() => {
    getMovieCast(movieId)
      .then(res => {
        setMovieCast(res);
      })
      .catch(err => console.log(err));
  }, [movieId]);
  return (
    <>
      <ul>
        {movieCast &&
          movieCast.map(person => (
            <li key={person.id}>
              <img
                src={'https://image.tmdb.org/t/p/w500/' + person.profile_path}
                alt="portrait actor"
                className={css.photo}
              />
              <p>{person.name}</p>
              <p>
                <em>Character:</em> {person.character}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};
