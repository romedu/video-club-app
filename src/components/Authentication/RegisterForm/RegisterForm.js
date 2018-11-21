import React, {Component} from "react";
import {connect} from "react-redux";
import {registerUser} from "../../../store/actions/user";
import InputField from "../../UI/InputField/InputField";
import Button from "../../UI/Button/Button";

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
      phoneNumber: ""
   }

   onInputUpdate = e => {
      const {name, type, value, checked} = e.target;
      this.setState({[name]: type === "checkbox" ? checked : value});
   }

   onFormSubmit = e => {
      e.preventDefault();
      this.props.onUserRegister(this.state);
   }

   render(){
      const {username, password, confirmPassword, isAdmin, adminPassword, name, lastName, address, phoneNumber} = this.state,
            adminField = <InputField type="password" name="adminPassword" value={adminPassword} updateInput={this.onInputUpdate}>
                           Admin Password 
                         </InputField>;

      return (
         <div>
            <h2>
               Register
            </h2>
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
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   onUserRegister: userData => dispatch(registerUser(userData))
});

export default connect(null, mapDispatchToProps)(RegisterForm);