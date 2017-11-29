import { combineReducers } from 'redux';
import PhotoReducer from './photo';
import CommentReducer from './comment';
import TagReducer from './tag';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  comments: CommentReducer,
  tags: TagReducer
});

export default EntitiesReducer;
