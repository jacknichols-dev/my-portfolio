import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__list--item">
          <a href="#home" className="nav__list--item">
            <i className="port-icon-home Nav__icon">
              <p>home</p>
            </i>
          </a>
        </li>
        <li className="Nav__list--item">
          <a href="#about" className="nav__list--item">
            <i className="port-icon-user Nav__icon">
              <p>about</p>
            </i>
          </a>
        </li>
        <li className="Nav__list--item">
          <a href="#contact" className="nav__list--item">
            <i className="port-icon-phone Nav__icon">
              <p>contact</p>
            </i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
