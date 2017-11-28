import * as APIUtil from '../util/like_api_util';
import { receivePhoto } from './photo';

export const likePhoto = photoId => dispatch =>
  APIUtil.postLikeToPhoto(photoId)
  .then(photo => dispatch(receivePhoto(photo)));

export const unlikePhoto = photoId => dispatch =>
  APIUtil.deleteLikeFromPhoto(photoId)
  .then(photo => dispatch(receivePhoto(photo)));
    
