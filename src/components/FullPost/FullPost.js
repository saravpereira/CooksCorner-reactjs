import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import key from "../../data/key";
import DeleteButton from "../UI/Button/DeleteButton/DeleteButton";
import EditButton from "../UI/Button/EditButton/EditButton"
import classes from "./FullPost.module.css";

class FullPost extends Component {
  render() {
    return (
      <Aux>
        <h1 className={classes.Post}>{this.props.viewingRecipe.name}</h1>
        <h3 className={classes.Post}>Ingredients</h3>
        <ul>
          {this.props.viewingRecipe.ingredients && this.props.viewingRecipe.ingredients.map((ingredient) => {
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
          {this.props.viewingRecipe.steps && this.props.viewingRecipe.steps.map((step) => {
            return (
              <li key={key(10)} className={classes.Post}>
                {step}
              </li>
            );
          })}
        </ol>
        <DeleteButton handleDeletePost={this.props.handleDeletePost}/>
        <EditButton handleEdit={() => this.props.handleEditRecipe()}/>
      </Aux>
    );
  }
}

export default FullPost;
