import { Link, useLocation } from "react-router-dom";
import Comic from "../Comic/Comic.jsx";
import s from "./ComicsList.module.css";

const ComicsList = ({ comics, children }) => {
  const location = useLocation();
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {comics.map((comic) => {
          return (
            <li className={s.item} key={comic.id}>
              <Link to={`/comics/${comic.id}`} state={location}>
                <Comic comicData={comic} />
              </Link>
            </li>
          );
        })}
      </ul>
      {children}
    </div>
  );
};

export default ComicsList;
