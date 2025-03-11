import clsx from "clsx";
import Skeleton from "../Skeleton/Skeleton.jsx";
import s from "./CharacterInfo.module.css";
import { BarLoader } from "react-spinners";

const CharacterInfo = ({ selectedCharacter, isLoading }) => {
  let imgStyle = { objectFit: "cover" };

  if (
    selectedCharacter !== null &&
    `${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}` ===
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle = { objectFit: "fill" };
  }
  return (
    <div className={s.container}>
      {selectedCharacter == null ? (
        <Skeleton />
      ) : isLoading ? (
        <BarLoader className={s.loader} />
      ) : (
        <div>
          <div className={s.wrapper}>
            <img
              className={s.img}
              src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}
              alt={selectedCharacter.name}
              style={imgStyle}
            />
            <div className={s.head}>
              <p className={s.name}>{selectedCharacter.name}</p>
              <div className={s.links}>
                <a
                  target="_blank"
                  className={clsx(s.link, s.link_home)}
                  href={selectedCharacter.urls[0].url}
                >
                  HomePage
                </a>
                <a
                  target="_blank"
                  className={s.link}
                  href={selectedCharacter.urls[1].url}
                >
                  Wiki
                </a>
              </div>
            </div>
          </div>
          {selectedCharacter.description == "" ? (
            <p>No information for this character</p>
          ) : (
            <p className={s.descr}>{selectedCharacter.description}</p>
          )}
          {selectedCharacter.comics.items.length !== 0 && (
            <>
              <p className={s.comics_text}>Comics:</p>
              <ul className={s.comics_list}>
                {selectedCharacter.comics.items.map((comic) => {
                  return <li className={s.comics_item}>{comic.name}</li>;
                })}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CharacterInfo;
