import React, {Fragment} from "react";
import NavItem from "../NavItem/NavItem";

const UserNavItems = props => (
   <Fragment>
      <NavItem url="/my-movies">
         My Rented Movies
      </NavItem>
      <NavItem url="/">
         Logout
      </NavItem>
   </Fragment>
);

export default UserNavItems;