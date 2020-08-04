import React from "react";
import "./SocialLinks.scss";

const SocialLinks = () => {
  return (
    <div className="social">
      <div className="social__icons">
        <a
          href="https://www.linkedin.com/in/jack-nichols-0a344a173/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="port-icon-linkedin"></i>
          <p style={{ color: "white", fontSize: "1rem", textAlign: "center" }}>
            Linkedin
          </p>
        </a>
        <a
          href="https://github.com/jacknichols-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="port-icon-git2"></i>
          <p style={{ color: "white", fontSize: "1rem", textAlign: "center" }}>
            GitHub
          </p>
        </a>
        <a
          href="https://www.behance.net/jacknicholsdesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="port-icon-behance"></i>
          <p style={{ color: "white", fontSize: "1rem", textAlign: "center" }}>
            Behance
          </p>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
