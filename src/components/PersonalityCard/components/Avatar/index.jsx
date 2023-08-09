import React from 'react';
import {useSelector} from 'react-redux';
import View from './view';
import {selectUser} from 'store/selectors';

const AvatarContainer = () => {
  const user = useSelector(selectUser);

  return <View src={user.avatar} />
}
AvatarContainer.displayName = 'AvatarContainer';
export default React.memo(AvatarContainer)