import { useEffect, useState } from "react";
import { getAllCharacters, getCharacter } from "../../marvel-api.js";
import CharactersList from "../../components/CharactersList/CharactersList.jsx";
import CharacterInfo from "../../components/CharacterInfo/CharacterInfo.jsx";

import s from "./CharactersPage.module.css";
import { BarLoader } from "react-spinners";
import RandomCharacter from "../../components/RandomCharacter/RandomCharacter.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [offset, setOffset] = useState(9);
  const [loading, setLoading] = useState({
    char: true,
    charInfo: true,
    randomChar: true,
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading((prev) => ({ ...prev, char: true }));
        const res = await getAllCharacters();
        setCharacters(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading((prev) => ({ ...prev, char: false }));
      }
    };
    fetchCharacters();

    const fetchRandomCharacter = async () => {
      try {
        setLoading((prev) => ({ ...prev, randomChar: true }));
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        const res = await getCharacter(id);
        setRandomCharacter(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading((prev) => ({ ...prev, randomChar: false }));
      }
    };
    fetchRandomCharacter();
  }, []);

  const getCharacterInfo = async (id) => {
    try {
      setLoading((prev) => ({ ...prev, charInfo: true }));
      const res = await getCharacter(id);
      setSelectedCharacter(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading((prev) => ({ ...prev, charInfo: false }));
    }
  };

  const getRandomCharacter = async () => {
    try {
      setLoading((prev) => ({ ...prev, randomChar: true }));
      const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
      const res = await getCharacter(id);
      setRandomCharacter(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading((prev) => ({ ...prev, randomChar: false }));
    }
  };

  const getMoreCharacters = async () => {
    try {
      setLoading((prev) => ({ ...prev, char: true }));
      const res = await getAllCharacters(offset);
      setCharacters((prev) => [...prev, ...res]);
      setOffset(offset + 9);
      console.log(characters);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading((prev) => ({ ...prev, char: false }));
    }
  };

  return (
    <>
      <RandomCharacter
        randomCharacter={randomCharacter}
        getRandomCharacter={getRandomCharacter}
        isLoading={loading.randomChar}
      />
      {loading.char && characters.length == 0 ? (
        <BarLoader className={s.loader} />
      ) : (
        <>
          <div className={s.container}>
            <CharactersList
              characters={characters}
              getCharacterInfo={getCharacterInfo}
            >
              {loading.char ? (
                <BarLoader className={s.loader_btn} />
              ) : (
                <LoadMoreBtn getMore={getMoreCharacters} />
              )}
            </CharactersList>
            <CharacterInfo
              isLoading={loading.charInfo}
              selectedCharacter={selectedCharacter}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CharacterPage;
