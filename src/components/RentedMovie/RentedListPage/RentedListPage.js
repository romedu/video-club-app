import React, {Component} from "react";
import {connect} from "react-redux";
import {getRentedMovies, clearRentedMovies} from "../../../store/actions/rentedMovie";
import RentedList from "../RentedList/RentedList";
import Loader from "../../UI/Loader/Loader";

class RentedListPage extends Component {
   state = {
      isLoading: true
   }

   componentDidMount(){
      this.props.onGetRentedMovies();
   }

   componentDidUpdate(){
      const {rentedMovies} = this.props,
            {isLoading} = this.state;
      if(isLoading && rentedMovies) this.setState({isLoading: false});
   }

   componentWillUnmount(){
      this.props.onClearRentedMovies();
   }

   render(){
      const {isLoading} = this.state,
            {rentedMovies} = this.props;
      return (
         <section>
            <h2>
               Rented Movies
            </h2>
            {isLoading ? <Loader /> : <RentedList rentedMovies={rentedMovies} />}
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