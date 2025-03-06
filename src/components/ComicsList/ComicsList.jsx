import Comic from "../Comic/Comic.jsx";
import s from "./ComicsList.module.css";

const ComicsList = ({ comics, children }) => {
  console.log(comics);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {comics.map((comic) => {
          return (
            <li className={s.item} key={comic.id}>
              <Comic comicData={comic} />
            </li>
          );
        })}
      </ul>
      {children}
    </div>
  );
};

export default ComicsList;
