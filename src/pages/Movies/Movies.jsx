import { useEffect, useState } from "react";
import css from "./Movies.module.css";
import toast, { Toaster } from "react-hot-toast";
import { searchMovie } from "../../services/movie.servisec";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") ?? "";

  const notify = () => toast.error("Please, enter key word!");
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const dataResults = await searchMovie(searchQuery);
        setMovies(dataResults);
      } catch (error) {
        alert("Oops, something's wrong!");
      }
    }
    fetchData();
  }, [searchQuery]);

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.query;
    setSearchParams({ query: value });
    if (!value) {
      notify();
      return;
    }
  };
  return (
    <div className={css.movies}>
      <Toaster />
      <form className={css.form} onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          name="query"
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>
      <ul className={css.list}>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <p className={css.title}>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
