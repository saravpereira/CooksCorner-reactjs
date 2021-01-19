import React from "react";
import Aux from "../../../hoc/Aux/Aux";

const recipeName = (props) => {
  return (
    <Aux>
      <h1>Add a New Recipe</h1>
      <label>Recipe Name</label>
      <input
        className="RecipeName"
        type="text"
        value={props.recipeName}
        onChange={(event) => props.handleRecipeNameChange(event)}
      />
    </Aux>
  );
};

export default recipeName;
