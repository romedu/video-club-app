import React from "react";
import {connect} from "react-redux";
import AdminNavItems from "../AdminNavItems/AdminNavItems";
import UserNavItems from "../UserNavItems/UserNavItems";
import AuthNavItems from "../AuthNavItems/AuthNavItems"
import NavItem from "../NavItem/NavItem";
import styles from "./NavItems.module.css";

const NavItems = props => {
   const navItems = [],
         {user} = props;
   
   if(user){
      navItems.push(<NavItem key={"navItem0"} url="/"> Home </NavItem>);
      if(user.isAdmin) navItems.push(<AdminNavItems key={"navItem1"} />);
      navItems.push(<UserNavItems key={"navItem2"} />);
   }   
   else navItems.push(<AuthNavItems key={"navItem3"}/>);

   return (
      <ul className={styles.NavItems}>
         {navItems}
      </ul>
   );
}

const mapStateToProps = state => ({
   user: state.user.userData
});

export default connect(mapStateToProps)(NavItems);