import * as APIUtil from '../util/photo_api_util';
import { receiveErrors } from '../actions/errors';

export const RECIEVE_COMMENTS = 'RECIEVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_PHOTO';

export const receiveComments = comments => ({
  type: RECIEVE_COMMENTS,
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
  APIUtil.postComment(comment).then(commentObj => dispatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch => (
  APIUtil.destroyComment(commentId).then(comment => dispatch(removeComment(comment)))
);
