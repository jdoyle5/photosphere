import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session';


// create a default state for our session so we can keep track of our
// current user
const _nullSession = {
  currentUser: null
};

// We want to create a place in our state where we can store information
// about our current user.
// When the reducer  receives the RECEIVE_CURRENT_USER action creator, we
// will return a slice of state with the key as currentUser and the value
// as the action.user (either a user that we created or a user that
// we grabbed from the database and made the current user).
export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    return merge({}, { currentUser });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
