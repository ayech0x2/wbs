import {createStore} from "redux";
import {applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers/index";

const logger = createLogger({collapsed: true, duration: true});

const store = createStore(rootReducer, applyMiddleware(reduxThunk, logger));

export default store;


