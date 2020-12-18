import React from "react";

import "./Divider.css";

export default function Divider({ name }) {
  return (
    <div className="dividerRoot">
      <div className="dividerLine"></div>
      <div className="dividerBox">
        <div className="dividerShape"></div>
        <div className="dividerTextBox">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
}
