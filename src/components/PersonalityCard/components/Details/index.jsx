import React from 'react';
import {useSelector} from 'react-redux';
import View from './view';
import {selectUser} from 'store/selectors';

const DetailsContainer = () => {
  const user = useSelector(selectUser);

  return <View data={user} />
}
DetailsContainer.displayName = 'DetailsContainer';
export default React.memo(DetailsContainer)