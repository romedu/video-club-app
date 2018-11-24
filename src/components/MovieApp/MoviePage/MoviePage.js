import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {createRentedMovie} from "../../../store/actions/rentedMovie";
import Button from "../../UI/Button/Button";

class MoviePage extends Component {
   state = {
      daysForRent: 0
   };

   updateInput = e => this.setState({daysForRent: e.target.value});

   rentMovie = () => this.props.onMovieRent(this.props.movie, this.state.daysForRent);

   render(){
      const {daysForRent} = this.state,
            {movie} = this.props;

      return (
         <Fragment>
            <h2>
               {movie.title}
            </h2>
            <img src={movie.image} alt="" />
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
            <div>
            <h3> Rent the movie </h3>
            <input type="number" min="1" max="7" onChange={this.updateInput} value={daysForRent} />
            <Button color={daysForRent < 1 ? "disabled" : "sale"} action={this.rentMovie}>
               Rent Movie
            </Button>
            </div>
         </Fragment>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   onMovieRent: (movie, rentedDays) => dispatch(createRentedMovie(movie, rentedDays))
});

export default connect(null, mapDispatchToProps)(MoviePage);