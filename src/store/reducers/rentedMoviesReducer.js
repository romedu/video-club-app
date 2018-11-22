import * as actionTypes from "../actions/actionTypes";

const initialState = {
   list: []
};

const reducer = (prevState = initialState, actions) => {
   switch(actions.type){
      case actionTypes.GET_RENTED_MOVIES: return {...prevState, list: actions.movies};
      case actionTypes.CLEAR_RENTED_MOVIES: return {...prevState, list: []};
      case actionTypes.CREATE_RENTED_MOVIE: return {...prevState, list: prevState.list.concat(actions.newMovie)};
      default: return prevState;
   }
};

export default reducer;