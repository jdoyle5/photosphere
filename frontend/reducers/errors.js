import { combineReducers } from 'redux';

import sessionErrors from './session_errors';

const ErrorsReducer = combineReducers({
  session: sessionErrors
});

export default ErrorsReducer;
