import React, { Component } from "react";
import Color from "color-thief-react";
import { Palette } from "color-thief-react";

import "./ImageTemplate3.css";

import { exportComponentAsJPEG } from "react-component-export-image";
import Spinner from "../../UI/Spinner/Spinner";

export default class ImageTemplate2 extends Component {
  componentRef = React.createRef();

  render() {
    let { image, title, site_name } = this.props.metaInfo;
    return (
      <div className="template">
        <Color
          src={image}
          //   src="https://images.unsplash.com/photo-1598609456165-a57afb2fb2ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          crossOrigin="anonymous"
          format="hex"
        >
          {({ data, loading, error }) => {
            console.log(data);
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
                  console.log("palette", paletteData);
                  if (paletteLoading)
                    return (
                      <div className="templateLoading">
                        <Spinner />
                      </div>
                    );
                  if (paletteError) return <p>{paletteError.message}</p>;
                  return (
                    <div
                      className="templateBox"
                      ref={this.componentRef}
                      name={site_name}
                    >
                      <img src={image} alt="" />
                      <div className="templateCover3">
                        <div
                          style={{ background: data }}
                          className="templateCover3Box"
                        >
                          <p>{title}</p>
                        </div>
                        <div
                          style={{ background: paletteData[1] }}
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
        <div>
          <button
            onClick={() => exportComponentAsJPEG(this.componentRef, "slika")}
          >
            Export As JPEG
          </button>
        </div>
      </div>
    );
  }
}
