import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import View from './view';
import {selectIsLoading} from 'store/selectors';
import {fetchUserData} from 'store/actions';
import {SWR} from 'hooks';
import * as REQUEST_KEYS from 'utils/requestKeys';

const PersonalityCardContainer = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchUserData());

    return () => {
      SWR.cancel(REQUEST_KEYS.FETCH_USER);
    }
  }, []);

  return (<View isLoading={isLoading} />)
}
PersonalityCardContainer.displayName = 'PersonalityCardContainer';
export default PersonalityCardContainer;
