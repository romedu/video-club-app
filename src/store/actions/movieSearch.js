import qwest from "qwest";
import * as actionTypes from "./actionTypes";

export const searchMovie = (title, year) => {
   return dispatch => {
      const searchQuery = year ? `s=${title}&y=${year}` : `s=${title}`;
      return qwest.get(`http://www.omdbapi.com/?apikey=thewdb&${searchQuery}`)
               .then(data => JSON.parse(data.response))
               .then(movieResults => dispatch({
                  type: actionTypes.GET_SEARCH_MOVIES,
                  movieResults
               }))
               .catch(error => {
                  //HANDLE ERROR
               })
   }
};

export const clearSearchMovies = {
   type: actionTypes.CLEAR_SEARCH_MOVIES
};