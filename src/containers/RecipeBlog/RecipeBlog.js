import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "../../components/Post/Post";
import Modal from "../../components/UI/Modal/Modal";
import FullPost from "../../components/FullPost/FullPost";
import Layout from "../../hoc/Layout/Layout";
import EmptyPage from "../../components/EmptyPage/EmptyPage";
import AddEditRecipe from "../../components/AddEditRecipe/AddEditRecipe";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

class RecipeBlog extends Component {
  componentDidMount() {
    this.props.onGetAllPosts();
  }

  render() {
    const posts = this.props.posts
      .filter((data) => {
        if (this.props.search == null) return data;
        else if (
          data.name.toLowerCase().includes(this.props.search.toLowerCase())
        ) {
          return data;
        }
      })
      .map((post, i) => {
        return (
          <Post
            key={i}
            name={post.name}
            imageURL={post.imageURL}
            description={post.description}
            postID={post.id}
          />
        );
      });

    const emptyResult = posts.length === 0;

    const recipeSelected = this.props.viewingRecipe.length > 0;
    return (
      <React.Fragment>
        <Layout />
        {this.props.loading ? <Spinner /> : posts}
        {emptyResult && this.props.search && <EmptyPage />}

        {(this.props.addNewRecipe || this.props.editRecipe) && (
          <Modal show={true}>
            <AddEditRecipe />
          </Modal>
        )}
        <Modal show={this.props.showPost}>
          {recipeSelected && (
            <FullPost />
          )}
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.recipeBlog.posts,
    showPost: state.recipeBlog.showPost,
    addNewRecipe: state.recipeBlog.addNewRecipe,
    editRecipe: state.recipeBlog.editRecipe,
    selectedPostID: state.recipeBlog.selectedPostID,
    viewingRecipe: state.recipeBlog.viewingRecipe,
    search: state.recipeBlog.search,
    loading: state.recipeBlog.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllPosts: () => dispatch(actions.getAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBlog);
