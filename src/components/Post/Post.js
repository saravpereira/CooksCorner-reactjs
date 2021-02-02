import React from "react";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index" 
import "./Post.css";

const post = (props) => {

  const postSelectedHandler = (id) => {
    const displayedPost = props.posts.filter((post) => post.id === id);
    props.onSelectPost(id, displayedPost)
  };

  const handleClicks = () => {
    props.onShowPostDialog()
    postSelectedHandler(props.postID)
  };
  return (
    <React.Fragment>
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
                Read More
              </button>
            </div>
          </article>
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.recipeBlog.posts
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onSelectPost: (id, displayedPost) => dispatch(actions.postSelected(id, displayedPost)),
      onShowPostDialog: () => dispatch(actions.showPostDialog()),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(post);
