import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
import colorContext from "../context/colorContext";
class Button extends Component {
  // static contextType = LanguageContext; method:1
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    // const text = this.context === "english" ? "Submit" : "Voorleggen"; method:1
    return (
      <colorContext.Consumer>
        {(color) => this.renderButton(color)}
      </colorContext.Consumer>
    );
  }
}
export default Button;
