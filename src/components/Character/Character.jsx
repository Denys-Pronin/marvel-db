import s from "./Character.module.css";
const Character = ({ characterData, getCharacterInfo }) => {
  const handleClick = () => {
    getCharacterInfo(characterData.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let imgStyle = { objectFit: "cover" };
  if (
    `${characterData.thumbnail.path}.${characterData.thumbnail.extension}` ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle = { objectFit: "fill" };
  }
  return (
    <div onClick={handleClick}>
      <img
        className={s.img}
        src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
        alt={characterData.name}
        style={imgStyle}
      />
      <p className={s.name}>{characterData.name}</p>
    </div>
  );
};

export default Character;
