import React from "react";
import Aux from "../../hoc/Aux/Aux";
import "./Post.css";

const post = (props) => {
  const handleClicks = () => {
    props.readMore();
    props.postID();
  };
  return (
    <Aux>
      <section id="one" className="wrapper style1">
        <div className="inner">
          <article className="feature left">
            <span className="image">
              <img src={props.imageURL} alt="" />
            </span>
            <div className="content">
              <h2>{props.name}</h2>
              <p>
                {props.description}
              </p>
              <button className="button alt" onClick={handleClicks}>
                More
              </button>
            </div>
          </article>
        </div>
      </section>
    </Aux>
  );
};

export default post;
