import React, { Component } from "react";
import classes from "./Header.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Logo from "../Logo/Logo"

class Header extends Component {
  render() {
    return (
      <Aux>
        <header className={classes.Header}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <form>
            <input
              className={classes.search}
              type="search"
              placeholder="Search Recipe"
              onChange={(e) => this.props.searchSpace(e)}
            />
          </form>
          <button
              className={classes.btn}
              type="button"
              onClick={this.props.addNewRecipe}
            >
              <span className={classes.circle}>
                <span className={`${classes.icon} ${classes.arrow}`}></span>
              </span>

              <span className={classes.buttonText}>Add a New Recipe</span>
            </button>
          
        </header>
      </Aux>
    );
  }
}

export default Header;
