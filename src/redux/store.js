import {applyMiddleware} from "redux";
import { legacy_createStore as createStore} from 'redux'

import {logger} from 'redux-logger';

import rootReducer from "./root-reducer";

const middlewares=[logger];

const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;