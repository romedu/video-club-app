import React, {Component} from "react";
import {connect} from "react-redux";
import {getClients, clearClients} from "../../../store/actions/client";
import ClientThumbnail from "../ClientThumbnail/ClientThumbnail";
import Loader from "../../UI/Loader/Loader";
import appStyles from "../../../App.module.css";

class ClientList extends Component {
   state = {
      isLoading: true
   }

   componentDidMount(){
      this.props.onClientsGet();
   }

   componentDidUpdate(){
      const {clients} = this.props,
            {isLoading} = this.state;
      if(clients && isLoading) this.setState({isLoading: false});
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
            <ul className={appStyles.ThumbnailList}>
               {this.state.isLoading ? <Loader /> : clientList}
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