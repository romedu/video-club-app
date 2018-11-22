import React, {Component} from "react";
import {connect} from "react-redux";
import {searchMovie} from "../../../store/actions/movieSearch";
import InputField from "../../UI/InputField/InputField";
import Button from "../../UI/Button/Button";

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
      this.props.onMovieSearch(title, year);
   }

   render(){
      const {title, year} = this.state;

      return (
         <form onSubmit={this.onFormSubmit}>
            <InputField type="text" name="title" placeholder="Search by movie title" value={title} updateInput={this.onInputUpdate} />
            <InputField type="number" name="year" value={year} updateInput={this.onInputUpdate}>
               Year:
            </InputField>
            <Button color="submit">
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