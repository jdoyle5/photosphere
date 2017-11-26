import { combineReducers } from 'redux';
import PhotoReducer from './photo';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer
});

export default EntitiesReducer;
