import { SWR } from 'hooks';
import * as REQUEST_KEYS from 'utils/requestKeys';

const fetchUser = async () => await SWR.mutate({
  key: REQUEST_KEYS.FETCH_USER,
  url: 'users',
});

const fetchUserBrands = async () => await SWR.mutate({
  key: REQUEST_KEYS.FETCH_USER_BRANDS,
  url: 'appliances',
});

export default {
  fetchUser,
  fetchUserBrands,
}