import { combineReducers } from 'redux';

import ErrorsReducer from './errors';
import SessionReducer from './session.js';
import EntitiesReducer from './entities';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer
});

export default RootReducer;
