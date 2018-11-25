import qwest from "qwest";
import {LOGIN, LOGOUT} from "./actionTypes";
import {calculateDebt} from "../../helpers";
import {createMessage} from "./message";

export const loginUser = userData => {
   return dispatch => {
      return qwest.post("/api/auth/login", userData)
               .then(data => JSON.parse(data.response))
               .then(response => {
                  const {status} = response;
                  if(status && status !== 200 && status !== 201) throw new Error(response.message);
                  return response;
               })
               .then(user => {
                  const {token, ...loggedUser} = user;
                  localStorage.setItem("token", token);
                  return dispatch(setUser(loggedUser));
               })
               .catch(error => dispatch(createMessage("Error", error.message)))
   }
};

export const registerUser = userData => {
   return dispatch => {
      return qwest.post("/api/auth/register", userData)
               .then(data => JSON.parse(data.response))
               .then(response => {
                  const {status} = response;
                  if(status && status !== 200 && status !== 201) throw new Error(response.message);
                  return response;
               })
               .then(user => {
                  const {token, ...newUser} = user;
                  localStorage.setItem("token", token);
                  return dispatch(setUser(newUser));
               })
               .catch(error => dispatch(createMessage("Error", error.message)))
   }
};

export const verifyUser = () => {
   const headers = {Authorization: localStorage.getItem("token")};
   return dispatch => {
      return qwest.get("/api/auth/verifyToken", null, {headers})
               .then(data => JSON.parse(data.response))
               .then(response => {
                  const {status} = response;
                  if(status && status !== 200 && status !== 201) throw new Error(response.message);
                  return response;
               })
               .then(user => dispatch(setUser(user)))
               .catch(error => dispatch(createMessage("Error", error.message)))
   }
}

const setUser = user => {
   user.debt = calculateDebt(user.debt, user.rentedMovies);

   return ({
      type: LOGIN,
      user
   });
};

export const logoutUser = () => {
   localStorage.removeItem("token");
   return {type: LOGOUT};
};