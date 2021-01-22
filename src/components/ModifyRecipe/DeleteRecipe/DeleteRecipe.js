import React from 'react';
import classes from './DeleteRecipe.module.css'

const deleteRecipe = (props) => (
    <button className={classes.btn} onClick={() => props.handleDeletePost()}>Delete Recipe</button>
)

export default deleteRecipe