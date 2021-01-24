import React from "react";
import classes from "../RecipeFormInputs.module.css"

const imageUrl = (props) => {
  return (
    <React.Fragment>
        <label>Image URL</label>
        <input
          className={classes.Image}
          type="text"
          value={props.imageURL}
          onChange={(event) => props.handleImageUrlChange(event)}
        />
    </React.Fragment>
  );
};

export default imageUrl;