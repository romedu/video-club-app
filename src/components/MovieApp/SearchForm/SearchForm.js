import React, {Component} from "react";
import {connect} from "react-redux";
import {searchMovie} from "../../../store/actions/movieSearch";
import InputField from "../../UI/InputField/InputField";
import Button from "../../UI/Button/Button";
import styles from "./SearchForm.module.css";

class SearchForm extends Component {
   state = {
      title: "",
      year: ""
   }

   onInputUpdate = e => {
      const {name, value} = e.target;
      this.setState({[name]: value});
   }

   onFormSubmit = e => {
      e.preventDefault();
      const {title, year} = this.state;
      this.props.loaderHandler();
      this.props.onMovieSearch(title, year);
   }

   render(){
      const {title} = this.state;

      return (
         <form onSubmit={this.onFormSubmit}>
            <InputField type="text" name="title" placeholder="Search by movie title" value={title} updateInput={this.onInputUpdate} />
            <fieldset className={styles.Fieldset}>
               <label>
                  Year: 
               </label>
               <input type="number" name="year" max={new Date().getFullYear()} value={this.state.year} onChange={this.onInputUpdate} />
            </fieldset>
            <Button color="submit" disabled={this.props.disabled}>
               Find movie
            </Button>
         </form>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   onMovieSearch: (title, year) => dispatch(searchMovie({title, year}))
});

export default connect(null, mapDispatchToProps)(SearchForm);