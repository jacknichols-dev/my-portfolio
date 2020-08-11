import React from "react";

function CardInfo(props) {
  return (
    <div className="Carousel__card--info-container">
      <p className="Carousel__card--title">{props.title}</p>
      <p className="Carousel__card--subTitle">{props.subTitle}</p>
      <div className="Carousel__card--links">
        <a href={props.link1} target="_blank" rel="noopener noreferrer">
          <i className="port-icon-web"></i>
          Website
        </a>
        <a href={props.link2} target="_blank" rel="noopener noreferrer">
          <i className="port-icon-github"></i>
          Github
        </a>
      </div>
    </div>
  );
}

export default CardInfo;
