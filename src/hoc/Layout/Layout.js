import React, { Component } from "react";
import Header from "../../components/Navigation/Header/Header"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header searchSpace={this.props.searchSpace} addNewRecipe={this.props.addNewRecipe}/>
        <Toolbar/>
        <main className="Content">{this.props.children}</main>
        
      </div>
    );
  }
}

export default Layout;
