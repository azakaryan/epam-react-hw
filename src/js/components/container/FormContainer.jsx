import React, { Component } from "react";
import ReactDOM from "react-dom";

class FormContainer extends Component {
  render() {
    return (
      <div>
        <label>Hello</label>
        <span>World!</span>
      </div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("el");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;