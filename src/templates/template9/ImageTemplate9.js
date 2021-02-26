import React, { Component } from "react";
import Color from "color-thief-react";

import Spinner from "../../UI/Spinner/Spinner";

import htmlToImage from "html-to-image";

export default class ImageTemplate9 extends Component {
  state = {
    titleFontSize: 30,
    linkFontSize: 20,
    titleFontFamily: "Poppins-SemiBold",
    siteFontFamily: "Poppins-Regular",
  };
  componentRef = React.createRef();

  onClickHandler = () => {
    let imageName = this.props.metaInfo.title.split(" ").join("-");

    htmlToImage
      .toJpeg(document.getElementById("template9"), { quality: 0.7 })
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
      pathname: `/edit/template9`,
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
                id="template9"
                className="templateBox"
                ref={this.componentRef}
                name={site_name}
                onClick={this.onClickHandler}
              >
                <img src={image} alt="" style={{ paddingBottom: "260px" }} />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/templates/Rectangle_1.png`}
                  alt=""
                  style={{
                    position: "absolute",
                    left: "1px",
                    bottom: "-155px",
                    objectFit: "contain",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    height: "360px",
                    position: "absolute",
                    bottom: 0,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
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
                        width: "300px",
                        textAlign: "center",
                        borderTop: "2px solid black",
                        borderBottom: "2px solid black",
                        color: `${
                          this.props.titleFontColor
                            ? this.props.titleFontColor
                            : "black"
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
                      position: "absolute",
                      bottom: "30px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: this.props.siteFontFamily
                          ? this.props.siteFontFamily
                          : siteFontFamily,
                        fontSize: `${
                          this.props.linkFontSize
                            ? this.props.linkFontSize
                            : linkFontSize
                        }px`,
                        background: "#3C7164",
                        borderRadius: "8px",
                        width: "280px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: `${
                          this.props.siteFontColor
                            ? this.props.siteFontColor
                            : "black"
                        }`,
                        background: `${
                          this.props.siteBackgroundColor
                            ? this.props.siteBackgroundColor
                            : "transparent"
                        }`,
                      }}
                    >
                      {site_name}
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
