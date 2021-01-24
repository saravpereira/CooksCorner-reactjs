import React from "react";

const imageUrl = (props) => {
  return (
    <React.Fragment>
        <label>Image URL</label>
        <input
          className="Image"
          type="text"
          value={props.imageURL}
          onChange={(event) => props.handleImageUrlChange(event)}
        />
    </React.Fragment>
  );
};

export default imageUrl;