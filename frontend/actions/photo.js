import * as APIUtil from '../util/photo_api_util';
import { receiveErrors } from '../actions/errors';
import { beginLoading } from '../actions/loading';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

// This thunk function will add request all photos from the database
// and dispatch them to the store
export const requestPhotos = () => dispatch => {
  dispatch(beginLoading());
  return APIUtil.fetchPhotos().then(photos => dispatch(receivePhotos(photos)));
};

export const requestPhoto = photoId => dispatch => (
  APIUtil.fetchPhoto(photoId).then(photo => dispatch(receivePhoto(photo)))
);

export const createPhoto = photo => dispatch => (
  APIUtil.postPhoto(photo).then(photoObj => dispatch(receivePhoto(photoObj)))
);

export const deletePHoto = photoId => dispatch => (
  APIUtil.destroyPhoto(photoId).then(photo => dispatch(removePhoto(photo)))
);

export const requestUserPhotos = userId => dispatch => {
  dispatch(beginLoading());
  return APIUtil.fetchUserPhotos(userId).then(photos => dispatch(receivePhotos(photos)));
};

export const requestTagPhotos = tagId => dispatch => {
  dispatch(beginLoading());
  return APIUtil.fetchTagPhotos(tagId).then(photos => dispatch(receivePhotos(photos)));
};
