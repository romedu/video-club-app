import React, {Fragment} from "react";
import {Route} from "react-router-dom";
import LoginForm from "../../components/Authentication/LoginForm/LoginForm";
import RegisterForm from "../../components/Authentication/RegisterForm/RegisterForm";

const Authentication = props => (
   <Fragment>
      <Route path="/auth/login" component={LoginForm} />
      <Route path="/auth/register" component={RegisterForm} />
   </Fragment>
);

export default Authentication;