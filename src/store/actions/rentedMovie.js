import qwest from "qwest";
import * as actionTypes from "./actionTypes";

export const getRentedMovies = () => {
   return dispatch => {
      const headers = {Authorization: localStorage.getItem("token")};
      return qwest.get("/api/rentedMovies", null, {headers})
               .then(data => JSON.parse(data.response))
               .then(movies => dispatch({
                  type: actionTypes.GET_RENTED_MOVIES,
                  movies
               }))
               .catch(error => {
                  //HANDLE ERROR
               })
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
               .then(newMovie => dispatch({
                  type: actionTypes.CREATE_RENTED_MOVIE,
                  newMovie
               }))
               .catch(error => {
                  //HANDLE ERROR
               })
   }
}

export const setRentedMovie = movieId => {
   return dispatch => {
      const headers = {Authorization: localStorage.getItem("token")};
      return qwest.get(`/api/rentedMovies/${movieId}`, null, headers)
               .then(data => JSON.parse(data.response))
               .then(movie => dispatch({
                  type: actionTypes.SET_MOVIE,
                  movie
               }))
               .catch(error => {
                  //HANDLE ERROR
               })
   }
};