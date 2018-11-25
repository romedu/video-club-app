import qwest from "qwest";
import * as actionTypes from "./actionTypes";
import {createMessage} from "./message";

export const getRentedMovies = () => {
   return dispatch => {
      const headers = {Authorization: localStorage.getItem("token")};
      return qwest.get("/api/rentedMovies", null, {headers})
               .then(data => JSON.parse(data.response))
               .then(response => {
                  const {status} = response;
                  if(status && status !== 200 && status !== 201) throw new Error(response.message);
                  return response;
               })
               .then(movies => dispatch({
                  type: actionTypes.GET_RENTED_MOVIES,
                  movies
               }))
               .catch(error => dispatch(createMessage("Error", error.message)))
   };
}

export const clearRentedMovies = {
   type: actionTypes.CLEAR_RENTED_MOVIES
};

export const createRentedMovie = (movie, rentedDays) => {
   return dispatch => {
      const headers = {Authorization: localStorage.getItem("token")},
            {distributedBy, availableForRent, ...rentMovie} = movie;

      rentMovie.rentedDays = rentedDays;

      return qwest.post("/api/rentedMovies", rentMovie, {headers})
               .then(data => JSON.parse(data.response))
               .then(response => {
                  const {status} = response;
                  if(status && status !== 200 && status !== 201) throw new Error(response.message);
                  return response;
               })
               .then(newMovie => dispatch({
                  type: actionTypes.DECREASE_AVAILABLE_MOVIE
               }))
               .catch(error => dispatch(createMessage("Error", error.message)))
   }
}

export const getAndSetRentedMovie = movieId => {
   return dispatch => {
      const headers = {Authorization: localStorage.getItem("token")};
      return qwest.get(`/api/rentedMovies/${movieId}`, null, {headers})
               .then(data => JSON.parse(data.response))
               .then(response => {
                  const {status} = response;
                  if(status && status !== 200 && status !== 201) throw new Error(response.message);
                  return response;
               })
               .then(rentedMovie => dispatch(setRentedMovie(rentedMovie)))
               .catch(error => dispatch(createMessage("Error", error.message)))
   }
};

export const setRentedMovie = rentedMovie => ({
   type: actionTypes.SET_RENTED_MOVIE,
   rentedMovie
});

export const clearRentedMovie = ({
   type: actionTypes.CLEAR_RENTED_MOVIE
});

export const deleteRentedMovie = (movieId, imdbID) => {
   return dispatch => {
      const headers = {Authorization: localStorage.getItem("token")};
      return qwest["delete"](`/api/rentedMovies/${movieId}`, {imdbID}, {headers})
               .then(data => JSON.parse(data.response))
               .then(response => {
                  const {status} = response;
                  if(status && status !== 200 && status !== 201) throw new Error(response.message);
                  return response;
               })
               .then(message => dispatch({
                  type: actionTypes.CLEAR_RENTED_MOVIE
               }))
               .catch(error => dispatch(createMessage("Error", error.message)))
   }
}