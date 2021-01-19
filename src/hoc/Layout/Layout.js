import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar searchSpace={this.props.searchSpace} addNewRecipe={this.props.addNewRecipe} />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
