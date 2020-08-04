import React from "react";
import "./Console.scss";
import Button from "../../../../UI/Button/Button";
import Logos from "../../../../UI/TechLogos/TechLogos";
import SocialLinks from "../../../../SocialLinks/SocialLinks";

const Console = () => {
  return (
    <div className="console">
      <div className="console__container">
        <hgroup>
          <h1 className="console__heading">Jack Nichols</h1>
          <p className="console__heading--title">
            Front-end Developer / Designer
          </p>
        </hgroup>
        <SocialLinks />
        <p className="console__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet
          vitae quia quisquam pariatur, quae fugiat qui. Consequuntur placeat,
          incidunt quaerat exercitationem voluptatem aliquam praesentium
          quisquam ab neque officiis minima.
        </p>
        <div className="console__btns">
          <Button value="Portfolio" />
          <Button value="Download CV" />
        </div>
        <Logos />
      </div>
    </div>
  );
};

export default Console;
