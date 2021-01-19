import React, { Component } from "react";
import "./Toolbar.css";
import Logo from "../Logo/Logo";
import Aux from "../../../hoc/Aux/Aux";

class Toolbar extends Component {
  render() {
    return (
      <Aux>
        <div>
           <nav>
          <Logo className="Logo" />
          <ul className="nav">
            <button className="btn btn-outline-dark btn-lg" type="button" onClick={this.props.addNewRecipe}>
              Add a New Recipe
            </button>
          </ul>
          <ul className="nav flex-column">
          <input
              type="search"
              placeholder="Search Recipe"
              onChange={(e) => this.props.searchSpace(e)}
            />
          </ul>
        </nav>
        </div>
       
        
        {/* <header className="Toolbar">
          <nav className="DesktopOnly">
            <Logo className="Logo" />
          </nav>
          <button className="btn btn-outline-dark btn-lg" type="button" onClick={this.props.addNewRecipe}>
            Add a New Recipe
          </button>
          <form>
            <input
              type="search"
              placeholder="Search Recipe"
              onChange={(e) => this.props.searchSpace(e)}
            />
          </form>
        </header> */}
      </Aux>
    );
  }
}

export default Toolbar;
