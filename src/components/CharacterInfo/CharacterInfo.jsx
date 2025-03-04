import clsx from "clsx";
import Skeleton from "../Skeleton/Skeleton.jsx";
import s from "./CharacterInfo.module.css";

const CharacterInfo = ({ selectedCharacter }) => {
  console.log(selectedCharacter);

  return (
    <div className={s.container}>
      {selectedCharacter == null ? (
        <Skeleton />
      ) : (
        <div>
          <div className={s.wrapper}>
            <img
              className={s.img}
              src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}
              alt={selectedCharacter.name}
            />
            <div className={s.head}>
              <p className={s.name}>{selectedCharacter.name}</p>
              <div className={s.links}>
                <a className={clsx(s.link, s.link_home)} href="#">
                  HomePage
                </a>
                <a className={s.link} href="#">
                  Wiki
                </a>
              </div>
            </div>
          </div>
          {selectedCharacter.description !== "" && (
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
