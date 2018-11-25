import * as actionTypes from "../actions/actionTypes";

const initialState = {
   list: [],
   current: null
};

const reducer = (prevState = initialState, actions) => {
   switch(actions.type){
      case actionTypes.GET_RENTED_MOVIES: return {...prevState, list: actions.movies};
      case actionTypes.CLEAR_RENTED_MOVIES: return {...prevState, list: []};
      case actionTypes.SET_RENTED_MOVIE: return {...prevState, current: actions.rentedMovie};
      case actionTypes.CLEAR_RENTED_MOVIE: return {...prevState, current: null};
      default: return prevState;
   }
};

export default reducer;