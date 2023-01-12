import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from '../../service/fetchMovies';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState([]);

  useEffect(() => {
    getMovieReview(movieId)
      .then(res => {
        setMovieReview(res);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <ul>
        {movieReview.length
          ? movieReview.map(rew => {
              return (
                <li key={rew.id}>
                  <em>Author:</em> <b>{rew.author}</b>
                  <p>{rew.content}</p>
                </li>
              );
            })
          : 'No reviews!'}
      </ul>
    </>
  );
};
