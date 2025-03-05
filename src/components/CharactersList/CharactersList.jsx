import { Outlet } from "react-router-dom";
import Character from "../Character/Character.jsx";
import s from "./CharactersList.module.css";

const CharactersList = ({ characters, getCharacterInfo, children }) => {
  console.log(characters);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {characters.map((character) => {
          return (
            <li className={s.item} key={character.id}>
              <Character
                characterData={character}
                getCharacterInfo={getCharacterInfo}
              />
            </li>
          );
        })}
      </ul>
      {children}
    </div>
  );
};

export default CharactersList;
