import React from "react";
import Card from "../Components/card";
import style from "./contentBox.module.css";

const ContentBox = () => {
  return (
    <div className={style.contentBox}>
      <Card />
      <Card />
    </div>
  );
};

export default ContentBox;
