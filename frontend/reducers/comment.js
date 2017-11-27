import merge from 'lodash/merge';

// import { RECEIVE_COMMENTS,
//          RECEIVE_COMMENT,
//          REMOVE_COMMENT
// } from '../actions.comment';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_PHOTO';

const CommentReducer = ( state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      const comment = action.comment;
      return merge({}, state, { [comment.id]: comment });
    case REMOVE_COMMENT:
      const newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
