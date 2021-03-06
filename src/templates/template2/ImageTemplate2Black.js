import React, { Component } from "react";
import Color from "color-thief-react";

import "./ImageTemplate2.css";

import Spinner from "../../UI/Spinner/Spinner";
import htmlToImage from "html-to-image";

export default class ImageTemplate2Black extends Component {
  state = {
    titleFontSize: 45,
    linkFontSize: 15,
    titleFontFamily: "Montserrat",
    siteFontFamily: "Montserrat",
  };
  componentRef = React.createRef();

  componentDidMount() {
    let { title } = this.props.metaInfo;
    let fontSize = 35;

    if (title.length <= 40) {
      fontSize = 48;
    } else if (title.length <= 50) {
      fontSize = 43;
    } else if (title.length <= 60) {
      fontSize = 38;
    } else if (title.length <= 70) {
      fontSize = 33;
    }

    this.setState({
      titleFontSize: fontSize,
    });
  }

  onClickHandler = () => {
    let imageName = this.props.metaInfo.title.split(" ").join("-");

    htmlToImage
      .toJpeg(document.getElementById("template2Black"), { quality: 0.7 })
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
      pathname: `/edit/template2Black`,
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
              <div
                id="template2Black"
                className="templateBox"
                ref={this.componentRef}
                name={site_name}
                style={{ overflow: "hidden" }}
                onClick={this.onClickHandler}
              >
                <img src={image} alt="" style={{ paddingTop: "150px" }} />
                <div
                  className="templateCover2"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 74%)`,
                  }}
                >
                  <div className="templateCoverText2">
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
