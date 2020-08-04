import React from "react";

const ProjectNav = () => {
  return (
    <div className="projects__item--links">
      <div className="projects__item--link-container">
        <i className="port-icon-web"></i>
        <p>Website</p>
      </div>
      <div className="projects__item--link-container">
        <i className="port-icon-github"></i>
        <p>GitHub</p>
      </div>
    </div>
  );
};

export default ProjectNav;
