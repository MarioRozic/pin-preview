import React, { Component } from "react";
import Color from "color-thief-react";

import "./ImageTemplate1.css";

import { exportComponentAsJPEG } from "react-component-export-image";
import Spinner from "../../UI/Spinner/Spinner";

export default class ImageTemplate1Reverse extends Component {
  componentRef = React.createRef();

  render() {
    let { image, title, site_name } = this.props.metaInfo;

    let fontSize = 40;

    console.log(title.length);
    if (title.length <= 40) {
      fontSize = 55;
    } else if (title.length <= 50) {
      fontSize = 50;
    } else if (title.length <= 60) {
      fontSize = 45;
    } else if (title.length <= 70) {
      fontSize = 40;
    }

    return (
      <div className="template">
        <Color
          src={image}
          //   src="https://images.unsplash.com/photo-1598609456165-a57afb2fb2ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          crossOrigin="Anonymous"
          format="rgbArray"
        >
          {({ data, loading, error }) => {
            console.log(data);
            if (loading)
              return (
                <div className="templateLoading">
                  <Spinner />
                </div>
              );
            if (error) return <p>{error.message}</p>;
            return (
              <div
                className="templateBox"
                ref={this.componentRef}
                name={site_name}
              >
                <img src={image} alt="" />
                <div
                  className="templateCover"
                  style={{
                    background: `linear-gradient(to bottom, rgba(${data[0]},${data[1]},${data[2]}, 0) 0%,rgba(${data[0]},${data[1]},${data[2]}, 1) 30%)`,
                  }}
                >
                  <div className="templateCoverTextTop">
                    <p
                      style={{
                        fontSize: fontSize,
                        "mix-blend-mode": "difference",
                      }}
                    >
                      {title}
                    </p>
                  </div>
                  <div className="templateCoverText">
                    <p
                      style={{
                        "mix-blend-mode": "difference",
                      }}
                    >
                      {site_name}
                    </p>
                  </div>
                </div>
              </div>
            );
          }}
        </Color>
        <div>
          <button
            onClick={() => exportComponentAsJPEG(this.componentRef, "slika")}
          >
            Export As JPEG
          </button>
        </div>
      </div>
    );
  }
}