import React, {Component, Fragment} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {createRentedMovie} from "../../../store/actions/rentedMovie";
import {createMessage} from "../../../store/actions/message";
import Button from "../../UI/Button/Button";
import Loader from "../../UI/Loader/Loader";

class MoviePage extends Component {
   state = {
      daysForRent: 1,
      isLoading: false
   };

   componentDidUpdate(prevProps){
      const {movie, onMessageCreate} = this.props;
      if(this.state.isLoading && prevProps.movie.availableForRent !== movie.availableForRent){
         this.setState({isLoading: false}, () => onMessageCreate("Message", "Movie rented successfully"));
      }
   }

   updateInput = e => this.setState({daysForRent: e.target.value});

   rentMovie = e => {
      e.preventDefault();
      const {movie, onMovieRent} = this.props;
      this.setState({isLoading: true}, () => onMovieRent(movie, this.state.daysForRent)); 
   }

   render(){
      const {daysForRent, isLoading} = this.state,
            {movie} = this.props,
            rentForm = (
               <form onSubmit={this.rentMovie}>
                  <h3> Rent the movie </h3>
                  <label> Rent for: </label>
                  <input type="number" min="1" max="7" onChange={this.updateInput} value={daysForRent} />
                  <span> days </span>
                  <Button color="sale" disabled={movie.availableForRent === 0}>
                     Rent Movie
                  </Button>
               </form>
            );

      return (
         <Fragment>
            <h2>
               {movie.title}
            </h2>
            <img src={movie.image} />
            <h4>
               We have {movie.availableForRent} copies available
            </h4>
            <ul>
               <li>
                  <h5>
                     Released:
                  </h5>
                  {movie.released}
               </li>
               <li>
                  <h5>
                     Directed By:
                  </h5>
                  {movie.directedBy}
               </li>
               <li>
                  <h5>
                     Main actors:
                  </h5>
                  {movie.actors}
               </li>
            </ul>
            <div>
               <h5>
                  Plot:
               </h5>
               <div>
                  {movie.plot}
               </div>
            </div>
            <div>
               Distributed by: {movie.distributedBy}
            </div>
            <p>
               Price: {movie.price}
            </p>
            {isLoading ? <Loader /> : rentForm}
         </Fragment>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   onMovieRent: (movie, rentedDays) => dispatch(createRentedMovie(movie, rentedDays)),
   onMessageCreate: (label, content) => dispatch(createMessage(label, content))
});

export default connect(null, mapDispatchToProps)(withRouter(MoviePage));