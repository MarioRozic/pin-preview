import React, { Component } from "react";
import Color from "color-thief-react";
import { Palette } from "color-thief-react";

import "./ImageTemplate6.css";

import Spinner from "../../UI/Spinner/Spinner";
import htmlToImage from "html-to-image";

export default class ImageTemplate6 extends Component {
  state = {
    titleFontSize: 35,
    linkFontSize: 15,
    titleFontFamily: "Lora",
    siteFontFamily: "Lora",
  };
  componentRef = React.createRef();

  onClickHandler = () => {
    let imageName = this.props.metaInfo.title.split(" ").join("-");

    htmlToImage
      .toJpeg(document.getElementById("template6"), { quality: 0.7 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `${imageName}.jpeg`;
        link.href = dataUrl;
        link.click();
      });
  };

  onEditClick = () => {
    console.log(this.props);

    this.props.history.push({
      pathname: `/edit/template6`,
      state: { metaInfo: this.props.metaInfo, imageList: this.props.imageList },
    });
  };

  render() {
    let { image, title, site_name } = this.props.metaInfo;
    let {
      titleFontSize,
      linkFontSize,
      titleFontFamily,
      siteFontFamily,
    } = this.state;

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
              <Palette
                src={image}
                colorCount={2}
                crossOrigin="anonymous"
                format="hex"
              >
                {({
                  data: paletteData,
                  loading: paletteLoading,
                  error: paletteError,
                }) => {
                  if (paletteLoading)
                    return (
                      <div className="templateLoading">
                        <Spinner />
                      </div>
                    );
                  if (paletteError) return <p>{paletteError.message}</p>;
                  return (
                    <div
                      id="template6"
                      className="templateBox"
                      ref={this.componentRef}
                      name={site_name}
                      onClick={this.onClickHandler}
                    >
                      <img src={image} alt="" style={{ paddingTop: "200px" }} />
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            background: `rgba(${data[0]},${data[1]},${data[2]})`,
                            width: "100%",
                            top: 0,
                            lineHeight: "60px",
                            position: "absolute",
                            padding: "0 20px",
                          }}
                        >
                          <p
                            style={{
                              fontWeight: "900",
                              margin: "15px 0",
                              textTransform: "uppercase",

                              fontFamily: this.props.titleFontFamily
                                ? this.props.titleFontFamily
                                : titleFontFamily,
                              fontSize: `${
                                this.props.titleFontSize
                                  ? this.props.titleFontSize
                                  : titleFontSize
                              }px`,
                              color: `${
                                this.props.titleFontColor
                                  ? this.props.titleFontColor
                                  : "#fff"
                              }`,
                              background: `${
                                this.props.titleBackgroundColor
                                  ? this.props.titleBackgroundColor
                                  : "transparent"
                              }`,
                            }}
                          >
                            {this.props.title ? this.props.title : title}
                          </p>
                        </div>
                        <div
                          style={{
                            // background: paletteData[1],
                            background: `rgba(${data[0]},${data[1]},${data[2]})`,
                            width: "100%",
                            bottom: "0px",
                            position: "absolute",
                            padding: "0 20px",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: this.props.siteFontFamily
                                ? this.props.siteFontFamily
                                : siteFontFamily,
                              fontSize: `${
                                this.props.linkFontSize
                                  ? this.props.linkFontSize
                                  : linkFontSize
                              }px`,
                              color: `${
                                this.props.siteFontColor
                                  ? this.props.siteFontColor
                                  : "#fff"
                              }`,
                              background: `${
                                this.props.siteBackgroundColor
                                  ? this.props.siteBackgroundColor
                                  : "transparent"
                              }`,
                            }}
                          >
                            {site_name}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }}
              </Palette>
            );
          }}
        </Color>
        {this.props.hideButtons ? null : (
          <div className="templateButtons">
            <button className="templateButtonInfo" onClick={this.onEditClick}>
              Edit
            </button>
            <button className="templateButton" onClick={this.onClickHandler}>
              Download
            </button>
          </div>
        )}
      </div>
    );
  }
}
