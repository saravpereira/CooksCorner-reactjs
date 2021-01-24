import React, { Component } from "react";
import {Route} from "react-router-dom"
import RecipeBlog from "./containers/RecipeBlog/RecipeBlog";


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={RecipeBlog} />
      </div>
    );
  }
}

export default App;
