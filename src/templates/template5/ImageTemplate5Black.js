import React, { Component } from "react";
import Color from "color-thief-react";
import { Palette } from "color-thief-react";

import "./ImageTemplate5.css";

import Spinner from "../../UI/Spinner/Spinner";
import htmlToImage from "html-to-image";

export default class ImageTemplate5Black extends Component {
  state = {
    titleFontSize: 45,
    linkFontSize: 20,
    titleFontFamily: "Bebas Neue",
    siteFontFamily: "Bebas Neue",
  };
  componentRef = React.createRef();

  onClickHandler = () => {
    let imageName = this.props.metaInfo.title.split(" ").join("-");

    htmlToImage
      .toJpeg(document.getElementById("template5Black"), { quality: 0.7 })
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
      pathname: `/edit/template5Black`,
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
                      id="template5Black"
                      className="templateBox"
                      ref={this.componentRef}
                      name={site_name}
                      onClick={this.onClickHandler}
                    >
                      <img src={image} alt="" />
                      <div className="templateCover3">
                        <div
                          style={{
                            background: `rgba(0,0,0, 0.6)`,
                            width: "100%",
                            bottom: 70,
                            lineHeight: "60px",
                          }}
                          className="templateCover3Box"
                        >
                          <p
                            style={{
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
                                  : "white"
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
                            background: `rgba(0,0,0, 0.6)`,
                            width: "100%",
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
                                : "white"
                            }`,
                            background: `${
                              this.props.siteBackgroundColor
                                ? this.props.siteBackgroundColor
                                : "transparent"
                            }`,
                          }}
                          className="templateCover3BoxSmall"
                        >
                          <p>{site_name}</p>
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
