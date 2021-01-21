import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import key from "../../data/key";
import DeleteRecipe from "../ModifyRecipe/DeleteRecipe/DeleteRecipe"
import classes from "./FullPost.module.css";

class FullPost extends Component {
  render() {
    return (
      <Aux>
        <h1 className={classes.Post}>{this.props.viewingRecipe.name}</h1>
        <h3 className={classes.Post}>Ingredients</h3>
        <ul>
          {this.props.viewingRecipe.ingredients.map((ingredient) => {
            return (
              <li key={key(10)} className={classes.Post}>
                {ingredient}
              </li>
            );
          })}
        </ul>
        <hr />
        <h3 className={classes.Post}>Steps</h3>
        <ol>
          {this.props.viewingRecipe.steps.map((step) => {
            return (
              <li key={key(10)} className={classes.Post}>
                {step}
              </li>
            );
          })}
        </ol>
        <DeleteRecipe handleDeletePost={this.props.handleDeletePost}/>
      </Aux>
    );
  }
}

export default FullPost;
