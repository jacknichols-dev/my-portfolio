import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <a href={props.target} className="btn-main">
      {props.value}
    </a>
  );
};

export default Button;
