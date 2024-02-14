import { Link, useLocation } from "react-router-dom";
import css from "./Home.module.css";
import { useEffect, useState } from "react";
import { fetchPopular } from "../../services/movie.servisec";

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const data = await fetchPopular({
          abortControler: controller,
        });
        setMovies(data.results);
      } catch (error) {
        alert("Oops, something's wrong!");
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={css.home}>
      <h1>Trending today</h1>
      {movies.length > 0 && (
        <ul className={css.list}>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <p className={css.title}>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
