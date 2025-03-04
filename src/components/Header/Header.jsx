import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header className={s.header}>
      <Link className={s.logoLink} to="/">
        <span>Marvel</span> information portal
      </Link>
      <div className={s.links}>
        <NavLink className={buildLinkClass} to="/">
          Characters
        </NavLink>
        <span>/</span>
        <NavLink className={buildLinkClass} to="comics">
          Comics
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
