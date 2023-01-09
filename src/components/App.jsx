import { NavLink, Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/HomePage/HomePage';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage';
import { Page404 } from '../pages/Page404/Page404';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
export const App = () => {
  return (
    <div>
      <header>
        <nav>
          {/* <NavLink to="/">Home</NavLink> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Page404 />} />
        {/* <Route path="/products" element={<MovieDetails />} /> */}
      </Routes>
    </div>
  );
};
