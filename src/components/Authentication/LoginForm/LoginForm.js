import React, {Component} from "react";
import {connect} from "react-redux";
import {loginUser} from "../../../store/actions/user";
import InputField from "../../UI/InputField/InputField";
import Button from "../../UI/Button/Button";

class LoginForm extends Component {
   state = {
      username: "",
      password: ""
   }

   onInputUpdate = e => {
      const {name, value} = e.target;
      this.setState({[name]: value});
   }

   onFormSubmit = e => {
      e.preventDefault();
      this.props.onUserLogin(this.state);
   }

   render(){
      return (
         <div>
            <h2>
               Login
            </h2>
            <form onSubmit={this.onFormSubmit}>
               <InputField type="text" name="username" value={this.state.username} updateInput={this.onInputUpdate}>
                  Username
               </InputField>
               <InputField type="password" name="password" value={this.state.password} updateInput={this.onInputUpdate}>
                  Password
               </InputField>
               <Button color="submit">
                  Submit
               </Button>
            </form>
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   onUserLogin: userData => dispatch(loginUser(userData))
});

export default connect(null, mapDispatchToProps)(LoginForm);