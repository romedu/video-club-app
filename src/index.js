import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import userReducer from "./store/reducers/userReducer";
import clientReducer from "./store/reducers/clientReducer";
import moviesReducer from "./store/reducers/moviesReducer";
import rentedMoviesReducer from "./store/reducers/rentedMoviesReducer";
import movieSearchReducer from "./store/reducers/movieSearchReducer";
import messagesReducer from "./store/reducers/messagesReducer";
import {LOGOUT} from "./store/actions/actionTypes";

const reducers = combineReducers({
   user: userReducer,
   clients: clientReducer,
   movies: moviesReducer,
   rentedMovies: rentedMoviesReducer,
   movieSearch: movieSearchReducer,
   message: messagesReducer
});

const rootReducer = (state, action) => {
   if(action.type === LOGOUT) state = undefined;
   return reducers(state, action);
}

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
