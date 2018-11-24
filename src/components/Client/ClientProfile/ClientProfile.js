import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {setClient, getAndSetClient, clearClient} from "../../../store/actions/client";
import RentedList from "../../RentedMovie/RentedList/RentedList";

class ClientProfile extends Component {
   componentDidMount(){
      const {match, user, onClientSet, onClientGetAndSet} = this.props;

      if(match.path === "/my-profile") onClientSet(user);
      else onClientGetAndSet(match.params.id);
   }

   componentWillUnmount(){
      this.props.onClientClear();
   }

   render(){
      const {client} = this.props,
            content = client && (<Fragment>
               <h2> {client.name}'s Profile </h2>
               <h5> Name: {client.name} {client.lastName} </h5>
               <h5> Phone Number: {client.phoneNumber} </h5>
               <h5> Address: {client.address} </h5>
               <h5> Debt: {client.debt} </h5>
               <h5> Rented Movies: </h5>
               <RentedList rentedMovies={client.rentedMovies} />
            </Fragment>);

      return (
         <div>
            {content}
         </div>
      )
   }
}

const mapStateToProps = state => ({
   user: state.user.userData,
   client: state.clients.current
});

const mapDispatchToProps = dispatch => ({
   onClientSet: client => dispatch(setClient(client)),
   onClientGetAndSet: clientId => dispatch(getAndSetClient(clientId)),
   onClientClear: () => dispatch(clearClient)
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);