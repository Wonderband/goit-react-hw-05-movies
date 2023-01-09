import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetails = () => (
  <>
    <h1>Movie Details</h1>
    <h2>Additional Info</h2>

    <nav>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </nav>
    <Outlet />
  </>
);
