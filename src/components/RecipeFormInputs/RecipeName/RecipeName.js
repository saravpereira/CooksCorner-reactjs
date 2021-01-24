import React from "react";

const recipeName = (props) => {
  return (
    <React.Fragment>
      <h1>Add a New Recipe</h1>
      <label>Recipe Name</label>
      <input
        className="RecipeName"
        type="text"
        value={props.recipeName}
        onChange={(event) => props.handleRecipeNameChange(event)}
      />
    </React.Fragment>
  );
};

export default recipeName;
