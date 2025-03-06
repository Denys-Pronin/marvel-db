import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ getMore }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={getMore} className={s.btn}>
        LOAD MORE
      </button>
    </div>
  );
};

export default LoadMoreBtn;
