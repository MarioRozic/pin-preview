import React, { Component } from "react";

import { withRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Edit from "./components/Edit/Edit";

class _layout extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/edit/:titleID" component={Edit} />
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(_layout);
