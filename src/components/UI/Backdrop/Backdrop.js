import React from "react";
import { connect } from 'react-redux';
import * as actions from "../../../store/actions/index"
import "./Backdrop.css";


const backdrop = (props) =>
  props.show ? <div className="Backdrop" onClick={() => props.clicked()}></div> : null;

  
export default backdrop;
