import { SWR } from 'hooks';
import * as REQUEST_KEYS from 'utils/requestKeys';
import {USERS_BASE_URL, BRANDS_COUNT} from 'utils/constants';

export const fetchUser = async () => await SWR.mutate({
  key: REQUEST_KEYS.FETCH_USER,
  url: `${USERS_BASE_URL}users`,
});

export const fetchUserBrands = async () => await SWR.mutate({
  key: REQUEST_KEYS.FETCH_USER_BRANDS,
  url: `${USERS_BASE_URL}appliances`,
  fetcherOpts: {
    params: {
      size: BRANDS_COUNT
    }
  }
});
