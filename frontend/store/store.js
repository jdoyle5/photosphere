import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from '../reducers/root';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default (preloadedState = {}) => createStore(
  RootReducer, preloadedState,
  applyMiddleware(...middlewares)
);
