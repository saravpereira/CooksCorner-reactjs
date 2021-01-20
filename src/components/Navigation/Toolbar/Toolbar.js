import React, { Component } from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import Aux from "../../../hoc/Aux/Aux";

class Toolbar extends Component {
  render() {
    return (
      <Aux>
        <nav>
          <Logo className={classes.Logo} />
            
        </nav>
      </Aux>
    );
  }
}

export default Toolbar;
