import { Link, useLocation, useParams } from "react-router-dom";
import s from "./ComicInfo.module.css";
import { useEffect, useRef, useState } from "react";
import { getComic } from "../../marvel-api.js";

const ComicInfo = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComic = async () => {
      try {
        setLoading(true);
        const data = await getComic(comicId);
        setComic(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchComic();
  }, []);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/comics");

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className={s.container}>
          <img
            className={s.img}
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt=""
          />
          <div className={s.info}>
            <p className={s.title}>{comic.title}</p>
            <p className={s.description}>
              {comic.description == ""
                ? "No description for this comic"
                : comic.description}
            </p>
            <p
              className={s.pageCount}
              style={{ display: comic.pageCount == 0 ? "none" : "block" }}
            >
              {comic.pageCount} pages
            </p>
            <p className={s.price}>{comic.prices[0].price}$</p>
          </div>
          <Link className={s.link} to={backLinkRef.current}>
            Back to all
          </Link>
        </div>
      )}
    </>
  );
};

export default ComicInfo;
