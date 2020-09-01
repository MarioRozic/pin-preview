import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import ImageTemplate1 from "./templates/template1/ImageTemplate1";
import ImageTemplate2 from "./templates/template2/ImageTemplate2";
import ImageTemplate3 from "./templates/template3/ImageTemplate3";

import Spinner from "./UI/Spinner/Spinner";
import ImageTemplate1Black from "./templates/template1/ImageTemplate1Black";
import ImageTemplate1Reverse from "./templates/template1/ImageTemplate1Reverse";
import ImageTemplate2Black from "./templates/template2/ImageTemplate2Black";
import ImageTemplate2Reverse from "./templates/template2/ImageTemplate2Reverse";
import ImageTemplate3Black from "./templates/template3/ImageTemplate3Black";
import ImageTemplate3Reverse from "./templates/template3/ImageTemplate3Reverse";

const GOOGLE_PROXY_SERVER =
  "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";

class App extends Component {
  state = {
    loading: false,
    displayTemplate: false,
    urlString: "",
    metaInfo: {},
  };

  async componentDidMount(req) {}

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  generateHandler = async () => {
    let { urlString } = this.state;
    this.setState({ loading: true, displayTemplate: false });
    const html = await Axios({
      method: "GET",
      url: `https://cors-anywhere.herokuapp.com/${urlString}`,
    });

    var el = document.createElement("html");
    el.innerHTML = html.data;

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

    // set meta obj
    this.setState({
      loading: false,
      displayTemplate: true,
      metaInfo,
      urlString: "",
    });
  };

  render() {
    let { loading, metaInfo, displayTemplate } = this.state;
    return (
      <div className="App">
        <div style={{ padding: "50px" }}>
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.urlString}
            name="urlString"
          />
          <button onClick={this.generateHandler}>Generate</button>
        </div>

        {loading ? (
          <Spinner />
        ) : displayTemplate ? (
          <>
            <div className="appTemplateList">
              <ImageTemplate1 metaInfo={metaInfo} />
              <ImageTemplate1Black metaInfo={metaInfo} />
              <ImageTemplate1Reverse metaInfo={metaInfo} />
            </div>
            <div className="appTemplateList">
              <ImageTemplate2 metaInfo={metaInfo} />
              <ImageTemplate2Black metaInfo={metaInfo} />
              <ImageTemplate2Reverse metaInfo={metaInfo} />
            </div>
            <div className="appTemplateList">
              <ImageTemplate3 metaInfo={metaInfo} />
              <ImageTemplate3Black metaInfo={metaInfo} />
              <ImageTemplate3Reverse metaInfo={metaInfo} />
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

export default App;
