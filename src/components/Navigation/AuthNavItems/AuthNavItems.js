import React, {Fragment} from "react";
import NavItem from "../NavItem/NavItem";

const AuthNavItems = props => (
   <Fragment>
      <NavItem url="/login">
         Login
      </NavItem>
      <NavItem url="/register">
         Register
      </NavItem>
   </Fragment>
);

export default AuthNavItems;