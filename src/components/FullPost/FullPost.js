import React, { Component } from "react";
import { connect } from "react-redux";
import key from "../../data/key";
import DeleteButton from "../UI/Button/DeleteButton/DeleteButton";
import EditButton from "../UI/Button/EditButton/EditButton"
import classes from "./FullPost.module.css";
import * as actions from "../../store/actions/index"
import axios from "../../axios-posts"

class FullPost extends Component {
  handleDeletePost = () => {
    axios
      .delete("/recipes/" + this.props.selectedPostID + ".json")
      .then((response) => {
        this.props.onGetAllPosts();
        this.props.onDeletePost();
      });
  };
  render() {
    return (
      <React.Fragment>
        <h1 className={classes.Post}>{this.props.viewingRecipe[0].name}</h1>
        <h3 className={classes.Post}>Ingredients</h3>
        <ul>
          {this.props.viewingRecipe[0].ingredients && this.props.viewingRecipe[0].ingredients.map((ingredient) => {
            return (
              <li key={key(10)} className={classes.Post}>
                {ingredient}
              </li>
            );
          })}
        </ul>
        <hr />
        <h3 className={classes.Post}>Steps</h3>
        <ol>
          {this.props.viewingRecipe[0].steps && this.props.viewingRecipe[0].steps.map((step) => {
            return (
              <li key={key(10)} className={classes.Post}>
                {step}
              </li>
            );
          })}
        </ol>
        <DeleteButton handleDeletePost={this.handleDeletePost}/>
        <EditButton handleEdit={() => this.props.onEditPost()}/>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedPostID: state.recipeBlog.selectedPostID,
    viewingRecipe: state.recipeBlog.viewingRecipe
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePost: () => dispatch(actions.deletePost()),
    onEditPost: () => dispatch(actions.editPost()),
    onGetAllPosts: () => dispatch(actions.getAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
