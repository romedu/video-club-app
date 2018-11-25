import React, {Fragment} from "react";
import {connect} from "react-redux";
import NavItem from "../NavItem/NavItem";
import {logoutUser} from "../../../store/actions/user";

const UserNavItems = props => (
   <Fragment>
      <NavItem url="/my-profile">
         My Profile
      </NavItem>
      <NavItem action={props.onUserLogout} url="/auth/login">
         Logout
      </NavItem>
   </Fragment>
);

const mapDispatchToProps = dispatch => ({
   onUserLogout: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(UserNavItems);