import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
class Button extends Component {
  // static contextType = LanguageContext; method:1
  render() {
    // const text = this.context === "english" ? "Submit" : "Voorleggen"; method:1
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
export default Button;
