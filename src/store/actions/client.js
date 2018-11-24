import * as actionTypes from "./actionTypes";
import qwest from "qwest";

export const getClients = () => {
   return dispatch => {
      const headers = {Authorization: localStorage.getItem("token")};
      return qwest.get("/api/users", null, {headers})
               .then(data => JSON.parse(data.response))
               .then(clients => dispatch({
                  type: actionTypes.GET_CLIENTS,
                  clients
               }))
               .catch(error => {
                  //HANDLE ERROR
               })
   }
};

export const clearClients = {
   type: actionTypes.CLEAR_CLIENTS
};

export const getAndSetClient = clientId => {
   return dispatch => {
      const headers = {Authorization: localStorage.getItem("token")};
      return qwest.get(`/api/users/${clientId}`, null, {headers})
               .then(data => JSON.parse(data.response))
               .then(client => dispatch(setClient(client)))
               .catch(error => {
                  //HANDLE ERROR
               });
   }
};

export const setClient = client => ({
   type: actionTypes.SET_CLIENT,
   client
});

export const clearClient = {
   type: actionTypes.CLEAR_CLIENT
};