import React from "react";
import key from "../../../data/key";
import classes from "../RecipeFormInputs.module.css"

const ingredients = (props) => {
  return (
    <React.Fragment>
      <label>Ingredients</label>
      {props.ingredientInputs.map((input, i) => {
        return (
          <section key={i}>
            <input
              className={classes.Ingredient}
              key={i}
              type="text"
              size="20"
              onChange={(event) => props.handleIngredientChange(i, event)}
              value={props.ingredients[i] || ""}
            />
            <button
              className="btn btn-warning"
              key={key(100)}
              onClick={() => props.removeIngredient(i)}
            >
              Remove
            </button>
          </section>
        );
      })}
      <button className={classes.Add} onClick={() => props.appendIngredientInput()}>
        Add Ingredient
      </button>
    </React.Fragment>
  );
};

export default ingredients;
