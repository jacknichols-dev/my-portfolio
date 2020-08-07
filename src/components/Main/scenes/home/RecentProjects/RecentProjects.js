import React from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import "./RecentProjects.scss";
import project1 from "../../../../../assets/img/project-1.jpg";
import project2 from "../../../../../assets/img/project-2.jpg";
import project3 from "../../../../../assets/img/project-3.jpg";

const RecentProjects = (props) => {
  return (
    <div className="projects">
      <p className="projects__title">Latest Projects</p>
      <ul className="projects__list">
        <ProjectItem
          img={project1}
          alt="Restaurant site project"
          title="Restaurant Website"
        ></ProjectItem>
        <ProjectItem
          img={project2}
          alt="coffee shop project"
          title="Coffee Ecommerce Website"
        ></ProjectItem>
        <ProjectItem
          img={project3}
          alt="Clothing store project"
          title="Clothing Store App"
        ></ProjectItem>
      </ul>
    </div>
  );
};

export default RecentProjects;
