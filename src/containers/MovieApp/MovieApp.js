import React from "react";
import {Switch, Route} from "react-router-dom";
import HomeScreen from "../../components/MovieApp/HomeScreen/HomeScreen";
import MoviePage from "../../components/MovieApp/MoviePage/MoviePage";

const MovieApp = props => {
      return (
         <Switch>
            <Route exact path="/movies" component={HomeScreen} />
            <Route path="/movies/:id" component={MoviePage} />
         </Switch>
      );
}

export default MovieApp;