import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

import { Suspense, useEffect, useState } from "react";
import { getMovieDetailsPage } from "../../services/movie.servisec";
import { Loader } from "../../components/Loader/Loader";
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchMovieDetailsPage = await getMovieDetailsPage(movieId);
        setMovies(fetchMovieDetailsPage);
      } catch (error) {
        alert("Oops, something's wrong!");
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <div className={css.details}>
      <button
        className={css.btn}
        type="button"
        onClick={() => navigate(location?.state?.from ?? "/")}
      >
        Go back
      </button>
      {movies && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt={movies.title}
            width="200"
          />
          <h2>
            {movies.title} {movies.release_date}
          </h2>
          <p>
            User Score: {`${Math.round((movies.vote_average / 10) * 100)}%`}
          </p>
          <p>Overview {movies.overview}</p>
          <p>Genres: {movies.genres.map(({ name }) => name).join(", ")}</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}
