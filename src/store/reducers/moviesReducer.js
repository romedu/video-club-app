import * as actionTypes from "../actions/actionTypes";

const initialState = {
   list: [],
   current: null
};

const reducer = (prevState = initialState, actions) => {
   switch(actions.type){
      case actionTypes.GET_MOVIES: return {list: actions.movies};
      case actionTypes.CLEAR_MOVIES: return {list: []};
      case actionTypes.CREATE_MOVIE: return {list: prevState.list.concat(actions.newMovie)};
      case actionTypes.SET_MOVIE: return {current: actions.movie};
      case actionTypes.CLEAR_MOVIE: return {current: null};
      default: return prevState;
   }
};

export default reducer;