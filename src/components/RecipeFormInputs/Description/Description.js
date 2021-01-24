import React from "react";

const description = (props) => {
  return (
    <React.Fragment>
      <label>Recipe Description</label>
      <textarea 
          value={props.recipeDescription}
          onChange={(event) => props.handleRecipeDescriptionChange(event)}
          rows="4" cols="150"
      />
    </React.Fragment>
  );
};

export default description;