import {CREATE_MESSAGE, CLEAR_MESSAGE} from "./actionTypes";

export const createMessage = (label, content) => ({
   type: CREATE_MESSAGE,
   label,
   content
});

export const clearMessage = {
   type: CLEAR_MESSAGE
};