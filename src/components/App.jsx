import { Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { Suspense, lazy } from "react";
import { Loader } from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home/Home"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieReviews = lazy(() => import("../pages/MovieReviews/MovieReviews"));
const MovieCast = lazy(() => import("../pages/MovieCast/MovieCast"));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
