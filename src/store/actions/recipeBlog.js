import axios from "../../axios-posts"
import * as actionTypes from './actionTypes';

export const addNewRecipe = () => {
    return {
        type: actionTypes.ADD_NEW_RECIPE
    }
}

export const deletePost = () => {
    return {
        type: actionTypes.HANDLE_DELETE_POST
    }
}

export const editPost = () => {
    return {
        type: actionTypes.HANDLE_EDIT_POST
    }
}

export const postSelected = (id, displayedPost) => {
    return {
        type: actionTypes.POST_SELECTED,
        selectedPostID: id,
        viewingRecipe: displayedPost
    }
}

export const keywordSearch = (event) => {
    let keyword = event.target.value;
    return {
        type: actionTypes.SEARCH_SPACE,
        search: keyword
    }
}

export const showPostDialog = () => {
    return {
        type: actionTypes.SHOW_POST
    }
}

export const closePostDialog = () => {
    return {
        type: actionTypes.CLOSE_POST
    }
}

export const setPosts = (posts) => {
    return {
        type: actionTypes.SET_POSTS,
        posts: posts
    }
}

export const getAllPosts = () => {
    return dispatch => {
        axios.get("/recipes.json").then((response) => {
            const updatedPosts = [];
            for (let key in response.data) {
              const postObject = response.data[key];
              postObject["id"] = key;
              updatedPosts.push(postObject);
            }
            dispatch(setPosts(updatedPosts))
          });
    }
}