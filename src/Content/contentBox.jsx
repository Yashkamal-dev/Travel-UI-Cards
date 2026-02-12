import React from "react";
import Card from "../Components/card";
import style from "./contentBox.module.css";
import Hotels from "../Data/data";

const ContentBox = () => {
  return (
    <div className={style.contentBox}>
      {Hotels.map((Hotel) => {
        return (
          <Card
            key={Hotel["id"]}
            image={Hotel["image"]}
            name={Hotel["name"]}
            price={Hotel["price"]}
            description={Hotel["description"]}
            details={Hotel["details"]}
          />
        );
      })}
    </div>
  );
};

export default ContentBox;
