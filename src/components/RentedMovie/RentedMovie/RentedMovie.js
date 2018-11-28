import React, {Component} from "react";
import {connect} from "react-redux";
import {getAndSetRentedMovie, deleteRentedMovie} from "../../../store/actions/rentedMovie";
import {clearRentedMovie} from "../../../store/actions/rentedMovie";
import RentedPage from "../RentedPage/RentedPage";
import Loader from "../../UI/Loader/Loader";
import styles from "./RentedMovie.module.css";

class RentedMovie extends Component {
   state = {
      isLoading: true
   }

   componentDidMount(){
      const {match, onSetRentedMovie} = this.props;
      onSetRentedMovie(match.params.id);
   }

   componentDidUpdate(){
      const {isLoading} = this.state,
            {currentMovie} = this.props;
      if(isLoading && currentMovie) this.setState({isLoading: false});
   }

   componentWillUnmount(){
      this.props.onClearRentedMovie();
   }

   render(){
      const {isLoading} = this.state,
            {currentMovie, user, onRentedMovieDelete} = this.props;

      return (
         <section className={styles.RentedMovie}>
            {isLoading ? <Loader /> : <RentedPage userIsAdmin={user.isAdmin} movie={currentMovie} returnMovie={() => onRentedMovieDelete(currentMovie._id, currentMovie.imdbID)} />}
         </section>
      )
   }
}

const mapStateToProps = state => ({
   user: state.user.userData,
   currentMovie: state.rentedMovies.current
});

const mapDispatchToProps = dispatch => ({
   onSetRentedMovie: movieId => dispatch(getAndSetRentedMovie(movieId)),
   onClearRentedMovie: () => dispatch(clearRentedMovie),
   onRentedMovieDelete: (movieId, imdbID) => dispatch(deleteRentedMovie(movieId, imdbID))
});

export default connect(mapStateToProps, mapDispatchToProps)(RentedMovie);