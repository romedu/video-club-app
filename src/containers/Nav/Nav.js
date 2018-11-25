import React, {Component, Fragment} from "react";
import {withRouter} from "react-router-dom";
import Logo from "../../components/UI/Logo/Logo";
import NavItems from "../../components/Navigation/NavItems/NavItems";
import styles from "./Nav.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Nav extends Component {
   state = {
      showingSideDrawer: false
   }

   componentDidUpdate(prevProps){
      const {location} = this.props;
      if(prevProps.location.pathname !== location.pathname) this.setState({showingSideDrawer: false});
   }

   toggleSideDrawerHandler = () => this.setState(prevState => ({showingSideDrawer: !prevState.showingSideDrawer}));

   render(){
      return (
         <Fragment>
            <nav className={styles.NavBar}>
               <Logo />
               <NavItems />
            </nav>
            <Toolbar toggleHandler={this.toggleSideDrawerHandler} />
            <SideDrawer show={this.state.showingSideDrawer} hide={this.toggleSideDrawerHandler} />
         </Fragment>
      );
   }
};

export default withRouter(Nav);