import React from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from './EmptyPage.module.css'

const emptyPage = (props) => {
  return (
    <div className={classes.EmptyContainer}>
      <h1 className={classes.Empty}>Uh oh... No recipes were found under that name!</h1>
      <p className={classes.EmptyMsg}>You can add this recipe to the collection by selecting <strong>Add a New Recipe</strong></p>
    </div>
  );
};

export default emptyPage;
