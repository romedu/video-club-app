import React from "react";
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";
import RentedListPage from "../../components/RentedMovie/RentedListPage/RentedListPage";
import RentedMovie from "../../components/RentedMovie/RentedMovie/RentedMovie";

const RentedMovieApp = props => (
   <Switch>
      {props.user && props.user.isAdmin && <Route exact path="/rented-movies" component={RentedListPage} />}
      <Route path="/rented-movies/:id" component={RentedMovie} />
   </Switch>
);

const mapStateToProps = state => ({
   user: state.user.userData
});

export default connect(mapStateToProps)(RentedMovieApp);