import React, { Component } from "react";
import Color from "color-thief-react";

import Spinner from "../../UI/Spinner/Spinner";

import htmlToImage from "html-to-image";

export default class ImageTemplate8Dominant extends Component {
  componentRef = React.createRef();

  onClickHandler = () => {
    let imageName = this.props.metaInfo.title.split(" ").join("-");

    htmlToImage
      .toJpeg(document.getElementById("template1"), { quality: 0.7 })
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
                id="template1"
                className="templateBox"
                ref={this.componentRef}
                name={site_name}
                onClick={this.onClickHandler}
              >
                <img src={image} alt="" style={{}} />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/Pinterest 7.png`}
                  alt=""
                  style={{ position: "absolute", left: 0 }}
                />
                <div
                  style={{
                    width: "100%",
                    height: "190px",
                    position: "absolute",
                    bottom: 0,
                  }}
                >
                  <div
                    style={{
                      width: "290px",
                      position: "absolute",
                      right: "10px",
                    }}
                  >
                    <p
                      style={{
                        color: `rgba(${data[0]},${data[1]},${data[2]}, 1)`,
                        fontFamily: "Bebas Neue",
                        fontSize: "30px",
                      }}
                    >
                      {title}
                    </p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        color: `rgba(${data[0]},${data[1]},${data[2]}, 1)`,
                        fontFamily: "Bebas Neue",
                        fontSize: "20px",
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
