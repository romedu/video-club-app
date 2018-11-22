import React, {Fragment} from "react";
import {connect} from "react-redux";
import NavItem from "../NavItem/NavItem";
import Button from "../../UI/Button/Button";
import {logoutUser} from "../../../store/actions/user";

const UserNavItems = props => (
   <Fragment>
      <NavItem url="/my-movies">
         My Rented Movies
      </NavItem>
      <Button color="NavItem" action={props.onUserLogout}>
         Logout
      </Button>
   </Fragment>
);

const mapDispatchToProps = dispatch => ({
   onUserLogout: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(UserNavItems);