import { Link } from "react-router-dom";
import css from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={css.notFound}>
      <h2>Not found page</h2>
      <div className={css.wrap}>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}
