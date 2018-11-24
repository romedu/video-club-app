import React from "react";
import {Switch, Route} from "react-router-dom";
import RentedListPage from "../../components/RentedMovie/RentedListPage/RentedListPage";
import RentedMovie from "../../components/RentedMovie/RentedMovie/RentedMovie";

const RentedMovieApp = props => (
   <Switch>
      <Route exact path="/rented-movies" component={RentedListPage} />
      <Route path="/rented-movies/:id" component={RentedMovie} />
   </Switch>
);

export default RentedMovieApp;