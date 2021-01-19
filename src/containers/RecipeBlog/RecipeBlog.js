import React, { Component } from "react";
import Post from "../../components/Post/Post";
import data from "../../data/data";
import Aux from "../../hoc/Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";
import FullPost from "../../components/FullPost/FullPost";
import Layout from "../../hoc/Layout/Layout";
import EmptyPage from "../../components/EmptyPage/EmptyPage";
import AddNewRecipe from "../../components/AddNewRecipe/AddNewRecipe"

class RecipeBlog extends Component {
  state = {
    posts: [...data],
    showPost: false,
    addNewRecipe: false,
    selectedPostID: null,
    viewingRecipe: [],
    search: null,
  };

  showPostHandler = () => {
    this.setState({ showPost: true });
  };

  closePostHandler = () => {
    this.setState({ showPost: false })
    this.setState({ addNewRecipe: false })
  };

  addNewRecipeHandler = () => {
    this.setState({ addNewRecipe: true });
  };

  postSelectedHandler = (id) => {
    const displayedPost = this.state.posts.filter((post) => post.id === id);
    this.setState({ selectedPostID: id, viewingRecipe: displayedPost });
  };

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  handleAddNewPost = (payload) => {
    this.setState((prevState) => ({
      posts: prevState.posts.concat([payload]),
    }));
  }

  render() {
    const posts = this.state.posts
      .filter((data) => {
        if (this.state.search == null) return data;
        else if (
          data.name.toLowerCase().includes(this.state.search.toLowerCase())
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
            readMore={this.showPostHandler}
            postID={() => this.postSelectedHandler(post.id)}
          />
        );
      });

    const emptyResult = posts.length === 0;

    const recipeSelected = this.state.viewingRecipe.length > 0;
    return (
      <Aux>
        <Layout
          searchSpace={this.searchSpace}
          addNewRecipe={this.addNewRecipeHandler}
        />
        {posts}
        {emptyResult && <EmptyPage />}

        {this.state.addNewRecipe &&
            <Modal
            show={true}
            modalClosed={this.closePostHandler}
            >
                <AddNewRecipe addPost={this.handleAddNewPost} closeDialog={this.closePostHandler}/>
            </Modal>
        }

        <Modal
          show={this.state.showPost}
          modalClosed={this.closePostHandler}
        >
          {recipeSelected && (
            <FullPost viewingRecipe={this.state.viewingRecipe[0]} />
          )}

        </Modal>
      </Aux>
    );
  }
}

export default RecipeBlog;
