import { combineReducers } from 'redux';

import errorsReducer from './errors';
import sessionReducer from './session.js';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;
