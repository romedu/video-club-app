import * as actionTypes from "./actionTypes";
import qwest from "qwest";
import {createMessage} from "./message";

export const getClients = () => {
   return dispatch => {
      // const headers = {Authorization: localStorage.getItem("token")};
      return qwest.get(`/api/users?token=${localStorage.getItem("token")}`)
               .then(data => JSON.parse(data.response))
               .then(response => {
                  const {status} = response;
                  if(status && status !== 200 && status !== 201) throw new Error(response.message);
                  return response;
               })
               .then(clients => dispatch({
                  type: actionTypes.GET_CLIENTS,
                  clients
               }))
               .catch(error => dispatch(createMessage("Error", error.message)))
   }
};

export const clearClients = {
   type: actionTypes.CLEAR_CLIENTS
};

export const getAndSetClient = clientId => {
   return dispatch => {
      // const headers = {Authorization: localStorage.getItem("token")};
      return qwest.get(`/api/users/${clientId}?token=${localStorage.getItem("token")}`)
               .then(data => JSON.parse(data.response))
               .then(response => {
                  const {status} = response;
                  if(status && status !== 200 && status !== 201) throw new Error(response.message);
                  return response;
               })
               .then(client => dispatch(setClient(client)))
               .catch(error => dispatch(createMessage("Error", error.message)))
   }
};

export const setClient = client => ({
   type: actionTypes.SET_CLIENT,
   client
});

export const clearClient = {
   type: actionTypes.CLEAR_CLIENT
};