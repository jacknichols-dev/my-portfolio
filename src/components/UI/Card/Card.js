import React from "react";
import CardInfo from "./CardInfo/CardInfo";

export default function Card(props) {
  return (
    <div className="Carousel__card" onClick={(e) => props.click(props.item)}>
      <img
        className="Carousel__card--img"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />

      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link1={props.item.link1}
          link2={props.item.link2}
        />
      )}
    </div>
  );
}
