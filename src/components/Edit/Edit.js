import React, { Component } from "react";

import "./Edit.css";

import ImageTemplate10 from "../../templates/template9/ImageTemplate10";

import { MdTextFormat, MdImage } from "react-icons/md";
import ImageTemplate9 from "../../templates/template9/ImageTemplate9";
import ImageTemplate8 from "../../templates/template8/ImageTemplate8";
import ImageTemplate4Black from "../../templates/template4/ImageTemplate4Black";
import ImageTemplate5Black from "../../templates/template5/ImageTemplate5Black";
import ImageTemplate6 from "../../templates/template6/ImageTemplate6";
import ImageTemplate1 from "../../templates/template1/ImageTemplate1";
import ImageTemplate2Black from "../../templates/template2/ImageTemplate2Black";
import ImageTemplate3 from "../../templates/template3/ImageTemplate3";

const FONT_COLOR_ARR = ["", "017B92", "FF6BB5", "5D21D0", "FDC1C5", "FFBACD"];
const BACK_COLOR_ARR = ["", "343837", "03719C", "0F9B8E", "C6FCFF", "FD5956"];

export default class Edit extends Component {
  state = {
    menuScreen: "text",
    titleFontSize: "",
    linkFontSize: "",
    titleFontColor: "",
    titleBackgroundColor: "",
    siteFontColor: "",
    siteBackgroundColor: "",
    title: "",
    imageLink: "",
    titleFontFamily: "",
    siteFontFamily: "",
    template: null,
  };
  componentDidMount() {
    console.log(this.props);
    this.setState({
      title: this.props.location.state.metaInfo.title,
      template: this.props.match.params.titleID,
    });
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeFontColor = (name, color) => {
    if (color === "#") {
      this.setState({ [name]: "" });
    } else {
      this.setState({ [name]: color });
    }
  };

  render() {
    let {
      menuScreen,
      titleFontSize,
      linkFontSize,
      titleFontColor,
      titleBackgroundColor,
      siteFontColor,
      title,
      imageLink,
      titleFontFamily,
      siteFontFamily,
      template,
      siteBackgroundColor,
    } = this.state;

    let menuScreenView = null;
    let templateView = null;

    switch (template) {
      case "template10":
        templateView = (
          <ImageTemplate10
            metaInfo={this.props.location.state.metaInfo}
            {...this.props}
            hideButtons={true}
            titleFontSize={titleFontSize}
            linkFontSize={linkFontSize}
            titleFontColor={titleFontColor}
            siteFontColor={siteFontColor}
            title={title}
            imageLink={imageLink}
            titleFontFamily={titleFontFamily}
            siteFontFamily={siteFontFamily}
            titleBackgroundColor={titleBackgroundColor}
            siteBackgroundColor={siteBackgroundColor}
          />
        );
        break;
      case "template9":
        templateView = (
          <ImageTemplate9
            metaInfo={this.props.location.state.metaInfo}
            {...this.props}
            hideButtons={true}
            titleFontSize={titleFontSize}
            linkFontSize={linkFontSize}
            titleFontColor={titleFontColor}
            siteFontColor={siteFontColor}
            title={title}
            imageLink={imageLink}
            titleFontFamily={titleFontFamily}
            siteFontFamily={siteFontFamily}
            titleBackgroundColor={titleBackgroundColor}
            siteBackgroundColor={siteBackgroundColor}
          />
        );
        break;

      case "template8":
        templateView = (
          <ImageTemplate8
            metaInfo={this.props.location.state.metaInfo}
            {...this.props}
            hideButtons={true}
            titleFontSize={titleFontSize}
            linkFontSize={linkFontSize}
            titleFontColor={titleFontColor}
            siteFontColor={siteFontColor}
            title={title}
            imageLink={imageLink}
            titleFontFamily={titleFontFamily}
            siteFontFamily={siteFontFamily}
            titleBackgroundColor={titleBackgroundColor}
            siteBackgroundColor={siteBackgroundColor}
          />
        );
        break;

      case "template4Black":
        templateView = (
          <ImageTemplate4Black
            metaInfo={this.props.location.state.metaInfo}
            {...this.props}
            hideButtons={true}
            titleFontSize={titleFontSize}
            linkFontSize={linkFontSize}
            titleFontColor={titleFontColor}
            siteFontColor={siteFontColor}
            title={title}
            imageLink={imageLink}
            titleFontFamily={titleFontFamily}
            siteFontFamily={siteFontFamily}
            titleBackgroundColor={titleBackgroundColor}
            siteBackgroundColor={siteBackgroundColor}
          />
        );
        break;

      case "template5Black":
        templateView = (
          <ImageTemplate5Black
            metaInfo={this.props.location.state.metaInfo}
            {...this.props}
            hideButtons={true}
            titleFontSize={titleFontSize}
            linkFontSize={linkFontSize}
            titleFontColor={titleFontColor}
            siteFontColor={siteFontColor}
            title={title}
            imageLink={imageLink}
            titleFontFamily={titleFontFamily}
            siteFontFamily={siteFontFamily}
            titleBackgroundColor={titleBackgroundColor}
            siteBackgroundColor={siteBackgroundColor}
          />
        );
        break;

      case "template6":
        templateView = (
          <ImageTemplate6
            metaInfo={this.props.location.state.metaInfo}
            {...this.props}
            hideButtons={true}
            titleFontSize={titleFontSize}
            linkFontSize={linkFontSize}
            titleFontColor={titleFontColor}
            siteFontColor={siteFontColor}
            title={title}
            imageLink={imageLink}
            titleFontFamily={titleFontFamily}
            siteFontFamily={siteFontFamily}
            titleBackgroundColor={titleBackgroundColor}
            siteBackgroundColor={siteBackgroundColor}
          />
        );
        break;

      case "template1":
        templateView = (
          <ImageTemplate1
            metaInfo={this.props.location.state.metaInfo}
            {...this.props}
            hideButtons={true}
            titleFontSize={titleFontSize}
            linkFontSize={linkFontSize}
            titleFontColor={titleFontColor}
            siteFontColor={siteFontColor}
            title={title}
            imageLink={imageLink}
            titleFontFamily={titleFontFamily}
            siteFontFamily={siteFontFamily}
            titleBackgroundColor={titleBackgroundColor}
            siteBackgroundColor={siteBackgroundColor}
          />
        );
        break;

      case "template2Black":
        templateView = (
          <ImageTemplate2Black
            metaInfo={this.props.location.state.metaInfo}
            {...this.props}
            hideButtons={true}
            titleFontSize={titleFontSize}
            linkFontSize={linkFontSize}
            titleFontColor={titleFontColor}
            siteFontColor={siteFontColor}
            title={title}
            imageLink={imageLink}
            titleFontFamily={titleFontFamily}
            siteFontFamily={siteFontFamily}
            titleBackgroundColor={titleBackgroundColor}
            siteBackgroundColor={siteBackgroundColor}
          />
        );
        break;

      case "template3":
        templateView = (
          <ImageTemplate3
            metaInfo={this.props.location.state.metaInfo}
            {...this.props}
            hideButtons={true}
            titleFontSize={titleFontSize}
            linkFontSize={linkFontSize}
            titleFontColor={titleFontColor}
            siteFontColor={siteFontColor}
            title={title}
            imageLink={imageLink}
            titleFontFamily={titleFontFamily}
            siteFontFamily={siteFontFamily}
            titleBackgroundColor={titleBackgroundColor}
            siteBackgroundColor={siteBackgroundColor}
          />
        );
        break;

      default:
        break;
    }

    if (menuScreen === "text") {
      let selectFontOptions = (
        <>
          <option value=""></option>
          <option value="Dancing Script">Dancing Script</option>
          <option value="Bebas Neue">Bebas Neue</option>
          <option value="Lora">Lora</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Woodland">Woodland</option>
          <option value="Gagalin">Gagalin</option>
          <option value="BodoniFLF">BodoniFLF</option>
          <option value="Antonio">Antonio</option>
          <option value="Poppins-Regular">Poppins-Regular</option>
          <option value="Poppins-SemiBold">Poppins-SemiBold</option>
          <option value="Yellowtail-Regular">Yellowtail-Regular</option>
          <option value="Montserrat-Light">Montserrat-Light</option>
          <option value="Poppins-Light">Poppins-Light</option>
          <option value="OpenSans-Bold">OpenSans-Bold</option>
        </>
      );

      menuScreenView = (
        <>
          <div style={{ margin: "30px 0" }}>
            <span className="editContentTitle">Title:</span>
            <div className="editContentRow">
              <input
                style={{ width: "100%", height: "30px", fontSize: "15px" }}
                name="title"
                type="text"
                value={title}
                onChange={this.onChangeHandler}
              />
            </div>
          </div>
          <div style={{ margin: "30px 0" }}>
            <span className="editContentTitle">Title font size:</span>
            <div className="editContentRow">
              <input
                id="typeinp"
                name="titleFontSize"
                type="range"
                min="0"
                max="100"
                value={titleFontSize}
                onChange={this.onChangeHandler}
                step="1"
              />
              <span>{titleFontSize}</span>
            </div>
          </div>
          <div style={{ margin: "30px 0" }}>
            <span className="editContentTitle">Title font color:</span>
            <div className="editContentRow">
              {FONT_COLOR_ARR.map((colorHex, index) => (
                <div
                  key={index}
                  style={{
                    width: 25,
                    height: 25,
                    background: `#${colorHex}`,
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "1px solid black",
                  }}
                  onClick={() =>
                    this.onChangeFontColor("titleFontColor", `#${colorHex}`)
                  }
                ></div>
              ))}
            </div>
          </div>
          <div style={{ margin: "30px 0" }}>
            <span className="editContentTitle">Title background color:</span>
            <div className="editContentRow">
              {BACK_COLOR_ARR.map((colorHex, index) => (
                <div
                  key={index}
                  style={{
                    width: 25,
                    height: 25,
                    background: `#${colorHex}`,
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "1px solid black",
                  }}
                  onClick={() =>
                    this.onChangeFontColor(
                      "titleBackgroundColor",
                      `#${colorHex}`
                    )
                  }
                ></div>
              ))}
            </div>
          </div>
          <div style={{ margin: "30px 0" }}>
            <span className="editContentTitle">Title font family:</span>
            <div className="editContentRow">
              <select
                name="titleFontFamily"
                id=""
                onChange={this.onChangeHandler}
                value={titleFontFamily}
                style={{ width: "100%", height: "30px", fontSize: "15px" }}
              >
                {selectFontOptions}
              </select>
            </div>
          </div>
          <div style={{ margin: "30px 0" }}>
            <span className="editContentTitle">Site font size:</span>
            <div className="editContentRow">
              <input
                id="typeinp"
                name="linkFontSize"
                type="range"
                min="0"
                max="100"
                value={linkFontSize}
                onChange={this.onChangeHandler}
                step="1"
              />
              <span>{linkFontSize}</span>
            </div>
          </div>
          <div style={{ margin: "30px 0" }}>
            <span className="editContentTitle">Site font color:</span>
            <div className="editContentRow">
              {FONT_COLOR_ARR.map((colorHex, index) => (
                <div
                  key={index}
                  style={{
                    width: 25,
                    height: 25,
                    background: `#${colorHex}`,
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "1px solid black",
                  }}
                  onClick={() =>
                    this.onChangeFontColor("siteFontColor", `#${colorHex}`)
                  }
                ></div>
              ))}
            </div>
          </div>
          <div style={{ margin: "30px 0" }}>
            <span className="editContentTitle">Site background color:</span>
            <div className="editContentRow">
              {BACK_COLOR_ARR.map((colorHex, index) => (
                <div
                  key={index}
                  style={{
                    width: 25,
                    height: 25,
                    background: `#${colorHex}`,
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "1px solid black",
                  }}
                  onClick={() =>
                    this.onChangeFontColor(
                      "siteBackgroundColor",
                      `#${colorHex}`
                    )
                  }
                ></div>
              ))}
            </div>
          </div>
          <div style={{ margin: "30px 0" }}>
            <span className="editContentTitle">Site font family:</span>
            <div className="editContentRow">
              <select
                name="siteFontFamily"
                id=""
                onChange={this.onChangeHandler}
                value={siteFontFamily}
                style={{ width: "100%", height: "30px", fontSize: "15px" }}
              >
                {selectFontOptions}
              </select>
            </div>
          </div>
        </>
      );
    } else if (menuScreen === "image") {
      menuScreenView = (
        <>
          <div>
            <span className="editContentTitle">Images:</span>
            <div style={{ overflow: "auto", height: "calc(100vh - 60px)" }}>
              {this.props.location.state.imageList.map((image, index) => (
                <div
                  key={index}
                  className="editImageListBox"
                  onClick={() => this.setState({ imageLink: image })}
                >
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    return (
      <div className="editRoot">
        <div className="editMenu">
          <div className="editSide">
            <div
              className="editSideMenuButton"
              onClick={() => this.setState({ menuScreen: "text" })}
            >
              <MdTextFormat size={30} />
            </div>
            <div
              className="editSideMenuButton"
              onClick={() => this.setState({ menuScreen: "image" })}
            >
              <MdImage size={30} />
            </div>
          </div>
          <div className="editMenuContent">{menuScreenView}</div>
        </div>
        <div className="editContent">{templateView}</div>
      </div>
    );
  }
}
