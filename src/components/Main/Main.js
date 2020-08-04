import React from "react";
import "./Main.scss";
import Me from "./scenes/home/Me/Me";
import Console from "./scenes/home/Console/Console";
import RecentProjects from "./scenes/home/RecentProjects/RecentProjects";
import More from "./scenes/home/More/More";
import Description from "./scenes/about/Description/Description";
import Stats from "./scenes/about/Stats/Stats";
import Illustration from "./scenes/contact/Illustration/Illustration";
import Form from "../../containers/ContactData/ContactData";

const Main = () => {
  return (
    <div className="Main">
      <section className="Main__home" id="home">
        <div>
          <Me />
          <Console />
        </div>
        <RecentProjects />
        <More />
      </section>

      <section className="Main__about" id="about">
        <Description />
        <Stats />
      </section>

      <section className="Main__contact" id="contact">
        <Illustration />
        <Form />
      </section>
    </div>
  );
};

export default Main;
