import {LOGIN} from "../actions/actionTypes";

const initialState = {
   userData: null
};

const reducer = (prevState = initialState, actions) => {
   switch(actions.type){
      case LOGIN: return {userData: actions.user};
      default: return prevState;
   }
}

export default reducer;