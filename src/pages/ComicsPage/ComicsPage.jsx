import { useEffect, useState } from "react";

import s from "./ComicsPage.module.css";
import { BarLoader } from "react-spinners";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import { getAllComics } from "../../marvel-api.js";
import ComicsList from "../../components/ComicsList/ComicsList.jsx";

const ComicsPage = () => {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        setLoading(true);
        const res = await getAllComics();
        setComics(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchComics();
  }, []);

  const getMoreComics = async () => {
    try {
      setLoading(true);
      const res = await getAllComics(offset);
      setComics((prev) => [...prev, ...res]);
      setOffset(offset + 8);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && comics.length == 0 ? (
        <BarLoader className={s.loader} />
      ) : (
        <>
          <div className={s.container}>
            <ComicsList comics={comics}>
              {loading ? (
                <BarLoader className={s.loader_btn} />
              ) : (
                <LoadMoreBtn getMore={getMoreComics} />
              )}
            </ComicsList>
          </div>
        </>
      )}
    </>
  );
};

export default ComicsPage;
