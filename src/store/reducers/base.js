import { fromJS } from 'immutable';
import Types from '../types';

const initialState = fromJS({
  error: '',
  pageLoading: true,
  user: null,
  brands: [],
  description: '',
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.TOGGLE_APP_LOADING:
      return state.set('pageLoading', action.payload);
    case Types.SET_USER:
      return state.set('user', action.payload);
    case Types.SET_BRANDS:
      return state.set('brands', action.payload);
    case Types.SET_DESCRIPTION:
      return state.set('description', action.payload);
    case Types.SET_ERROR:
      return state.set('error', action.payload);
    case Types.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;