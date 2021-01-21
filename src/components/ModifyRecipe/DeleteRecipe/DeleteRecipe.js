import React from 'react';
import './DeleteRecipe.module.css'

const deleteRecipe = (props) => (
    <button className="btn btn-danger" onClick={() => props.handleDeletePost()}>Delete Recipe</button>
)

export default deleteRecipe