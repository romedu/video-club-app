import * as actionTypes from "../actions/actionTypes";
import {calculateDebt} from "../../helpers";

const initialState = {
   list: [],
   current: null
};

const reducer = (prevState = initialState, actions) => {
   switch(actions.type){
      //THIS IS TO MAKE SURE ALL THE CLIENT'S DEPT GETS UPDATED TO THEIR REAL VALUE
      case actionTypes.GET_CLIENTS: return {...prevState, list: actions.clients.map(client => ({...client, debt: calculateDebt(client.debt, client.rentedMovies)}))};
      case actionTypes.CLEAR_CLIENTS: return {...prevState, list: []};
      case actionTypes.SET_CLIENT: return {...prevState, current: {...actions.client, debt: calculateDebt(actions.client.debt, actions.client.rentedMovies)}};
      case actionTypes.CLEAR_CLIENT: return {...prevState, current: null};
      default: return prevState;
   }
};

export default reducer;