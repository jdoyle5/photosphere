import { combineReducers } from 'redux';
import PhotoReducer from './photo';
import CommentReducer from './comment';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  comments: CommentReducer
});

export default EntitiesReducer;
