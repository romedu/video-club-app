import React, {Component} from "react";
import {connect} from "react-redux";
import {getClients, clearClients} from "../../../store/actions/client";
import ClientThumbnail from "../ClientThumbnail/ClientThumbnail";

class ClientList extends Component {
   componentDidMount(){
      this.props.onClientsGet();
   }

   componentWillUnmount(){
      this.props.onClientsClear();
   }

   render(){
      const {clients} = this.props,
            clientList = clients && clients.map(client => <ClientThumbnail key={client._id} {...client} />);

      return (
         <section>
            <h2>
               Clients
            </h2>
            <ul>
               {clientList}
            </ul>
         </section>
      );
   }
}

const mapStateToProps = state => ({
   clients: state.clients.list
});

const mapDispatchToProps = dispatch => ({
   onClientsGet: () => dispatch(getClients()),
   onClientsClear: () => dispatch(clearClients)
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);