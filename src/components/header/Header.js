import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {
    urlString: "",
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  generateButtonHandler = () => {
    this.props.generateHandler(this.state.urlString);
    this.setState({ urlString: "" });
  };

  render() {
    return (
      <header
        className={`header`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/bg/bg-image-24-full.jpg)`,
        }}
      >
        <div className="blackOpacity"></div>
        <div className="HeaderTitle">
          <div>
            <h1>Pin-Flights</h1>
            <p>
              Easy generate pinterest images for your article. Two clicks for
              more beautiful pinterest images.
            </p>
          </div>
          <div style={{ marginTop: 200 }}>
            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.urlString}
              name="urlString"
            />
            <button onClick={() => this.generateButtonHandler()}>
              Generate
            </button>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
