import React from 'react';
import './Logo.css';
import LogoIcon from '../../../assets/Logo.png'

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={LogoIcon} alt="MyRecipe"/>
    </div>
)

export default logo