import qwest from "qwest";
import {LOGIN, LOGOUT} from "./actionTypes";
import {calculateDebt} from "../../helpers";

export const loginUser = userData => {
   return dispatch => {
      return qwest.post("/api/auth/login", userData)
               .then(data => JSON.parse(data.response))
               .then(user => {
                  const {token, ...loggedUser} = user;
                  localStorage.setItem("token", token);
                  return dispatch(setUser(loggedUser));
               })
               .catch(error => {
                  //HANDLE ERROR
               });
   }
};

export const registerUser = userData => {
   return dispatch => {
      return qwest.post("/api/auth/register", userData)
               .then(data => JSON.parse(data.response))
               .then(user => {
                  const {token, ...newUser} = user;
                  localStorage.setItem("token", token);
                  return dispatch(setUser(newUser));
               })
               .catch(error => {
                  //HANDLE ERROR
               })
   }
};

export const verifyUser = () => {
   const headers = {Authorization: localStorage.getItem("token")};
   return dispatch => {
      return qwest.get("/api/auth/verifyToken", null, {headers})
               .then(data => JSON.parse(data.response))
               .then(user => dispatch(setUser(user)))
               .catch(error => {
                  //HANDLE ERROR
               });
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