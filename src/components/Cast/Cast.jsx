import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../service/fetchMovies';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState('');
  console.log(movieCast);
  useEffect(() => {
    getMovieCast(movieId)
      .then(res => {
        setMovieCast(res);
        console.log(res);
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
                alt=""
              />
              <p>{person.name}</p>
              <p>Character: {person.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
