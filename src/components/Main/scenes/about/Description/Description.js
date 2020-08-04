import React from "react";
import Button from "../../../../UI/Button/Button";
import Logos from "../../../../UI/TechLogos/TechLogos";
import "./Description.scss";

const Description = () => {
  return (
    <div className="About">
      <div className="About__container">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
        <div className="About__btns">
          <Button value="Portfolio" />
          <Button value="Download CV" />
        </div>
        <div className="About__logos">
          <Logos />
        </div>
      </div>
    </div>
  );
};

export default Description;
