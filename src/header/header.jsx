import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Explore Unique Stays Around the World</h1>
      <p className={style.subTitle}>
        Handpicked destinations for your next unforgettable experience.
      </p>
    </header>
  );
};

export default Header;
