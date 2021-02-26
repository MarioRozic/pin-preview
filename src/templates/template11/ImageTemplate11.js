import React, { Component } from "react";
import Color from "color-thief-react";

import Spinner from "../../UI/Spinner/Spinner";
import { ReactComponent as Line } from "../../UI/svgIcons/GreenLine.svg";

import htmlToImage from "html-to-image";

export default class ImageTemplate11 extends Component {
  state = {
    svgColor: "57d561",
    titleArr: [],
  };

  componentRef = React.createRef();

  componentDidMount() {
    let { title } = this.props.metaInfo;
    let brojac = 0;
    let shortArr = [];
    let titleArr = [];
    let newTitle = title.split(" ");

    newTitle.forEach((word, index) => {
      console.log("word", word, brojac);
      if (brojac < 3) {
        shortArr.push(word);
        brojac++;
      } else {
        titleArr.push(shortArr.join(" "));
        brojac = 0;
        shortArr = [];
      }
    });
    titleArr.push(shortArr.join(" "));

    this.setState({ titleArr });
    console.log(titleArr);
  }

  onClickHandler = () => {
    let imageName = this.props.metaInfo.title.split(" ").join("-");

    htmlToImage
      .toJpeg(document.getElementById("template11"), { quality: 0.7 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `${imageName}.jpeg`;
        link.href = dataUrl;
        link.click();
      });
  };

  changeSvgHandler = (data) => {
    console.log("data");
    this.setState({ svgColor: data });
  };

  render() {
    let { image, title, site_name } = this.props.metaInfo;
    let { svgColor, titleArr } = this.state;

    console.log("svg", titleArr);

    let titleView = [];

    titleArr.forEach((value, index) => {
      console.log("value");
      if (index === 0) {
        titleView.push(
          <>
            <span
              key={index}
              style={{ fontFamily: `Montserrat-Light`, fontSize: "30px" }}
            >
              {value}
            </span>
            <br />
          </>
        );
      } else {
        titleView.push(
          <>
            <span
              key={index}
              style={
                index === 1
                  ? {
                      color: `#${svgColor}`,
                      fontFamily: `OpenSans-Bold`,
                      fontSize: "40px",
                    }
                  : {
                      fontFamily: `Poppins-Light`,
                      fontSize: "25px",
                      color: "#6C6C6C",
                    }
              }
            >
              {value}
            </span>
            <br />
          </>
        );
      }
    });

    return (
      <>
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
                  id="template11"
                  className="templateBox"
                  ref={this.componentRef}
                  name={site_name}
                  onClick={this.onClickHandler}
                >
                  <img src={image} alt="" style={{ paddingBottom: "320px" }} />
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/templates/Pozadina.png`}
                    alt=""
                    style={{
                      position: "absolute",
                      left: "1px",
                      bottom: "-100px",
                      objectFit: "fill",
                      boxSizing: "border-box",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      bottom: "216px",
                      width: "100%",
                    }}
                  >
                    <Line width="100%" fill={`#${svgColor}`} />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "300px",
                      position: "absolute",
                      bottom: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Yellowtail-Regular",
                          width: "500px",
                          textAlign: "center",
                        }}
                      >
                        {titleView}
                      </div>
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
                          fontFamily: "Poppins-Regular",
                          fontSize: "20px",
                          width: "280px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          background: `#${svgColor}`,
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
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                background: "#FFAB0F",
                cursor: "pointer",
              }}
              onClick={() => this.changeSvgHandler("FFAB0F")}
            ></div>
            <div
              style={{
                width: "50px",
                height: "50px",
                background: "#247AFD",
                cursor: "pointer",
              }}
              onClick={() => this.changeSvgHandler("247AFD")}
            ></div>
            <div
              style={{
                width: "50px",
                height: "50px",
                background: "#FE46A5",
                cursor: "pointer",
              }}
              onClick={() => this.changeSvgHandler("FE46A5")}
            ></div>
          </div>
        </div>
      </>
    );
  }
}
