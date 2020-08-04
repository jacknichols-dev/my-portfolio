import React from "react";

const Stat = ({ level, name }) => {
  return (
    <>
      <p>{name}</p>
      <li className="Stats__stat">{level}</li>
    </>
  );
};

export default Stat;
