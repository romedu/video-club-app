import React from "react";
import {Switch, Route} from "react-router-dom";
import ClientList from "../../components/Client/ClientList/ClientList";
import ClientProfile from "../../components/Client/ClientProfile/ClientProfile";

const Client = props => (
   <Switch>
      <Route exact path="/clients" component={ClientList} />
      <Route path="/clients/:id" component={ClientProfile} />
   </Switch>
);

export default Client;