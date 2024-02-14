import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
import css from "./NavBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const NavBar = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
