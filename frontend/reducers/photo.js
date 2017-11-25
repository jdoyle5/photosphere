import merge from 'lodash/merge';

import { RECEIVE_PHOTOS,
         RECEIVE_PHOTO,
         REMOVE_PHOTO
} from '../actions/photo';

const photoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      const photo = action.photo;
      return merge({}, state, { [photo.id]: photo });
    case REMOVE_PHOTO:
      const newState = merge({}, state);
      delete newState[action.photo.id];
      return newState;
    default:
      return state;
  }
};
