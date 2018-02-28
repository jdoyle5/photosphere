import { combineReducers } from 'redux';
import PhotoReducer from './photo';
import CommentReducer from './comment';
import TagReducer from './tag';
import UserReducer from './user';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  comments: CommentReducer,
  tags: TagReducer,
  user: UserReducer
});

export default EntitiesReducer;
