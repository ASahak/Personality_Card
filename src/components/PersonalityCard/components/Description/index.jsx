import React from 'react';
import {useSelector} from 'react-redux';
import View from './view';
import {selectDescription} from 'store/selectors';

const DescriptionContainer = () => {
  const description = useSelector(selectDescription);

  return <View text={description} />
}
DescriptionContainer.displayName = 'DescriptionContainer';
export default React.memo(DescriptionContainer)