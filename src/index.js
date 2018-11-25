import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import userReducer from "./store/reducers/userReducer";
import clientReducer from "./store/reducers/clientReducer";
import moviesReducer from "./store/reducers/moviesReducer";
import rentedMoviesReducer from "./store/reducers/rentedMoviesReducer";
import movieSearchReducer from "./store/reducers/movieSearchReducer";
import messagesReducer from "./store/reducers/messagesReducer";
import {LOGOUT} from "./store/actions/actionTypes";

//REMOVE FOR PRODUCTION
const composeEnhancers = process.env.NODE_ENV ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

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

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
