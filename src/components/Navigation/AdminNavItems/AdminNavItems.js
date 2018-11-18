import React, {Fragment} from "react";
import NavItem from "../NavItem/NavItem";

const AdminNavItems = props => (
   <Fragment>
      <NavItem url="/rentedMovies">
         Rented Movies
      </NavItem>
      <NavItem url="/clients">
         Clients
      </NavItem>
   </Fragment>
);

export default AdminNavItems;