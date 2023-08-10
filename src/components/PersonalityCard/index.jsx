import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import View from './view';
import {selectError, selectIsLoading} from 'store/selectors';
import {fetchUserData} from 'store/actions';
import {SWR} from 'hooks';
import * as REQUEST_KEYS from 'utils/requestKeys';

const PersonalityCardContainer = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const getUser = useCallback(() => {
    dispatch(fetchUserData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchUserData({ initial: true }));

    return () => {
      SWR.cancel(REQUEST_KEYS.FETCH_USER);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <View isLoading={isLoading} getUser={getUser} error={error} />
  )
}
PersonalityCardContainer.displayName = 'PersonalityCardContainer';
export default PersonalityCardContainer;
