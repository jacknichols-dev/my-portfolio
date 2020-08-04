import React from "react";
import "./Input.scss";

const Input = (props) => {
  let inputElement = null;

  switch (props.inputType) {
    case "input":
      inputElement = <input className="Input__element" {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className="Input__element" {...props} />;
      break;
    default:
      inputElement = <input className="Input__element" {...props} />;
  }
  return (
    <div className="Input__container">
      <label className="Input__label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
