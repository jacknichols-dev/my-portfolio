import React from "react";
import "./Stats.scss";
import Stat from "./Stat/Stat";

const Stats = () => {
  return (
    <div className="Stats">
      <div className="Stats__container">
        <h4 className="Stats__title">Web Development</h4>
        <ul className="Stats__list">
          <Stat level="95%" name="HTML // CSS"></Stat>
          <Stat level="80%" name="JavaScript // jQuery"></Stat>
          <Stat level="75%" name="WordPress"></Stat>
          <Stat level="75%" name="React JS"></Stat>

          <h4 className="Stats__title">Design</h4>

          <Stat level="90%" name="Adobe XD"></Stat>
          <Stat level="95%" name="Adobe Illustrator"></Stat>
          <Stat level="95%" name="Adobe Photoshop"></Stat>
        </ul>
      </div>
    </div>
  );
};

export default Stats;
