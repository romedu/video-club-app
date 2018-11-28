import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {clearMessage} from "../../../store/actions/message";
import Class from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
   closeModalHandler = () => {
      const {history, location, onMessageClear} = this.props;
      onMessageClear();
      if(location.pathname === "/auth/login" || location.pathname === "/auth/register") return;
      else if(location.pathname === "/movies") history.push("/");
      else history.goBack();
   }

   render(){
      const styles = {
         transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
         opacity: this.props.show ? 1 : 0
      };
   
      return (
         <Fragment>
            <Backdrop hide={this.closeModalHandler} show={this.props.show}/>
            <div className={Class.Modal} style={styles}>
               <h3> {this.props.label} </h3>
               {this.props.children}
            </div>
         </Fragment>
      );
   }
};

const mapDispatchToProps = dispatch => ({
   onMessageClear: () => dispatch(clearMessage)
});

export default connect(null, mapDispatchToProps)(withRouter(Modal));