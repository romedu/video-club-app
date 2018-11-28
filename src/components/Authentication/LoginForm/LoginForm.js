import React, {Component} from "react";
import {connect} from "react-redux";
import {loginUser} from "../../../store/actions/user";
import InputField from "../../UI/InputField/InputField";
import Button from "../../UI/Button/Button";
import Loader from "../../UI/Loader/Loader";
import appStyles from "../../../App.module.css";

class LoginForm extends Component {
   state = {
      username: "",
      password: "",
      isLoading: false
   }

   componentDidUpdate(prevProps){
      const {message} = this.props;
      if(prevProps.message !== message) this.setState({isLoading: false});
   }

   onInputUpdate = e => {
      const {name, value} = e.target;
      this.setState({[name]: value});
   }

   onFormSubmit = e => {
      e.preventDefault();
      const {isLoading, ...userData} = this.state;
      this.setState({isLoading: true}, () => this.props.onUserLogin(userData));
   }

   render(){
      const content = this.state.isLoading ? <Loader /> : (
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
      );

      return (
         <div className={appStyles.Authentication}>
            <h2>
               Login
            </h2>
            {content}
         </div>
      )
   }
}

const mapStateToProps = state => ({
   message: state.message.label
});

const mapDispatchToProps = dispatch => ({
   onUserLogin: userData => dispatch(loginUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);