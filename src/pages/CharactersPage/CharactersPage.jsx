import { useEffect, useState } from "react";
import { getAllCharacters, getCharacter } from "../../marvel-api.js";
import CharactersList from "../../components/CharactersList/CharactersList.jsx";
import CharacterInfo from "../../components/CharacterInfo/CharacterInfo.jsx";

import s from "./CharactersPage.module.css";

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await getAllCharacters();
        setCharacters(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, []);

  const getCharacterInfo = async (id) => {
    try {
      const res = await getCharacter(id);
      setSelectedCharacter(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={s.container}>
        <CharactersList
          characters={characters}
          getCharacterInfo={getCharacterInfo}
        />
        <CharacterInfo selectedCharacter={selectedCharacter} />
        <img className={s.bg_img} src="/img/bg_character.png" alt="" />
      </div>
    </>
  );
};

export default CharacterPage;
