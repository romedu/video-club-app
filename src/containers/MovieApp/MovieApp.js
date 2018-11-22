import React, {Component} from "react";
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";
import {clearSearchMovies} from "../../store/actions/movieSearch";
import HomeScreen from "../../components/MovieApp/HomeScreen/HomeScreen";
import Movie from "../../components/MovieApp/Movie/Movie";

class MovieApp extends Component {

   componentWillUnmount(){
      this.props.onSearchMoviesClear();
   }

   render(){
      return (
         <Switch>
            <Route exact path="/movies" component={HomeScreen} />
            <Route path="/movies/:id" component={Movie} />
         </Switch>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   onSearchMoviesClear: () => dispatch(clearSearchMovies)
});

export default connect(null, mapDispatchToProps)(MovieApp);