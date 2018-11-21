import React, {Fragment} from "react";
import NavItem from "../NavItem/NavItem";

const AuthNavItems = props => (
   <Fragment>
      <NavItem url="/auth/login">
         Login
      </NavItem>
      <NavItem url="/auth/register">
         Register
      </NavItem>
   </Fragment>
);

export default AuthNavItems;