import React from 'react';
import localStyles from './DeleteButton.module.css'
import globalStyles from "../../../../assets/global-styles/bootstrap.min.module.css"
import cx from 'classnames'

const deleteButton = (props) => (
    <button className={cx(globalStyles.btn, globalStyles['btn-danger'], localStyles.btn)} onClick={() => props.handleDeletePost()}>Delete Recipe</button>
)

export default deleteButton