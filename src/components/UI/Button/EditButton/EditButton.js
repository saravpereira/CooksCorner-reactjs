import React from 'react';
import globalStyles from "../../../../assets/global-styles/bootstrap.min.module.css"
import cx from 'classnames'

const editButton = (props) => (
    <button className={cx(globalStyles.btn, globalStyles['btn-secondary'])} onClick={() => props.handleEdit()}>Edit Recipe</button>
)

export default editButton