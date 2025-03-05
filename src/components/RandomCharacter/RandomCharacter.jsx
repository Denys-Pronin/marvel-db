import clsx from "clsx";
import s from "./RandomCharacter.module.css";
import { BarLoader } from "react-spinners";

const RandomCharacter = ({
  randomCharacter,
  getRandomCharacter,
  isLoading,
}) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {randomCharacter == null || isLoading ? (
          <BarLoader className={s.loader} />
        ) : (
          <>
            <img
              className={s.img}
              src={`${randomCharacter.thumbnail.path}.${randomCharacter.thumbnail.extension}`}
              alt={randomCharacter.name}
            />
            <div className={s.info_wrapper}>
              <div>
                <p className={s.name}>{randomCharacter.name}</p>
                {randomCharacter.description == "" ? (
                  <p>No information for this character</p>
                ) : (
                  <p>{`${randomCharacter.description.slice(0, 102)}...`}</p>
                )}
              </div>
              <div className={s.links}>
                <a
                  target="_blank"
                  className={clsx(s.link, s.link_home)}
                  href={randomCharacter.urls[0].url}
                >
                  HomePage
                </a>
                <a
                  target="_blank"
                  className={s.link}
                  href={randomCharacter.urls[1].url}
                >
                  Wiki
                </a>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={s.wrapper}>
        <p className={s.text}>
          Random character for today!{" "}
          <span>Do you want to get to know him better?</span>
        </p>
        <p className={s.text}>Or choose another one</p>
        <button
          onClick={getRandomCharacter}
          className={clsx(s.link, s.link_home)}
        >
          TRY IT
        </button>
      </div>
    </div>
  );
};

export default RandomCharacter;
