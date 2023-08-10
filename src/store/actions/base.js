import Types from '../types';

export const fetchUserData = (payload) => {
  return {
    type: Types.FETCH_USER_DATA,
    payload,
  }
}