import * as APIUtil from '../util/tag_api_util';
// import { receiveErrors } from '../actions/errors';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAGS,
  tag
});

export const requestTags = photoId => dispatch => (
  APIUtil.fetchTags(photoId).then(tags => dispatch(receiveTags(tags)))
);

export const requestTag = tagId => dispatch => (
  APIUtil.fetchTag(tagId).then(tag => dispatch(receiveTag(tag)))
);

export const postTag = tag => dispatch => (
  APIUtil.postTag(tag).then(tagObj => dispatch(receiveTag(tagObj)))
);
