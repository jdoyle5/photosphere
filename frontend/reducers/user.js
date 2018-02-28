import {RECEIVE_USER} from '../actions/user';

import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);

    default:
      return state;
  }
};

export default UserReducer;
