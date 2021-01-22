import React from 'react';
import localStyles from './DeleteRecipe.module.css'
import globalStyles from '../../../assets/global-styles/bootstrap.min.module.css'
import cx from 'classnames'

const deleteRecipe = (props) => (
    <button className={cx(globalStyles.btn, globalStyles['btn-danger'], localStyles.btn)} onClick={() => props.handleDeletePost()}>Delete Recipe</button>
)

export default deleteRecipe