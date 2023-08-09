import Types from '../types';

export const fetchUserData = (payload) => {
  return {
    type: Types.FETCH_USER_DATA,
    payload,
  }
}

export const toggleAppLoading = (payload) => {
  return {
    type: Types.TOGGLE_APP_LOADING,
    payload,
  }
}

export const setUser = (payload) => {
  return {
    type: Types.SET_USER,
    payload,
  }
}

export const setBrands = (payload) => {
  return {
    type: Types.SET_BRANDS,
    payload,
  }
}