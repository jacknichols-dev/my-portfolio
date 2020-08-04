import React from "react";
import ProjectNav from "./ProjectNav/ProjectNav";

const ProjectItem = ({ img, alt, desc, title }) => {
  return (
    <>
      <li className="projects__item">
        <h4>{title}</h4>
        <img src={img} alt={alt} />
        <p className="">{desc}</p>
        <ProjectNav />
      </li>
    </>
  );
};

export default ProjectItem;
