import {LOGIN} from "../actions/actionTypes";

const initialState = {
   userData: null,
   rentedMovies: []
};

const reducer = (prevState = initialState, actions) => {
   switch(actions.type){
      case LOGIN: return {userData: actions.userData, rentedMovies: actions.rentedMovies};
      default: return prevState;
   }
}

export default reducer;