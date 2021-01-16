import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import data from '../../data/data'
import Aux from "../../hoc/Aux/Aux"
import Modal from "../../components/UI/Modal/Modal"

class RecipeBlog extends Component {
    state = {
        posts: [...data],
        showPost: false
    }

    showPostHandler = () => {
        this.setState({showPost: true})
    }

    closePostHandler = () => {
        this.setState({showPost: false})
    }


    render(){
        const posts = this.state.posts.map(post => {
            return <Post 
                key = {post.id}
                name = {post.name}
                imageURL = {post.imageURL}
                readMore = {this.showPostHandler}
            />
        })
        return (
            <Aux>
                <Modal show={this.state.showPost} modalClosed={this.closePostHandler}></Modal>
                {posts}
            </Aux>
            
        )
    }
}

export default RecipeBlog