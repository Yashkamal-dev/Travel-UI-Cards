import React from "react";
import style from "./card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <img className={style.image} src={props["image"]} alt="preview image" />
      <div className={style.info}>
        <div className={style.placePrice}>
          <h2 className={style.place}>{props["name"]} </h2>
          <strong className={style.price}>₹{props["price"]} </strong>
        </div>
        <p className={style.description}>{props["description"]}</p>
        <ul className={style.hypeTime}>
          <li className={style.hype}>{props["details"][0]}</li>
          <li className={style.timePeriod}>{props["details"][1]}</li>
        </ul>
        <button className={style.reserveBtn}>Reserve</button>
      </div>
    </div>
  );
};

export default Card;
