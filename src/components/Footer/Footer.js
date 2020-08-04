import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__container">
        <div className="Footer__sitemap">
          <ul className="Footer__sitemap--list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </div>
        <SocialLinks />
        <div className="Footer__cr">
          <p>© 2020, Jack Nichols &hellip;</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
