import React, {Component} from "react";
import {connect} from "react-redux";
import {createMessage} from "../../../store/actions/message";
import {registerUser} from "../../../store/actions/user";
import InputField from "../../UI/InputField/InputField";
import Button from "../../UI/Button/Button";
import Loader from "../../UI/Loader/Loader";
import appStyles from "../../../App.module.css";

class RegisterForm extends Component {
   state = {
      username: "",
      password: "",
      confirmPassword: "",
      isAdmin: false,
      adminPassword: "",
      name: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      isLoading: false
   }

   componentDidUpdate(prevProps){
      const {message} = this.props;
      if(prevProps.message !== message) this.setState({isLoading: false});
   }

   onInputUpdate = e => {
      const {name, type, value, checked} = e.target;
      this.setState({[name]: type === "checkbox" ? checked : value});
   }

   onFormSubmit = e => {
      e.preventDefault();
      const {isLoading, ...userData} = this.state,
            {onUserRegister, onMessageCreate} = this.props;
            
      if(userData.password === userData.confirmPassword) this.setState({isLoading: true}, () => onUserRegister(userData));
      else onMessageCreate("Error", "Your password and password confirmation fields must match");
   }

   render(){
      const {username, password, confirmPassword, isAdmin, adminPassword, name, lastName, address, phoneNumber, isLoading} = this.state,
            adminField = <InputField type="password" name="adminPassword" value={adminPassword} updateInput={this.onInputUpdate}>
                           Admin Password 
                         </InputField>,
            content = isLoading ? <Loader /> : (
               <form onSubmit={this.onFormSubmit}>
                  <InputField type="text" name="username" value={username} updateInput={this.onInputUpdate}>
                     Username
                  </InputField>
                  <InputField type="password" name="password" value={password} updateInput={this.onInputUpdate}>
                     Password
                  </InputField>
                  <InputField type="password" name="confirmPassword" value={confirmPassword} updateInput={this.onInputUpdate}>
                     Confirm Password
                  </InputField>
                  <InputField type="checkbox" name="isAdmin" checked={isAdmin} updateInput={this.onInputUpdate}>
                     Are you an admin?
                  </InputField>
                  {isAdmin && adminField}
                  <InputField type="text" name="name" value={name} updateInput={this.onInputUpdate}>
                     Name
                  </InputField>
                  <InputField type="text" name="lastName" value={lastName} updateInput={this.onInputUpdate}>
                     Last Name
                  </InputField>
                  <InputField type="text" name="address" value={address} updateInput={this.onInputUpdate}>
                     Address
                  </InputField>
                  <InputField type="text" name="phoneNumber" value={phoneNumber} updateInput={this.onInputUpdate}>
                     Phone Number
                  </InputField>
                  <Button color="submit">
                     Submit
                  </Button>
               </form>
            )

      return (
         <div className={appStyles.Authentication}>
            <h2>
               Register
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
   onUserRegister: userData => dispatch(registerUser(userData)),
   onMessageCreate: (label, content) => dispatch(createMessage(label, content))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);