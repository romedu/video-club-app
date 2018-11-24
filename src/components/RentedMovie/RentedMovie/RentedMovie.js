import React, {Component} from "react";
import {connect} from "react-redux";
import {getAndSetRentedMovie} from "../../../store/actions/rentedMovie";
import {clearMovie} from "../../../store/actions/movie";
import RentedPage from "../RentedPage/RentedPage";

class RentedMovie extends Component {
   state = {
      isLoading: true
   }

   componentDidMount(){
      const {match, onSetRentedMovie} = this.props;
      onSetRentedMovie(match.params.id);
   }

   componentWillUnmount(){
      this.props.onClearMovie();
   }

   render(){
      const {currentMovie} = this.props;
      return (
         <section>
            {currentMovie && <RentedPage movie={currentMovie} />}
         </section>
      )
   }
}

const mapStateToProps = state => ({
   currentMovie: state.movies.current
});

const mapDispatchToProps = dispatch => ({
   onSetRentedMovie: movieId => dispatch(getAndSetRentedMovie(movieId)),
   onClearMovie: () => dispatch(clearMovie)
});

export default connect(mapStateToProps, mapDispatchToProps)(RentedMovie);