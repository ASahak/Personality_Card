import { fromJS } from 'immutable';
import Types from '../types';

const initialState = fromJS({
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
    default:
      return state;
  }
};

export default reducer;