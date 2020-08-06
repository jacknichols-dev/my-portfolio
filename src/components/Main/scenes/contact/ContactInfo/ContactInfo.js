import React from "react";
import contactImg from "../../../../../assets/img/illustration.svg";
import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <div className="Contact">
      <div className="Contact__info">
        <h3>Contact Me</h3>
        <i className="port-icon-mobile Contact__info--icon">
          <p>
            Call directly at <span>07734 941654</span>
          </p>
        </i>
        <i className="port-icon-whatsapp Contact__info--icon">
          <p>
            WhatsApp: <span>07734 941654</span>{" "}
          </p>
        </i>
        <i className="port-icon-email Contact__info--icon">
          <p>
            Email: <span>jacknichols_88@yahoo.co.uk</span>
          </p>
        </i>
      </div>
      <img
        src={contactImg}
        alt="contact illustration"
        className="Contact__img"
      />
    </div>
  );
};

export default ContactInfo;
