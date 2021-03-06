import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {getAndSetClient, clearClient} from "../../../store/actions/client";
import RentedList from "../../RentedMovie/RentedList/RentedList";
import Loader from "../../UI/Loader/Loader";
import styles from "./ClientProfile.module.css";

class ClientProfile extends Component {
   state = {
      isLoading: true
   }

   componentDidMount(){
      const {match, user, onClientGetAndSet} = this.props;

      if(match.path === "/my-profile") onClientGetAndSet(user._id);
      else onClientGetAndSet(match.params.id);
   }

   componentDidUpdate(){
      const {client} = this.props,
            {isLoading} = this.state;
      if(client && isLoading) this.setState({isLoading: false});
   }

   componentWillUnmount(){
      this.props.onClientClear();
   }

   render(){
      const {isLoading} = this.state,
            {client} = this.props,
            content = !isLoading && client && (<Fragment>
               <h2> {client.name}'s Profile </h2>
               <h5> Name: {client.name} {client.lastName} </h5>
               <h5> Phone Number: {client.phoneNumber} </h5>
               <h5> Address: {client.address} </h5>
               <h5> Debt: €{client.debt} </h5>
               <h5> Rented Movies: </h5>
               <RentedList rentedMovies={client.rentedMovies} />
            </Fragment>);

      return (
         <div className={styles.Client}>
            {isLoading ? <Loader /> : content}
         </div>
      )
   }
}

const mapStateToProps = state => ({
   user: state.user.userData,
   client: state.clients.current
});

const mapDispatchToProps = dispatch => ({
   onClientGetAndSet: clientId => dispatch(getAndSetClient(clientId)),
   onClientClear: () => dispatch(clearClient)
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);