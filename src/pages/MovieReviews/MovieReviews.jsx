import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/movie.servisec";
import { useEffect, useState } from "react";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchMovieCast = await getMovieReviews(movieId);
        setReviews(fetchMovieCast);
      } catch (error) {
        alert("Oops, something's wrong!");
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet</p>
      )}
    </>
  );
}
