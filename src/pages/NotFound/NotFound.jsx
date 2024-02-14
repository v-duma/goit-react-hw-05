import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import css from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={css.notFound}>
      <h2>Not found page</h2>
      <div className={css.wrap}>
        <Link to="/">
          <TiArrowBack
            className={css.myIcon}
            size="24"
          />
          Go back
        </Link>
      </div>
    </div>
  );
}
