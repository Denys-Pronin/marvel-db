import s from "./Character.module.css";
const Character = ({ characterData, getCharacterInfo }) => {
  return (
    <div onClick={() => getCharacterInfo(characterData.id)}>
      <img
        className={s.img}
        src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
        alt={characterData.name}
      />
      <p className={s.name}>{characterData.name}</p>
    </div>
  );
};

export default Character;
