import s from "./Character.module.css";
const Character = ({ characterData, getCharacterInfo }) => {
  const handleClick = () => {
    getCharacterInfo(characterData.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div onClick={handleClick}>
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
