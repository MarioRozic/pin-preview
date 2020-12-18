import React, { Component } from "react";
import Color from "color-thief-react";

import "./ImageTemplate2.css";

import Spinner from "../../UI/Spinner/Spinner";
import htmlToImage from "html-to-image";

export default class ImageTemplate2Black extends Component {
  componentRef = React.createRef();

  onClickHandler = () => {
    let imageName = this.props.metaInfo.title.split(" ").join("-");

    htmlToImage
      .toJpeg(document.getElementById("template2Reverse"), { quality: 0.7 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `${imageName}.jpeg`;
        link.href = dataUrl;
        link.click();
      });
  };

  render() {
    let { image, title, site_name } = this.props.metaInfo;
    return (
      <div className="template">
        <Color
          src={image}
          //   src="https://images.unsplash.com/photo-1598609456165-a57afb2fb2ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          crossOrigin="anonymous"
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
                id="template2Reverse"
                className="templateBox"
                ref={this.componentRef}
                name={site_name}
                style={{ overflow: "hidden" }}
                onClick={this.onClickHandler}
              >
                <img src={image} alt="" style={{ paddingTop: "200px" }} />
                <div
                  className="templateCover2"
                  style={{
                    background: `linear-gradient(to top, rgba(${data[0]},${data[1]},${data[2]}, 0) 0%,rgba(${data[0]},${data[1]},${data[2]}, 1) 45%)`,
                  }}
                >
                  <div className="templateCoverText2">
                    <p
                      style={{
                        "mix-blend-mode": "difference",
                      }}
                    >
                      {site_name}
                    </p>
                    <p
                      style={{
                        "mix-blend-mode": "difference",
                      }}
                    >
                      {title}
                    </p>
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
