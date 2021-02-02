import React, { Component } from "react";
import Header from "../../components/Navigation/Header/Header";
import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="Content">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
