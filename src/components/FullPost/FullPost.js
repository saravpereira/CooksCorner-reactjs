import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import key from "../../data/key";
import "./FullPost.css";

class FullPost extends Component {
  render() {
    return (
      <Aux>
        <h1 className="Post">{this.props.viewingRecipe.name}</h1>
        <h3 className="Post">Ingredients</h3>
        <ul>
          {this.props.viewingRecipe.ingredients.map((ingredient) => {
            return (
              <li key={key(10)} className="Post">
                {ingredient}
                {/* {ingredient.quantity} {ingredient.name} */}
              </li>
            );
          })}
        </ul>
        <hr />
        <h3 className="Post">Steps</h3>
        <ol>
          {this.props.viewingRecipe.steps.map((step) => {
            return (
              <li key={key(10)} className="Post">
                {step}
              </li>
            );
          })}
        </ol>
      </Aux>
    );
  }
}

export default FullPost;
