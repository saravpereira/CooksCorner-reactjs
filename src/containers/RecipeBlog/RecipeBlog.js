import React, { Component } from "react";
import Post from "../../components/Post/Post";
import Aux from "../../hoc/Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";
import FullPost from "../../components/FullPost/FullPost";
import Layout from "../../hoc/Layout/Layout";
import EmptyPage from "../../components/EmptyPage/EmptyPage";
import AddNewRecipe from "../../components/AddNewRecipe/AddNewRecipe"
import axios from "../../axios-posts"
import Spinner from "../../components/UI/Spinner/Spinner"

class RecipeBlog extends Component {
  state = {
    posts: [],
    showPost: false,
    addNewRecipe: false,
    selectedPostID: null,
    viewingRecipe: [],
    search: null,
    loading: true,
  };

  handleGetPosts () {
    axios.get("/recipes.json")
      .then(response => {
        const updatedPosts = []
        for(let key in response.data) {
          const postObject = response.data[key]
          postObject["id"] = key
          updatedPosts.push(postObject)
        }
        this.setState({posts: updatedPosts, loading: false})
      })
  }

  componentDidMount () {
    this.handleGetPosts()
  }

  showPostHandler = () => {
    this.setState({ showPost: true });
  };

  closePostHandler = () => {
    this.setState({ showPost: false, selectedPostID: null, viewingRecipe: []})
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
    axios.post('/recipes.json', payload)
        .then(response => {
            this.handleGetPosts()
          })
  }

  handleDeletePost = () => {
    axios.delete("/recipes/"+this.state.selectedPostID+".json")
        .then(response => {
          this.handleGetPosts()
          this.setState({ selectedPostID: null, viewingRecipe:[], showPost: false})
          console.log(this.state.posts)
        })
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
        {this.state.loading ? <Spinner/> : posts}
        {(emptyResult && this.state.search) && <EmptyPage />}

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
            <FullPost viewingRecipe={this.state.viewingRecipe[0]} handleDeletePost={this.handleDeletePost}/>
          )}
        </Modal>
        {console.log(this.state)}
      </Aux>
    );
  }
}

export default RecipeBlog;
