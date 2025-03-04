import s from "./Skeleton.module.css";
const Skeleton = () => {
  return (
    <div className={s.container}>
      <p className={s.title}>Please select a character to see information</p>
      <div className={s.wrapper}>
        <div className={s.img}></div>
        <div className={s.subtitle}></div>
      </div>
      <div className={s.text}></div>
      <div className={s.text}></div>
      <div className={s.text}></div>
    </div>
  );
};

export default Skeleton;
