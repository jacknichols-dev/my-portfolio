import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import "./ContactData.scss";

export default class ContactData extends Component {
  render() {
    let form = (
      <div className="Form-section">
        <form className="Form-section__form">
          <h3 style={{ color: "var(--sec)" }}>Get In Touch</h3>
          <Input inputType="input" />
          <Input inputType="input" />
          <Input inputType="textarea" />
        </form>
      </div>
    );
    return <div className="Form-section">{form}</div>;
  }
}
