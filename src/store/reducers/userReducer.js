import {LOGIN} from "../actions/actionTypes";
import {calculateDebt} from "../../helpers";

const initialState = {
   userData: null,
   rentedMovies: []
};

const reducer = (prevState = initialState, actions) => {
   switch(actions.type){
      case LOGIN: return {userData: {...actions.userData, debt: calculateDebt(actions.userData.debt, actions.rentedMovies)}, rentedMovies: actions.rentedMovies};
      default: return prevState;
   }
}

export default reducer;