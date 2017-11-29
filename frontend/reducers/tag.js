import merge from 'lodash/merge';

import { RECEIVE_TAGS, RECEIVE_TAG } from '../actions/tag';

const TagReducer = ( state ={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      const tag = action.tag;
      return merge({}, state, {[tag.id]: tag});
    default:
      return state;
  }
};

export default TagReducer;
