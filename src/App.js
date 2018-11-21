import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Nav from "./containers/Nav/Nav";
import Authentication from "./containers/Authentication/Authentication";
import MovieApp from "./containers/MovieApp/MovieApp";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div className="App">
            <Nav />
            <Switch>
               <Route path="/auth" component={Authentication} />
               <Route path="/movies" component={MovieApp} />
               <Redirect exact from="/" to="/movies" />
            </Switch>
         </div>
      </BrowserRouter>
    );
  }
}

export default App;
