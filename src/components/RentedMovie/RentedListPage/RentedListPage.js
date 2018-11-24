import React, {Component} from "react";
import {connect} from "react-redux";
import {getRentedMovies, clearRentedMovies} from "../../../store/actions/rentedMovie";
import RentedList from "../RentedList/RentedList";

class RentedListPage extends Component {
   componentDidMount(){
      this.props.onGetRentedMovies();
   }

   componentWillUnmount(){
      this.props.onClearRentedMovies();
   }

   render(){
      const {rentedMovies} = this.props;
      return (
         <section>
            <h2>
               Rented Movies
            </h2>
            {rentedMovies && <RentedList rentedMovies={rentedMovies} />}
         </section>
      )
   }
}

const mapStateToProps = state => ({
   rentedMovies: state.rentedMovies.list
});

const mapDispatchToProps = dispatch => ({
   onGetRentedMovies: () => dispatch(getRentedMovies()),
   onClearRentedMovies: () => dispatch(clearRentedMovies)
});

export default connect(mapStateToProps, mapDispatchToProps)(RentedListPage);