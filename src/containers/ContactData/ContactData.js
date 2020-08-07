import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import "./ContactData.scss";

export default class ContactData extends Component {
  render() {
    let form = (
      <div className="Form-section">
        <form className="Form-section__form">
          <hgroup className="Form-section__form--heading">
            <h3 style={{ color: "var(--sec)" }}>Get In Touch</h3>
            <p>Feel free to drop me a line below.</p>
          </hgroup>
          <Input inputType="input" />
          <Input inputType="input" />
          <Input inputType="input" />
          <Input inputType="input" />
          <Input inputType="textarea" />
          <button className="Form-section__form--submit" type="submit">
            SEND
          </button>
        </form>
      </div>
    );
    return <div className="Form">{form}</div>;
  }
}
