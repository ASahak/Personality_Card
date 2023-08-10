import React from 'react';
import {useSelector} from 'react-redux';
import View from './view';
import {selectBrands} from 'store/selectors';

const BrandsContainer = () => {
  const brands = useSelector(selectBrands);

  return <View data={brands} />
}
BrandsContainer.displayName = 'BrandsContainer';
export default React.memo(BrandsContainer)