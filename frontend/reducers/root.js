import { combineReducers } from 'redux';

import ErrorsReducer from './errors';
import SessionReducer from './session.js';
import EntitiesReducer from './entities';
import UiReducer from './ui';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UiReducer
});

export default RootReducer;
