import * as actionTypes from "../actions/actionTypes";
import {calculateDebt} from "../../helpers";

const initialState = {
   list: [],
   current: null
};

const reducer = (prevState = initialState, actions) => {
   switch(actions.type){
      case actionTypes.GET_CLIENTS: return {list: actions.clients};
      case actionTypes.CLEAR_CLIENTS: return {list: []};
      case actionTypes.SET_CLIENT: return {current: {...actions.client, debt: calculateDebt(actions.client.debt, actions.client.rentedMovies)}};
      case actionTypes.CLEAR_CLIENT: return {current: null};
      default: return prevState;
   }
};

export default reducer;