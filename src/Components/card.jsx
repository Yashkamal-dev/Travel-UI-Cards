import React from "react";
import style from "./card.module.css";

const Card = () => {
  return (
    <div className={style.card}>
      <img
        className={style.image}
        src="https://images.unsplash.com/photo-1638942247251-fef8f21b66f7?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="preview image"
      />
      <div className={style.info}>
        <div className={style.placePrice}>
          <h2 className={style.place}>hotel name</h2>
          <strong className={style.price}>$710</strong>
        </div>
        <p className={style.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
          officia ipsam deleniti sit labore voluptatem?
        </p>
        <ul className={style.hypeTime}>
          <li className={style.hype}>luxery stay</li>
          <li className={style.timePeriod}>2 day stay</li>
        </ul>
        <button className={style.reserveBtn}>Reserve</button>
      </div>
    </div>
  );
};

export default Card;
