import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../src/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(userReducer, composeEnhancers(applyMiddleware(thunk)));
