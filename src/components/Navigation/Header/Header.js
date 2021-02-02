import React, { Component } from "react";
import { connect } from 'react-redux';
import classes from "./Header.module.css";
import Logo from "../Logo/Logo"
import * as actions from "../../../store/actions/index"

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className={classes.Header}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <form>
            <input
              className={classes.search}
              type="search"
              placeholder="Search Recipe"
              onChange={(e) => this.props.onKeywordSearch(e)}
            />
          </form>
          <button
              className={classes.btn}
              type="button"
              onClick={this.props.onAddNewRecipe}
            >
              <span className={classes.circle}>
                <span className={`${classes.icon} ${classes.arrow}`}></span>
              </span>

              <span className={classes.buttonText}>Add a New Recipe</span>
            </button>
          
        </header>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAddNewRecipe: () => dispatch(actions.addNewRecipe()),
      onKeywordSearch: (event) => dispatch(actions.keywordSearch(event)),
}
}


export default connect(null, mapDispatchToProps)(Header);
