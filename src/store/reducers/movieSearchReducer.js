import * as actionTypes from "../actions/actionTypes";

const initialState = {
   list: []
};

const reducer = (prevState = initialState, actions) => {
   switch(actions.type){
      case actionTypes.GET_SEARCH_MOVIES: return {list: actions.movieResults};
      case actionTypes.CLEAR_SEARCH_MOVIES: return {list: []};
      default: return prevState;
   }
}

export default reducer;