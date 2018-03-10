import { RECEIVE_PHOTOS,
         RECEIVE_PHOTO,
         REMOVE_PHOTO
} from '../actions/photo';
import { RECEIVE_COMMENTS } from '../actions/comment';
import { BEGIN_LOADING } from '../actions/loading';

const _initialState = {
  loading: false
};

const UiReducer = (state = _initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_PHOTO:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, { loading: false });
    case BEGIN_LOADING:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
};

export default UiReducer;
