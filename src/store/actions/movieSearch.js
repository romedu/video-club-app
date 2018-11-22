import qwest from "qwest";
import * as actionTypes from "./actionTypes";

export const searchMovie = searchBody => {
   return dispatch => {
      return qwest.post(`/api/services/searchMovies`, searchBody)
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