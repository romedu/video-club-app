import {CREATE_MESSAGE, CLEAR_MESSAGE} from "../actions/actionTypes";

const initialState = {
   label: null,
   content: null
};

const reducer = (prevState = initialState, actions) => {
   switch(actions.type){
      case CREATE_MESSAGE: return {label: actions.label, content: actions.content};
      case CLEAR_MESSAGE: return initialState;
      default: return prevState;
   }
};

export default reducer;