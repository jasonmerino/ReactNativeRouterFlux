
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import app from './appReducer';

// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, createLogger())(createStore);

const reducers = combineReducers({
  app,
});

export default createStore(reducers, applyMiddleware(promiseMiddleware, createLogger()));
