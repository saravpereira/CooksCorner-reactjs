import React from "react";
import Aux from "../../../hoc/Aux/Aux";

const imageUrl = (props) => {
  return (
    <Aux>
        <label>Image URL</label>
        <input
          className="Image"
          type="text"
          value={props.imageURL}
          onChange={(event) => props.handleImageUrlChange(event)}
        />
    </Aux>
  );
};

export default imageUrl;