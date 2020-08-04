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
        <ProjectItem img={project1} alt="project one">
          {props.children}
        </ProjectItem>
        <ProjectItem img={project2} alt="project two">
          {props.children}
        </ProjectItem>
        <ProjectItem img={project3} alt="project three">
          {props.children}
        </ProjectItem>
      </ul>
    </div>
  );
};

export default RecentProjects;
