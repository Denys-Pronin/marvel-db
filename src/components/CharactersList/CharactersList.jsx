import Character from "../Character/Character.jsx";
import s from "./CharactersList.module.css";

const CharactersList = ({ characters, getCharacterInfo }) => {
  return (
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
  );
};

export default CharactersList;
