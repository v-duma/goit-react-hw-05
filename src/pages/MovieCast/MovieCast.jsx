import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/movie.servisec";
import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchMovieCast = await getMovieCast(movieId);
        setCast(fetchMovieCast);
      } catch (error) {
        alert("Oops, something's wrong!");
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <ul className={css.list}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={css.list}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={name}
            width="80"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}{" "}
    </ul>
  );
}
