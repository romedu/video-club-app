import React, {Component} from "react";
import {connect} from "react-redux";
import {getAndSetRentedMovie, deleteRentedMovie} from "../../../store/actions/rentedMovie";
import {clearRentedMovie} from "../../../store/actions/rentedMovie";
import RentedPage from "../RentedPage/RentedPage";
import Loader from "../../UI/Loader/Loader";

class RentedMovie extends Component {
   state = {
      isLoading: true
   }

   componentDidMount(){
      const {match, onSetRentedMovie} = this.props;
      onSetRentedMovie(match.params.id);
   }

   componentDidUpdate(prevProps){
      const {isLoading} = this.state,
            {currentMovie, history} = this.props;
      if(isLoading && currentMovie) this.setState({isLoading: false});
      else if(prevProps.currentMovie && !currentMovie) history.goBack();
   }

   componentWillUnmount(){
      this.props.onClearRentedMovie();
   }

   render(){
      const {isLoading} = this.state,
            {currentMovie, onRentedMovieDelete} = this.props;

      return (
         <section>
            {isLoading ? <Loader /> : <RentedPage movie={currentMovie} returnMovie={() => onRentedMovieDelete(currentMovie._id, currentMovie.imdbID)} />}
         </section>
      )
   }
}

const mapStateToProps = state => ({
   currentMovie: state.rentedMovies.current
});

const mapDispatchToProps = dispatch => ({
   onSetRentedMovie: movieId => dispatch(getAndSetRentedMovie(movieId)),
   onClearRentedMovie: () => dispatch(clearRentedMovie),
   onRentedMovieDelete: (movieId, imdbID) => dispatch(deleteRentedMovie(movieId, imdbID))
});

export default connect(mapStateToProps, mapDispatchToProps)(RentedMovie);