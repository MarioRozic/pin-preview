import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import ImageTemplate1 from "./templates/template1/ImageTemplate1";
import ImageTemplate2 from "./templates/template2/ImageTemplate2";
import ImageTemplate3 from "./templates/template3/ImageTemplate3";

import Spinner from "./UI/Spinner/Spinner";
import Header from "./components/header/Header";
import Divider from "./UI/Divider/Divider";

import ImageTemplate1Black from "./templates/template1/ImageTemplate1Black";
import ImageTemplate1Reverse from "./templates/template1/ImageTemplate1Reverse";
import ImageTemplate2Black from "./templates/template2/ImageTemplate2Black";
import ImageTemplate2Reverse from "./templates/template2/ImageTemplate2Reverse";
import ImageTemplate3Black from "./templates/template3/ImageTemplate3Black";
import ImageTemplate3Reverse from "./templates/template3/ImageTemplate3Reverse";
import ImageTemplate4 from "./templates/template4/ImageTemplate4";
import ImageTemplate4Black from "./templates/template4/ImageTemplate4Black";
import ImageTemplate4Reverse from "./templates/template4/ImageTemplate4Reverse";
import ImageTemplate5 from "./templates/template5/ImageTemplate5";
import ImageTemplate5Black from "./templates/template5/ImageTemplate5Black";
import ImageTemplate5Reverse from "./templates/template5/ImageTemplate5Reverse";
import ImageTemplate6 from "./templates/template6/ImageTemplate6";
import ImageTemplate6Black from "./templates/template6/ImageTemplate6Black";
import ImageTemplate6Reverse from "./templates/template6/ImageTemplate6Reverse";
import ImageTemplate7 from "./templates/template7/ImageTemplate7";
import ImageTemplate7Black from "./templates/template7/ImageTemplate7Black";
import ImageTemplate7Reverse from "./templates/template7/ImageTemplate7Reverse";

const GOOGLE_PROXY_SERVER =
  "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";

class App extends Component {
  state = {
    loading: false,
    displayTemplate: false,
    metaInfo: {},
    imageList: [],
    selectedImage: 0,
  };

  async componentDidMount(req) {}

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  generateHandler = async (urlString) => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
    this.setState({ loading: true, displayTemplate: false });
    const html = await Axios({
      method: "GET",
      url: `https://cors-anywhere.herokuapp.com/${urlString}`,
    });

    var el = document.createElement("html");
    el.innerHTML = html.data;

    console.log(el);

    let metaTagsList = el.getElementsByTagName("meta");
    let metaInfo = {};

    for (let i = 0; i < metaTagsList.length; i++) {
      // console.log(metaTagsList[i]);
      if (metaTagsList[i].getAttribute("property") === "og:description") {
        metaInfo.description = metaTagsList[i].getAttribute("content");
      }

      if (metaTagsList[i].getAttribute("property") === "og:image") {
        metaInfo.image =
          GOOGLE_PROXY_SERVER +
          encodeURIComponent(metaTagsList[i].getAttribute("content"));
      }

      if (metaTagsList[i].getAttribute("property") === "og:title") {
        metaInfo.title = metaTagsList[i].getAttribute("content");
      }

      if (metaTagsList[i].getAttribute("property") === "og:url") {
        metaInfo.url = metaTagsList[i].getAttribute("content");
      }

      if (metaTagsList[i].getAttribute("property") === "og:site_name") {
        metaInfo.site_name = metaTagsList[i].getAttribute("content");
      }
    }

    let blockImages = el.getElementsByTagName("img");
    let imageList = [];

    imageList.push(metaInfo.image);

    for (let i = 0; i < blockImages.length; i++) {
      if (blockImages[i].getAttribute("class") !== null)
        if (blockImages[i].getAttribute("class").includes("wp-image")) {
          let exp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
          var regex = new RegExp(exp);
          let url = blockImages[i].getAttribute("src");

          if (url.match(regex)) {
            // src regular
            imageList.push(
              GOOGLE_PROXY_SERVER + blockImages[i].getAttribute("src")
            );
          } else {
            // data-src for lazyload
            imageList.push(
              GOOGLE_PROXY_SERVER + blockImages[i].getAttribute("data-src")
            );
          }
        }
    }

    // set meta obj
    this.setState(
      {
        loading: false,
        displayTemplate: true,
        metaInfo,
        imageList,
        urlString: "",
      },
      () => {
        window.scrollTo({
          top: 1000,
          behavior: "smooth",
        });
      }
    );
  };

  onSelectImageClick = (index) => {
    let { imageList, metaInfo } = this.state;
    let newMetaInfo = { ...metaInfo };
    newMetaInfo.image = imageList[index];

    this.setState({
      metaInfo: newMetaInfo,
      selectedImage: index,
    });
  };

  render() {
    let {
      loading,
      metaInfo,
      displayTemplate,
      imageList,
      selectedImage,
    } = this.state;
    let imageListView = [];
    imageList.forEach((image, index) => {
      if (index !== imageList.length - 1)
        imageListView.push(
          <div
            className="imageListItem"
            key={index}
            onClick={() => this.onSelectImageClick(index)}
            style={selectedImage === index ? { borderColor: "#f9004d" } : null}
          >
            <img src={image} alt={image} />
          </div>
        );
    });
    return (
      <>
        <div className="App">
          <Header generateHandler={this.generateHandler} />
          <div className="ContentInput">
            <div className="ContentTitle">
              <h2>Your templates</h2>
              <p>
                Enter URL from your blog. Hit subbmit to generate Pin-Flights
                templates. Click on image you want to download!
              </p>
            </div>
          </div>

          {loading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Spinner />
            </div>
          ) : displayTemplate ? (
            <>
              <div className="imageListView">{imageListView}</div>
              <Divider name="Athena" />
              <div className="appTemplateList">
                <ImageTemplate4 metaInfo={metaInfo} />
                <ImageTemplate4Black metaInfo={metaInfo} />
                <ImageTemplate4Reverse metaInfo={metaInfo} />
              </div>
              <Divider name="Hera" />
              <div className="appTemplateList">
                <ImageTemplate5 metaInfo={metaInfo} />
                <ImageTemplate5Black metaInfo={metaInfo} />
                <ImageTemplate5Reverse metaInfo={metaInfo} />
              </div>
              <Divider name="Artemis" />
              <div className="appTemplateList">
                <ImageTemplate6 metaInfo={metaInfo} />
                <ImageTemplate6Black metaInfo={metaInfo} />
                <ImageTemplate6Reverse metaInfo={metaInfo} />
              </div>
              <Divider name="Demeter" />
              <div className="appTemplateList">
                <ImageTemplate7 metaInfo={metaInfo} />
                <ImageTemplate7Black metaInfo={metaInfo} />
                <ImageTemplate7Reverse metaInfo={metaInfo} />
              </div>
              <Divider name="Aphrodite" />
              <div className="appTemplateList">
                <ImageTemplate1 metaInfo={metaInfo} />
                <ImageTemplate1Black metaInfo={metaInfo} />
                <ImageTemplate1Reverse metaInfo={metaInfo} />
              </div>
              <Divider name="Rhea" />
              <div className="appTemplateList">
                <ImageTemplate2 metaInfo={metaInfo} />
                <ImageTemplate2Black metaInfo={metaInfo} />
                <ImageTemplate2Reverse metaInfo={metaInfo} />
              </div>
              <Divider name="Leto" />
              <div className="appTemplateList">
                <ImageTemplate3 metaInfo={metaInfo} />
                <ImageTemplate3Black metaInfo={metaInfo} />
                <ImageTemplate3Reverse metaInfo={metaInfo} />
              </div>
            </>
          ) : null}

          <div className="footer">
            Copyright © 2020 Pin-Flights. All Rights Reserved.
          </div>
        </div>
      </>
    );
  }
}

export default App;
