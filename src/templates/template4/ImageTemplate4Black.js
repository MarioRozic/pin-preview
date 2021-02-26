import React, { Component } from "react";
import Color from "color-thief-react";

import "./ImageTemplate4.css";

import Spinner from "../../UI/Spinner/Spinner";

import htmlToImage from "html-to-image";

export default class ImageTemplate4Black extends Component {
  state = {
    titleFontSize: 70,
    linkFontSize: 45,
    titleFontFamily: "Woodland",
    siteFontFamily: "Woodland",
  };
  componentRef = React.createRef();

  onClickHandler = () => {
    let imageName = this.props.metaInfo.title.split(" ").join("-");

    htmlToImage
      .toJpeg(document.getElementById("template4Black"), { quality: 0.7 })
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
      pathname: `/edit/template4Black`,
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
                id="template4Black"
                className="templateBox"
                ref={this.componentRef}
                name={site_name}
                onClick={this.onClickHandler}
              >
                <img src={image} alt="" />
                <div
                  className="templateCoverHover"
                  style={{
                    // background: `linear-gradient(to bottom, rgba(${data[0]},${data[1]},${data[2]}, 0) 0%,rgba(${data[0]},${data[1]},${data[2]}, 1) 50%)`,
                    background: ` rgba(0,0,0, 50%) `,
                  }}
                >
                  <div
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      marginBottom: 50,
                    }}
                  >
                    <div className="templateCoverHoverText">
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
                          margin: "20px 10px",
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
                    <div className="templateCoverHoverTextTop">
                      <p
                        style={{
                          margin: "10px 0",
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
                  </div>
                </div>
              </div>
            );
          }}
        </Color>
        <div>
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
      </div>
    );
  }
}
