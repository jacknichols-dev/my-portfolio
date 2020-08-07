import React from "react";
import ProjectNav from "./ProjectNav/ProjectNav";

const ProjectItem = (props) => {
  return (
    <>
      <li className="projects__item">
        <figure>
          <figcaption className="projects__item--title">
            {props.title}
          </figcaption>
          <img src={props.img} alt={props.alt} />
          <ProjectNav />
        </figure>
      </li>
    </>
  );
};

export default ProjectItem;
