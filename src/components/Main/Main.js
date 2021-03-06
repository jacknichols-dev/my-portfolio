import React from "react";
import "./Main.scss";
import Me from "./scenes/home/Me/Me";
import Console from "./scenes/home/Console/Console";
// import RecentProjects from "./scenes/home/RecentProjects/RecentProjects";
import Carousel from "../../containers/Carousel/Carousel";
import Description from "./scenes/about/Description/Description";
import Stats from "./scenes/about/Stats/Stats";
import ContactInfo from "./scenes/contact/ContactInfo/ContactInfo";
import Form from "../../containers/ContactData/ContactData";

const Main = () => {
  return (
    <div className="Main">
      <section className="Main__home" id="home">
        <div>
          <Me />
          <Console />
        </div>
        <Carousel />
        {/* <RecentProjects /> */}
      </section>

      <section className="Main__about" id="about">
        <Description />
        <Stats />
      </section>

      <section className="Main__contact" id="contact">
        <div className="Main__contact--container">
          <ContactInfo />
          <Form />
        </div>
      </section>
    </div>
  );
};

export default Main;
