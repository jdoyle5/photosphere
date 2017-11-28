import * as APIUtil from '../util/comment_api_util';
import { receiveErrors } from '../actions/errors';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_PHOTO';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const requestComments = photoId => dispatch => (
  APIUtil.fetchComments(photoId).then(comments => dispatch(receiveComments(comments)))
);

export const requestComment = commentId => dispatch => (
  APIUtil.fetchComment(commentId).then(comment => dispatch(receiveComment(comment)))
);

export const postComment = comment => dispatch => (
  APIUtil.postComment(comment).then(commentObj => dispatch(receiveComment(commentObj)))
);

export const deleteComment = commentId => dispatch => (
  APIUtil.destroyComment(commentId).then(comment => dispatch(removeComment(comment)))
);
