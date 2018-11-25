import qwest from "qwest";
import * as actionTypes from "./actionTypes";
import {createMessage} from "./message";

export const searchMovie = searchBody => {
   return dispatch => {
      return qwest.post(`/api/services/searchMovies`, searchBody)
               .then(data => JSON.parse(data.response))
               .then(response => {
                  const {status} = response;
                  if(status && status !== 200 && status !== 201) throw new Error(response.message);
                  return response;
               })
               .then(movieResults => dispatch({
                  type: actionTypes.GET_SEARCH_MOVIES,
                  movieResults
               }))
               .catch(error => dispatch(createMessage("Error", error.message)))
   }
};

export const clearSearchMovies = {
   type: actionTypes.CLEAR_SEARCH_MOVIES
};