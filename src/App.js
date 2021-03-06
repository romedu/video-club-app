import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {verifyUser} from "./store/actions/user";
import Nav from "./containers/Nav/Nav";
import Authentication from "./containers/Authentication/Authentication";
import MovieApp from "./containers/MovieApp/MovieApp";
import Client from "./containers/Client/Client";
import ClientProfile from "./components/Client/ClientProfile/ClientProfile";
import RentedMovieApp from "./containers/RentedMovieApp/RentedMovieApp";
import LandingPage from "./components/UI/LandingPage/LandingPage";
import Modal from "./components/UI/Modal/Modal";
import NotFound from "./components/UI/NotFound/NotFound";
import styles from './App.module.css';

class App extends Component {
   componentDidMount(){
      if(localStorage.getItem("token")) this.props.onUserVerify();
   }

   render() {
      const {user, message} = this.props;

      return (
         <BrowserRouter>
            <div className={styles.App}>
               <Nav />
               <Switch>
                  <Route exact path="/" component={LandingPage} />
                  {user && <Redirect from="/auth" to="/movies" />}
                  <Route path="/auth" component={Authentication} />
                  {!user && <Redirect to="/auth/login" />}
                  <Route path="/movies" component={MovieApp} />
                  {user && user.isAdmin && <Route path="/clients" component={Client} />}
                  <Route path="/my-profile" component={ClientProfile} />
                  {user && <Route path="/rented-movies" component={RentedMovieApp} />}
                  <Route path="*" component={NotFound} />
               </Switch>
               <Modal show={message && message.label} label={message.label}>
                  {message.content}
               </Modal>
            </div>
         </BrowserRouter>
      );
  }
}

const mapStateToProps = state => ({
   user: state.user.userData,
   message: state.message
});

const mapDispatchToProps = dispatch => ({
   onUserVerify: () => dispatch(verifyUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
