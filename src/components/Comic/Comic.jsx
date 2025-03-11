import s from "./Comic.module.css";
const Comic = ({ comicData }) => {
  let imgStyle = { objectFit: "cover" };
  if (
    `${comicData.thumbnail.path}.${comicData.thumbnail.extension}` ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle = { objectFit: "fill" };
  }
  return (
    <div>
      <img
        className={s.img}
        src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
        alt={comicData.title}
        style={imgStyle}
      />
      <p className={s.name}>{comicData.title}</p>
      <p>
        {comicData.prices[0].price !== 0
          ? comicData.prices[0].price + "$"
          : "NOT AVAILABLE"}
      </p>
    </div>
  );
};

export default Comic;
