import * as APIUtil from '../util/photo_api_util';
import { receiveErrors } from '../actions/errors';

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

export const requestPhotos = () => dispatch => (
  APIUtil.fetchPhotos().then(photos => dispatch(receivePhotos(photos)))
);

export const requestPhoto = photoId => dispatch => (
  APIUtil.fetchPhoto(photoId).then(photo => dispatch(receivePhoto(photo)))
);

export const createPhoto = photo => dispatch => (
  APIUtil.postPhoto(photo).then(photoObj => dispatch(receivePhoto(photoObj)))
);

export const deletePHoto = photoId => dispatch => (
  APIUtil.destroyPhoto(photoId).then(photo => dispatch(removePhoto(photo)))
);

export const requestUserPhotos = userId => dispatch => (
  APIUtil.fetchUserPhotos(userId).then(photos => dispatch(receivePhotos(photos)))
);

export const requestTagPhotos = tagId => dispatch => (
  APIUtil.fetchTagPhotos(tagId).then(photos => dispatch(receivePhotos(photos)))
);
