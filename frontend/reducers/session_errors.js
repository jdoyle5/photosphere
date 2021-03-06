import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session';
import { CLEAR_ERRORS } from '../actions/errors';

// const _nullErrors = [];

// If there are errors, display them in the errors part of the state,
// if the user successfully logs in, then display the session with nothing
// in it.
export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
