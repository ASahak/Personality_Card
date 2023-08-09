import { combineReducers } from 'redux';
import baseReducer from './reducers/base';

const rootReducer = combineReducers({
  base: baseReducer,
});

function createReducer (state, action) {
  // if you want to reset redux store
  // action.type === Types.USER_LOGOUT ? undefined : state
  return rootReducer(state, action)
}

export { createReducer };