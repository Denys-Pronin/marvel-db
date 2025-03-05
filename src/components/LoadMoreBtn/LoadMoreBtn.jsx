import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ getMoreCharacters }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={getMoreCharacters} className={s.btn}>
        LOAD MORE
      </button>
    </div>
  );
};

export default LoadMoreBtn;
