import React, {Component} from 'react'
import { connect } from 'react-redux';
import "./Modal.css"
import Backdrop from '../Backdrop/Backdrop'
import * as actions from "../../../store/actions/index"

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    handleCloseDialog(){
        this.props.onClosePostDialog()
        this.props.onCloseEditDialog()
        
    }
    render() {
        return(
            <React.Fragment>
                <Backdrop 
                    show={this.props.show}
                    clicked = {() => this.handleCloseDialog()}
                    />
            <div className="Modal"
            style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'}}>
                {this.props.children}
            </div> 
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onClosePostDialog: () => dispatch(actions.closePostDialog()),
        onCloseEditDialog: () => dispatch(actions.closeEditDialog()),
  }
  }

export default connect(null, mapDispatchToProps)(Modal)