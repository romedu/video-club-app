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
import './App.css';

class App extends Component {
   componentDidMount(){
      this.props.onUserVerify();
   }

   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Nav />
               <Switch>
                  <Route path="/auth" component={Authentication} />
                  <Route path="/movies" component={MovieApp} />
                  <Route path="/clients" component={Client} />
                  <Route path="/my-profile" component={ClientProfile} />
                  <Route path="/rented-movies" component={RentedMovieApp} />
                  <Redirect exact from="/" to="/movies" />
               </Switch>
            </div>
         </BrowserRouter>
      );
  }
}

const mapDispatchToProps = dispatch => ({
   onUserVerify: () => dispatch(verifyUser())
});

export default connect(null, mapDispatchToProps)(App);
