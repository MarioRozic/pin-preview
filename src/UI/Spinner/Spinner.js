import React, { Component } from "react";
import "./Spinner.css";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
