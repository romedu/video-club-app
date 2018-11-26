import React, {Component} from "react";
import {connect} from "react-redux";
import SearchForm from "../SearchForm/SearchForm";
import MovieList from "../MovieList/MovieList";
import Loader from "../../UI/Loader/Loader";
import styles from "./HomeScreen.module.css";

class HomeScreen extends Component {
   state = {
      isLoading: false
   }

   componentDidUpdate(prevProps){
      const {movieResults} = this.props;
      if(prevProps.movieResults !== movieResults) this.loaderHandler();
   }

   loaderHandler = () => this.setState(prevState => ({isLoading: !prevState.isLoading}));

   render(){
      const {isLoading} = this.state;

      return (
         <section className={styles.HomeScreen}>
            <h1>
               Video Club App
            </h1>
            <SearchForm disabled={isLoading} loaderHandler={this.loaderHandler} />
            {isLoading ? <Loader /> : <MovieList movieResults={this.props.movieResults} />}
         </section>
      );
   }
}

const mapStateToProps = state => ({
   movieResults: state.movieSearch.list
});

export default connect(mapStateToProps)(HomeScreen);