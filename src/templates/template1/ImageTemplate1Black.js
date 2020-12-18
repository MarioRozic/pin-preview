import React, { Component } from "react";
import Color from "color-thief-react";

import "./ImageTemplate1.css";

import Spinner from "../../UI/Spinner/Spinner";

import htmlToImage from "html-to-image";

export default class ImageTemplate1Black extends Component {
  componentRef = React.createRef();

  onClickHandler = () => {
    let imageName = this.props.metaInfo.title.split(" ").join("-");

    htmlToImage
      .toJpeg(document.getElementById("template1Black"), { quality: 0.7 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `${imageName}.jpeg`;
        link.href = dataUrl;
        link.click();
      });
  };

  render() {
    let { image, title, site_name } = this.props.metaInfo;

    let fontSize = 40;

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
            if (loading)
              return (
                <div className="templateLoading">
                  <Spinner />
                </div>
              );
            if (error) return <p>{error.message}</p>;
            return (
              <div
                id="template1Black"
                className="templateBox"
                ref={this.componentRef}
                name={site_name}
                onClick={this.onClickHandler}
              >
                <img src={image} alt="" style={{ paddingBottom: "300px" }} />
                <div
                  className="templateCover"
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 50%)`,
                  }}
                >
                  <div className="templateCoverTextTop">
                    <p style={{ fontSize: fontSize }}>{title}</p>
                  </div>
                  <div className="templateCoverText">
                    <p>{site_name}</p>
                  </div>
                </div>
              </div>
            );
          }}
        </Color>
        <div>
          {/* <button
            onClick={() => exportComponentAsJPEG(this.componentRef, "slika")}
          >
            Export As JPEG
          </button> */}
        </div>
      </div>
    );
  }
}
